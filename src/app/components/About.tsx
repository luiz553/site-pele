import { Award, Users, Heart, Sparkles } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Excelência',
      description: 'Profissionais certificados e experientes'
    },
    {
      icon: Sparkles,
      title: 'Tecnologia',
      description: 'Equipamentos de última geração'
    },
    {
      icon: Heart,
      title: 'Cuidado',
      description: 'Atendimento personalizado e humanizado'
    },
    {
      icon: Users,
      title: 'Experiência',
      description: 'Mais de 10 anos transformando vidas'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU1NzEzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Clínica PELE"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#D97843]/20 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-1 bg-[#D97843]/10 text-[#D97843] rounded-full mb-4">
              Sobre Nós
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
              Sua Beleza, Nossa Paixão
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Na PELE Clínica de Estética, combinamos ciência, tecnologia e arte para oferecer 
              os melhores tratamentos estéticos. Nossa equipe de profissionais altamente 
              qualificados está comprometida em proporcionar resultados naturais e harmoniosos, 
              respeitando a individualidade de cada cliente.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex flex-col items-start">
                    <div className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="text-[#D97843]" size={24} />
                    </div>
                    <h4 className="text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
