import { Heart } from 'lucide-react';
import logoImage from "../../assets/logo.png";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img 
              src={logoImage} 
              alt="PELE" 
              className="h-16 w-16 rounded-lg mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Clínica de estética especializada em tratamentos faciais e corporais, 
              oferecendo o que há de mais moderno em tecnologia e cuidados personalizados 
              para realçar sua beleza natural.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#D97843] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-400 hover:text-[#D97843] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-400 hover:text-[#D97843] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('galeria')}
                  className="text-gray-400 hover:text-[#D97843] transition-colors"
                >
                  Galeria
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Botox</li>
              <li>Harmonização Facial</li>
              <li>Tratamentos a Laser</li>
              <li>Estética Facial</li>
              <li>Estética Corporal</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2026 PELE Clínica de Estética. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="text-[#D97843]" size={16} fill="currentColor" />
              <span>para você</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
