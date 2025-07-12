
import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => Promise<boolean>;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const success = await onLogin(email, password);
    if (!success) {
      setError('Email o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 p-4">
        <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('https://picsum.photos/seed/lms-header/1600/900')" }}
        ></div>
         <div className="absolute inset-0 bg-cisco-blue/50"></div>

      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden z-10">
        <div className="p-8">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold text-cisco-blue-dark">Bienvenido</h1>
                <p className="text-slate-600 mt-1">Inicia sesión para acceder al curso</p>
            </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-cisco-blue focus:border-cisco-blue sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                   className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-cisco-blue focus:border-cisco-blue sm:text-sm"
                />
              </div>

            {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md text-center">{error}</p>}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cisco-blue hover:bg-cisco-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cisco-blue-light transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Ingresando...' : 'Ingresar'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;