import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#D97843]/10 text-[#D97843] rounded-full mb-4">
            Entre em Contato
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Agende Sua Consulta
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Estamos prontos para atender você. Entre em contato e descubra como podemos 
            ajudar você a alcançar seus objetivos estéticos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#D97843] focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#D97843] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#D97843] focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#D97843] focus:outline-none transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="botox">Botox</option>
                  <option value="harmonizacao">Harmonização Facial</option>
                  <option value="laser">Tratamentos a Laser</option>
                  <option value="estetica-facial">Estética Facial</option>
                  <option value="estetica-corporal">Estética Corporal</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#D97843] focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos mais sobre o que você está procurando..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D97843] text-white py-4 rounded-lg hover:bg-[#c26a38] transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#D97843]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Comendador Gustavo Paiva, 5945<br />
                      Cruz das Almas, Maceió - AL 57038-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#D97843]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Telefone</h4>
                    <p className="text-gray-600">
                      (82) 99971-0216<br />
                      {/* (11) 3456-7890 */}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#D97843]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">E-mail</h4>
                    <p className="text-gray-600">
                      contato@peleclinica.com.br<br />
                      agendamento@peleclinica.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#D97843]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 19h<br />
                      Sábado: 9h às 14h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl text-gray-900 mb-6">
                Redes Sociais
              </h3>
              <p className="text-gray-600 mb-6">
                Siga-nos nas redes sociais e acompanhe nossas novidades, dicas de beleza e promoções especiais
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/pelemaceio/" 
                  className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center hover:bg-[#D97843] hover:text-white transition-colors text-[#D97843]"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/pelemaceio?locale=pt_BR" 
                  className="w-12 h-12 bg-[#D97843]/10 rounded-lg flex items-center justify-center hover:bg-[#D97843] hover:text-white transition-colors text-[#D97843]"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
