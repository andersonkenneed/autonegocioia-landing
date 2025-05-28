import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const specialties = [
    "Odontologia", "Nutrição", "Fisioterapia", "Psicologia", "Dermatologia",
    "Oftalmologia", "Cardiologia", "Ortopedia", "Pediatria", "Ginecologia"
  ];

  return (
    <section className="py-24 bg-gray-900/30" id="resultados">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados Reais de Profissionais como Você</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dr. Ricardo Santos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Dr. Ricardo Santos</h3>
                  <p className="text-gray-400">Dentista</p>
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-8">
                "Em 3 meses, aumentei em 70% o número de pacientes sem perder qualidade no atendimento. 
                A IA gera conteúdo relevante para minha área enquanto eu foco no que realmente importa: 
                o cuidado com meus pacientes. O investimento se pagou já no segundo mês!"
              </blockquote>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Resultado:</h4>
                  <div className="flex items-center text-success">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+70% novos pacientes</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-success h-full rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Antes: 25 pacientes/mês</span>
                  <span>Depois: 43 pacientes/mês</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="card h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dra. Ana Costa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Dra. Ana Costa</h3>
                  <p className="text-gray-400">Nutricionista</p>
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 mb-8">
                "Eu gastava horas tentando criar conteúdo para Instagram, sem resultados. 
                Com a AutoNegócio.AI, meu perfil profissional cresceu 120% em 3 meses e 
                hoje tenho uma agenda muito mais movimentada. A tecnologia deles é impressionante!"
              </blockquote>

              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">Resultado:</h4>
                  <div className="flex items-center text-success">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+120% em seguidores</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-success h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Antes: 800 seguidores</span>
                  <span>Depois: 1.760 seguidores</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg mb-6">Algumas das especialidades que atendemos:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {specialties.map((specialty, index) => (
              <motion.span
                key={specialty}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm md:text-base text-gray-300 hover:bg-gray-700 transition-colors duration-300"
              >
                {specialty}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;