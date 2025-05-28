import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Check, AlertCircle } from 'lucide-react';

const CtaSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showSuccess, setShowSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    whatsapp: '',
    email: '',
    specialty: '',
    challenge: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false); // Reset error state
    
    try {
      // Por enquanto, vamos simular o envio bem-sucedido
      // Quando tiver o webhook configurado, substitua este bloco pelo fetch real
      // const response = await fetch('SEU_WEBHOOK_URL_DO_N8N', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     ...formData,
      //     source: 'landing_page',
      //     date: new Date().toISOString(),
      //     utm_source: new URLSearchParams(window.location.search).get('utm_source') || 'direct',
      //     utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || 'none',
      //     utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || 'none'
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error('Erro ao enviar dados');
      // }

      // Simulação de sucesso
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simula delay da rede

      // Mostrar mensagem de sucesso
      setShowSuccess(true);
      
      // Limpar formulário
      setFormData({
        name: '',
        whatsapp: '',
        email: '',
        specialty: '',
        challenge: ''
      });

      // Esconder mensagem de sucesso após 10 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
      
    } catch (error) {
      console.error('Erro:', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 10000);
    }
  };

  const guarantees = [
    "Sem compromisso",
    "Primeiros resultados em 60 dias ou seu dinheiro de volta",
    "Suporte especializado incluído",
    "Automação dos principais processos do seu consultório"
  ];

  const specialties = [
    "Odontologia",
    "Nutrição",
    "Fisioterapia",
    "Psicologia",
    "Dermatologia",
    "Oftalmologia",
    "Cardiologia",
    "Ortopedia",
    "Pediatria",
    "Ginecologia",
    "Endocrinologia",
    "Neurologia",
    "Urologia",
    "Otorrinolaringologia",
    "Clínica Geral",
    "Outra especialidade"
  ];

  const challenges = [
    "Atrair novos pacientes",
    "Automatizar agendamentos e lembretes",
    "Criar conteúdo para redes sociais",
    "Automatizar relacionamento com pacientes",
    "Melhorar meu site/presença digital",
    "Otimizar processos administrativos"
  ];

  return (
    <section className="py-24 bg-secondary relative" id="contato">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comece Hoje Mesmo - Sem Riscos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dê o primeiro passo para transformar sua presença digital e atrair mais pacientes
          </p>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo leva para ver resultados?",
                answer: "Nossos clientes começam a ver resultados em 30-90 dias, com aumento médio de 300% em novos pacientes. O tempo exato depende da sua especialidade e mercado."
              },
              {
                question: "Como funciona a automação do consultório?",
                answer: "Automatizamos agendamentos, lembretes, relacionamento com pacientes e marketing digital. Tudo integrado em uma única plataforma para maximizar sua eficiência."
              },
              {
                question: "Preciso ter conhecimento em marketing digital?",
                answer: "Não! Nossa plataforma é 100% automatizada e nossa equipe cuida de tudo para você, permitindo que foque no atendimento aos seus pacientes."
              },
              {
                question: "Como garantem a conformidade com o CRM?",
                answer: "Todo nosso conteúdo e estratégias seguem rigorosamente as diretrizes do Conselho Regional de Medicina para marketing médico."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <h4 className="text-lg font-semibold mb-3 text-white">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-primary/10 to-secondary border border-gray-800 p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">DIAGNÓSTICO GRATUITO + ESTRATÉGIA PERSONALIZADA DE AUTOMAÇÃO</h3>
              <div className="flex items-center mb-6">
                <p className="text-gray-400 line-through mr-3">Valor: R$ 500,00</p>
                <p className="text-success font-bold">GRÁTIS por tempo limitado</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-success mr-2 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <p className="text-center text-gray-300">
                  Mais de 50 profissionais de saúde já transformaram seus consultórios
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-800/30 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Solicite seu diagnóstico gratuito:</h3>
              
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success/20 border border-success/30 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center mb-2">
                    <Check className="text-success mr-2" />
                    <h4 className="font-bold text-success">Diagnóstico Solicitado com Sucesso!</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Ótimo! Nossa equipe especializada analisará seu perfil e entrará em contato em até 24 horas com seu diagnóstico personalizado e próximos passos para impulsionar sua presença digital.
                  </p>
                </motion.div>
              )}

              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center mb-2">
                    <AlertCircle className="text-red-500 mr-2" />
                    <h4 className="font-bold text-red-500">Ops! Algo deu errado</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    No momento estamos com uma instabilidade no sistema. Por favor, tente novamente em alguns minutos ou entre em contato diretamente pelo WhatsApp para agilizar seu atendimento.
                  </p>
                </motion.div>
              )}

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="Dr. João Silva"
                  />
                </div>
                
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-300 mb-1">
                    Especialidade
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Selecione sua especialidade</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-300 mb-1">
                    Principal desafio
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Selecione seu principal desafio</option>
                    {challenges.map(challenge => (
                      <option key={challenge} value={challenge}>{challenge}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn btn-primary text-lg flex items-center justify-center group py-4 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(60,223,255,0.3)] hover:shadow-[0_0_30px_rgba(60,223,255,0.5)]"
                >
                  <span className="relative z-10 font-bold tracking-wide text-center">
                    QUERO MEU DIAGNÓSTICO GRATUITO
                  </span>
                </button>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  Seus dados estão protegidos pela LGPD.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;