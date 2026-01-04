import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjB3b21hbiUyMHJlbGF4aW5nfGVufDF8fHx8MTc2NzU1NzEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 max-w-4xl mx-auto">
          Realce Sua Beleza Natural
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Tratamentos estéticos avançados com tecnologia de ponta e profissionais especializados
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('servicos')}
            className="bg-[#D97843] text-white px-8 py-4 rounded-full hover:bg-[#c26a38] transition-colors flex items-center gap-2 group"
          >
            Conheça Nossos Serviços
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/30"
          >
            Agendar Consulta
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
