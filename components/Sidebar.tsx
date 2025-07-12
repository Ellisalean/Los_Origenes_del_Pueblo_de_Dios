
import React from 'react';
import { NavItem } from '../types';
import { CheckCircleIcon } from '../constants';

interface SidebarProps {
  lessonNavItems: NavItem[];
  activeSection: string;
  viewedSections: Set<string>;
  isOpen: boolean;
  onClose: () => void;
  activeView: 'lesson' | 'resources';
  onViewChange: (view: 'lesson' | 'resources') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ lessonNavItems, activeSection, viewedSections, isOpen, onClose, activeView, onViewChange }) => {
  const sidebarContent = (
    <div className="h-full bg-cisco-blue-dark text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold text-white mb-2">Lección 2</h1>
      <h2 className="text-lg font-light text-slate-300 mb-4">Orígenes del Pueblo de Dios</h2>
      
      {/* Tabs */}
      <div className="flex border-b border-cisco-blue-light mb-4">
        <button
          onClick={() => onViewChange('lesson')}
          className={`flex-1 py-2 text-center font-semibold transition-colors duration-200 focus:outline-none ${
            activeView === 'lesson'
              ? 'text-accent border-b-2 border-accent'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Lección
        </button>
        <button
          onClick={() => onViewChange('resources')}
          className={`flex-1 py-2 text-center font-semibold transition-colors duration-200 focus:outline-none ${
            activeView === 'resources'
              ? 'text-accent border-b-2 border-accent'
              : 'text-slate-300 hover:text-white'
          }`}
        >
          Recursos
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {activeView === 'lesson' && (
          <ul className="space-y-2">
            {lessonNavItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 text-slate-200 hover:bg-cisco-blue hover:text-white ${
                    activeSection === item.id ? 'bg-cisco-blue-light text-white font-semibold shadow-lg' : ''
                  }`}
                >
                  <span className="flex-grow">{item.title}</span>
                  {viewedSections.has(item.id) && (
                    <CheckCircleIcon className="w-6 h-6 text-accent-light ml-2 flex-shrink-0" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        )}
        {activeView === 'resources' && (
            <div className="p-2 text-slate-300">
              <h3 className="text-xl font-semibold text-white mb-3 mt-2">Materiales del Curso</h3>
              <p className="text-sm">
                Aquí encontrarás el syllabus, libros, mapas y otros documentos de apoyo para la lección. 
                Selecciona un recurso de la lista principal para descargarlo.
              </p>
            </div>
        )}
      </nav>

      <div className="mt-auto text-center text-xs text-slate-400 pt-4">
        <p>Creado con React y Tailwind CSS</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <aside
        className={`fixed top-0 left-0 w-72 h-full bg-cisco-blue-dark z-50 transform transition-transform lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 h-screen sticky top-0 flex-shrink-0">
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
