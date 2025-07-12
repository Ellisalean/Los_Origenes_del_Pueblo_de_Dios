
import React from 'react';
import { User } from '../types';
import { LogoutIcon } from '../constants';

interface HeaderProps {
    user?: User | null;
    onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  
  const getDisplayName = () => {
    if (!user) return '';
    if (user.name) return user.name.split(' ')[0];
    if (user.email) return user.email.split('@')[0];
    return 'Usuario';
  };
  
  const getAvatarUrl = () => {
    if (!user) return '';
    return user.imageUrl || `https://avatar.iran.liara.run/public/boy?username=${user.uid}`;
  }

  return (
    <header className="relative h-64 md:h-80 w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/lms-header/1600/900')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-cisco-blue/80 to-cisco-blue-light/50"></div>
      
      {user && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-4 bg-black/20 backdrop-blur-sm p-2 rounded-lg">
            <div className="flex items-center gap-3">
                <img src={getAvatarUrl()} alt={user.name || 'Avatar'} className="w-10 h-10 rounded-full border-2 border-accent-light object-cover bg-cisco-blue-dark" />
                <span className="text-white font-medium hidden sm:inline">Bienvenido, {getDisplayName()}</span>
            </div>
            <button
                onClick={onLogout}
                className="flex items-center gap-2 text-white bg-cisco-blue-light/50 hover:bg-cisco-blue-light transition-colors p-2 rounded-md"
                aria-label="Cerrar sesión"
            >
                <LogoutIcon className="w-5 h-5" />
            </button>
          </div>
      )}
      
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Los Orígenes del Pueblo de Dios</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl drop-shadow-md">
          Un análisis profundo del libro de Génesis y los fundamentos de la fe.
        </p>
      </div>
    </header>
  );
};

export default Header;