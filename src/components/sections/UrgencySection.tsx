import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ArrowRight } from 'lucide-react';

const UrgencySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Set initial time values (24 hours from now)
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  React.useEffect(() => {
    // Get countdown end time from localStorage or set new one
    const getEndTime = () => {
      const storedEndTime = localStorage.getItem('countdownEndTime');
      
      if (storedEndTime) {
        return parseInt(storedEndTime);
      } else {
        // Set end time to 24 hours from now
        const endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('countdownEndTime', endTime.toString());
        return endTime;
      }
    };

    const endTime = getEndTime();
    
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;
      
      if (distance <= 0) {
        // Reset countdown if it's expired
        localStorage.removeItem('countdownEndTime');
        const newEndTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem('countdownEndTime', newEndTime.toString());
        
        setTimeLeft({
          hours: 23,
          minutes: 59,
          seconds: 59
        });
      } else {
        // Update countdown
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-secondary/90 to-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          className="bg-gray-800/40 border border-gray-700 rounded-2xl p-4 md:p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
              Apenas <span className="text-primary">10 Vagas</span> Disponíveis Este Mês
            </h2>
            <p className="text-gray-300 text-sm md:text-base px-2">
              A oferta de diagnóstico gratuito e implementação de automações é limitada para garantir qualidade no atendimento
            </p>
          </div>
          
          <div className="bg-gray-900/80 p-4 md:p-6 rounded-xl mb-6 md:mb-8">
            <p className="text-center text-gray-300 text-sm md:text-base mb-4">Esta oferta expira em:</p>
            <div className="flex justify-center space-x-2 md:space-x-4">
              <div className="text-center">
                <div className="bg-gray-800 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold text-primary mb-1">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-xs text-gray-400">Horas</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold text-primary mb-1">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <span className="text-xs text-gray-400">Minutos</span>
              </div>
              <div className="text-center">
                <div className="bg-gray-800 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-xl md:text-2xl font-bold text-primary mb-1">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <span className="text-xs text-gray-400">Segundos</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center">
              <Clock className="text-primary mr-2 w-4 h-4 md:w-5 md:h-5" />
              <span className="text-gray-300 text-sm md:text-base">Automação implementada em até 7 dias</span>
            </div>
            
            <a 
              href="#contato" 
              className="w-full md:w-auto btn btn-primary flex items-center justify-center group text-base md:text-lg px-6 md:px-12 py-4 md:py-5 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(60,223,255,0.3)] hover:shadow-[0_0_30px_rgba(60,223,255,0.5)]"
            >
              <span className="font-bold tracking-wide">Garantir Minha Vaga</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="h-12 px-4 flex items-center bg-gray-800/70 rounded-lg text-sm text-gray-300">
              <span className="text-xl mr-2">🔒</span>
              Dados protegidos pela LGPD
            </div>
            <div className="h-12 px-4 flex items-center bg-gray-800/70 rounded-lg text-sm text-gray-300">
              <span className="text-xl mr-2">🏢</span>
              Empresa 100% brasileira
            </div>
            <div className="h-12 px-4 flex items-center bg-gray-800/70 rounded-lg text-sm text-gray-300">
              <span className="text-xl mr-2">✅</span>
              Certificação de Segurança
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgencySection;