import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone as SmartphoneX, Clock, TrendingDown, DollarSign, BrainCircuit } from 'lucide-react';

const ProblemCard: React.FC<{
  icon: React.ReactNode;
  text: string;
  index: number;
}> = ({ icon, text, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="card hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:shadow-primary/5"
    >
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-primary/10 rounded-lg text-primary">
          {icon}
        </div>
        <p className="text-gray-300">{text}</p>
      </div>
    </motion.div>
  );
};

const ProblemsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      icon: <SmartphoneX size={24} />,
      text: "Meu consultório está sempre vazio, mas não sei como atrair pacientes online"
    },
    {
      icon: <Clock size={24} />,
      text: "Não tenho tempo para criar conteúdo para redes sociais"
    },
    {
      icon: <TrendingDown size={24} />,
      text: "Já tentei marketing digital, mas não vejo resultados práticos"
    },
    {
      icon: <DollarSign size={24} />,
      text: "Gasto dinheiro com marketing, mas não consigo medir o retorno"
    },
    {
      icon: <BrainCircuit size={24} />,
      text: "Não sei como usar IA para melhorar meu negócio"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-secondary/95" id="problemas">
      <div className="container mx-auto">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Você Reconhece Estes Problemas?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <ProblemCard key={index} icon={problem.icon} text={problem.text} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gray-800 bg-opacity-50 p-8 rounded-2xl border border-gray-700 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">Você Sabia?</h3>
            <p className="text-xl mb-3">
              <span className="text-primary font-bold">87%</span> dos pacientes pesquisam profissionais 
              de saúde online antes de agendar uma consulta
            </p>
            <p className="text-gray-400">
              Se você não está presente digitalmente, está perdendo 9 em cada 10 potenciais pacientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;