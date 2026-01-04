import { Quote } from 'lucide-react';

export function Gallery() {
  const testimonials = [
    {
      name: 'Maria Silva',
      treatment: 'Harmonização Facial',
      text: 'Resultado incrível! A equipe é extremamente profissional e atenciosa. Me sinto mais confiante e feliz com minha aparência.',
      rating: 5
    },
    {
      name: 'Ana Santos',
      treatment: 'Botox',
      text: 'Excelente experiência! O atendimento é personalizado e o resultado ficou muito natural. Super recomendo a clínica PELE.',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      treatment: 'Tratamento a Laser',
      text: 'Tecnologia de ponta e profissionais altamente capacitados. Os resultados superaram minhas expectativas!',
      rating: 5
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1722350766824-f8520e9676ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBjbGluaWMlMjBmYWNpYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzY3NTU3MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tratamento Facial'
    },
    {
      url: 'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzcGElMjB3b21hbiUyMHJlbGF4aW5nfGVufDF8fHx8MTc2NzU1NzEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Relaxamento e Bem-estar'
    },
    {
      url: 'https://images.unsplash.com/photo-1609579857457-182bbcd11230?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHRyZWF0bWVudCUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3Njc1NTcxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Tecnologia Avançada'
    },
    {
      url: 'https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwdHJlYXRtZW50JTIwbWFzc2FnZXxlbnwxfHx8fDE3Njc1NTcxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Estética Corporal'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#D97843]/10 text-[#D97843] rounded-full mb-4">
              Depoimentos
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#D97843]/10 rounded-full flex items-center justify-center mb-4">
                  <Quote className="text-[#D97843]" size={24} />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-[#D97843]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-[#D97843] text-sm">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#D97843]/10 text-[#D97843] rounded-full mb-4">
              Galeria
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
              Nossos Ambientes
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
