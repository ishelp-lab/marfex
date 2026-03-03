import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'materials';
  onNavigate: (page: 'home' | 'materials') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex flex-col">
              <span className="text-xs tracking-widest text-gray-600 font-light">MARMORARIA</span>
              <span className="text-2xl font-light tracking-wider">Marfex</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === 'home' ? 'text-[#2B93C7] font-medium' : 'text-gray-700 hover:text-[#2B93C7]'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('materials')}
              className={`text-sm tracking-wide transition-colors ${
                currentPage === 'materials' ? 'text-[#2B93C7] font-medium' : 'text-gray-700 hover:text-[#2B93C7]'
              }`}
            >
              Materiais
            </button>
            <a
              href="#contato"
              className="px-6 py-2.5 bg-[#2B93C7] text-white text-sm tracking-wide rounded-full hover:bg-[#2380b0] transition-colors"
            >
              Contato
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                currentPage === 'home' ? 'bg-[#2B93C7] text-white' : 'text-gray-700'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => {
                onNavigate('materials');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                currentPage === 'materials' ? 'bg-[#2B93C7] text-white' : 'text-gray-700'
              }`}
            >
              Materiais
            </button>
            <a
              href="#contato"
              className="block w-full text-center px-4 py-2 bg-[#2B93C7] text-white rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
