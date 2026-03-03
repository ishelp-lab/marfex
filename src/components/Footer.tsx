import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3D3A35] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-xs tracking-widest text-gray-400">MARMORARIA</span>
              <span className="text-2xl font-light tracking-wider">Marfex</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excelência em mármores e acabamentos premium. Transformando ambientes com elegância e sofisticação.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+" className="flex items-center text-gray-400 hover:text-[#2B93C7] transition-colors text-sm">
                <Phone size={18} className="mr-3" />
                Entre em contato
              </a>
              <a href="mailto:contato@marfex.com" className="flex items-center text-gray-400 hover:text-[#2B93C7] transition-colors text-sm">
                <Mail size={18} className="mr-3" />
                contato@marfex.com
              </a>
              <div className="flex items-start text-gray-400 text-sm">
                <MapPin size={18} className="mr-3 mt-0.5 flex-shrink-0" />
                <span>Seu endereço aqui</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Redes Sociais</h3>
            <a
              href="https://www.instagram.com/marmoraria_marfexofc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-400 hover:text-[#2B93C7] transition-colors text-sm"
            >
              <Instagram size={18} className="mr-3" />
              @marmoraria_marfexofc
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marmoraria Marfex. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
