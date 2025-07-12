
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BlockRenderer from './components/BlockRenderer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LoginPage from './components/LoginPage';
import { LESSON_SECTIONS, LESSON_NAV_ITEMS, RESOURCES_SECTION, MenuIcon } from './constants';
import { User } from './types';
import { auth } from './firebase/config';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword, User as FirebaseUser } from 'firebase/auth';

// Componente que contiene la interfaz principal del LMS
const LmsContent: React.FC<{ user: User, onLogout: () => void }> = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState<'lesson' | 'resources'>('lesson');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(LESSON_NAV_ITEMS[0]?.id || '');
  const [viewedSections, setViewedSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (activeView !== 'lesson') return;

    sectionRefs.current = sectionRefs.current.slice(0, LESSON_SECTIONS.length);
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (activeView === 'lesson') {
              setActiveSection(sectionId);
              setViewedSections((prev) => new Set(prev).add(sectionId));
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    const refsToObserve = sectionRefs.current;
    refsToObserve.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refsToObserve.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [activeView]);

  const handleViewChange = (view: 'lesson' | 'resources') => {
    setActiveView(view);
    if (isSidebarOpen) setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <Sidebar 
        lessonNavItems={LESSON_NAV_ITEMS}
        activeSection={activeSection}
        viewedSections={viewedSections}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView={activeView}
        onViewChange={handleViewChange}
      />
      <div className="flex-1 flex flex-col">
        <button 
          className="lg:hidden fixed top-4 left-4 z-[60] p-2 bg-cisco-blue-dark text-white rounded-md"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <main className="flex-1">
          <Header user={user} onLogout={onLogout}/>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeView === 'lesson' && LESSON_SECTIONS.map((section, index) => (
              <section
                id={section.id}
                key={section.id}
                ref={el => { sectionRefs.current[index] = el; }}
                className={`py-12 md:py-16 px-6 md:px-10 my-8 rounded-xl shadow-lg
                  ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                `}
              >
                {section.content.map((block, blockIndex) => (
                  <BlockRenderer key={`${section.id}-${blockIndex}`} block={block} />
                ))}
              </section>
            ))}
            {activeView === 'resources' && (
              <section
                id={RESOURCES_SECTION.id}
                key={RESOURCES_SECTION.id}
                className={`py-12 md:py-16 px-6 md:px-10 my-8 rounded-xl shadow-lg bg-white`}
              >
                {RESOURCES_SECTION.content.map((block, blockIndex) => (
                  <BlockRenderer key={`${RESOURCES_SECTION.id}-${blockIndex}`} block={block} />
                ))}
              </section>
            )}
          </div>
        </main>
        <footer className="bg-cisco-blue-dark text-white text-center p-6 mt-8">
            <p>&copy; 2025 Lección 2 Pentateuco LATINTHEOLOGICAL SEMINARY. Todos los derechos reservados.</p>
        </footer>
      </div>
      <ScrollToTopButton />
    </div>
  );
};


// Componente principal que maneja la autenticación con Firebase
const App: React.FC = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // onAuthStateChanged es un observador que se ejecuta cuando el usuario
        // inicia o cierra sesión. Retorna una función para darse de baja.
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                // El usuario ha iniciado sesión. Mapeamos el usuario de Firebase
                // a nuestro tipo de usuario de la aplicación.
                const appUser: User = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                    imageUrl: firebaseUser.photoURL,
                };
                setCurrentUser(appUser);
            } else {
                // El usuario ha cerrado sesión.
                setCurrentUser(null);
            }
            // Dejamos de mostrar el spinner de carga una vez que se determina
            // el estado de autenticación inicial.
            setLoading(false);
        });

        // La función de limpieza de useEffect se ejecuta cuando el componente
        // se desmonta, lo que previene fugas de memoria.
        return () => unsubscribe();
    }, []);

    const handleLogin = async (email: string, password: string): Promise<boolean> => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // onAuthStateChanged se encargará de actualizar el estado.
            return true;
        } catch (error) {
            console.error("Error de inicio de sesión con Firebase:", error);
            return false;
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // onAuthStateChanged se encargará de actualizar el estado a null.
        } catch (error) {
            console.error("Error al cerrar sesión con Firebase:", error);
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-cisco-blue">
                <p className="text-white text-xl">Verificando sesión...</p>
            </div>
        );
    }
    
    return (
        <>
            {currentUser ? (
                <LmsContent user={currentUser} onLogout={handleLogout} />
            ) : (
                <LoginPage onLogin={handleLogin} />
            )}
        </>
    );
};

export default App;