import { Sparkles, Zap, Scan, User } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Botox',
      description: 'Redução de rugas e linhas de expressão com resultados naturais e duradouros',
      image: 'https://images.unsplash.com/photo-1510511293580-9d525c6d8913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBoYXJtb25pemF0aW9uJTIwYm90b3h8ZW58MXx8fHwxNzY3NTU3MTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Procedimento rápido', 'Resultados em 3-7 dias', 'Duração de 4-6 meses']
    },
    {
      icon: User,
      title: 'Harmonização Facial',
      description: 'Equilíbrio e simetria facial através de técnicas avançadas e personalizadas',
      image: 'https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjbGluaWMlMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY3NTU3MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Avaliação personalizada', 'Técnicas modernas', 'Resultados harmoniosos']
    },
    {
      icon: Zap,
      title: 'Tratamentos a Laser',
      description: 'Tecnologia avançada para rejuvenescimento, depilação e tratamento de manchas',
      image: 'https://images.unsplash.com/photo-1609579857457-182bbcd11230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHRyZWF0bWVudCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3Njc1NTcxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Tecnologia de ponta', 'Tratamento seguro', 'Resultados eficazes']
    },
    {
      icon: Scan,
      title: 'Estética Facial',
      description: 'Limpeza de pele, peeling e tratamentos faciais para revitalização completa',
      image: 'https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjbGluaWMlMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY3NTU3MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      features: ['Protocolos exclusivos', 'Produtos premium', 'Resultados imediatos']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#D97843]/10 text-[#D97843] rounded-full mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Tratamentos Especializados
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Oferecemos uma ampla gama de procedimentos estéticos com tecnologia avançada 
            e atendimento personalizado para realçar sua beleza natural
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#D97843] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-white text-2xl">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#D97843] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-[#D97843]/10 text-[#D97843] py-3 rounded-lg hover:bg-[#D97843] hover:text-white transition-colors">
                    Saiba Mais
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl text-gray-900 mb-6 text-center">
            Outros Serviços
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97843]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Sparkles className="text-[#D97843]" size={28} />
              </div>
              <h4 className="text-gray-900 mb-2">Preenchimentos</h4>
              <p className="text-gray-600 text-sm">Ácido hialurônico e bioestimuladores</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97843]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Scan className="text-[#D97843]" size={28} />
              </div>
              <h4 className="text-gray-900 mb-2">Estética Corporal</h4>
              <p className="text-gray-600 text-sm">Modelagem e redução de medidas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D97843]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="text-[#D97843]" size={28} />
              </div>
              <h4 className="text-gray-900 mb-2">Microagulhamento</h4>
              <p className="text-gray-600 text-sm">Rejuvenescimento e cicatrizes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
