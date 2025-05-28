import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Clock, Bot, BarChart3, Headset } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="flex items-start p-6 hover:bg-gray-800 hover:bg-opacity-30 rounded-xl transition-all duration-300"
    >
      <div className="mr-4 p-4 bg-primary/10 text-primary rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ number, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex"
    >
      <div className="mr-6 relative">
        <div className="w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-xl">
          {number}
        </div>
        {number < 3 && (
          <div className="absolute top-12 bottom-0 left-1/2 w-1 bg-primary/30 transform -translate-x-1/2"></div>
        )}
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const SolutionSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Target size={28} />,
      title: "Mais Pacientes",
      description: "Aumento médio de 250% em novos agendamentos no primeiro trimestre."
    },
    {
      icon: <Clock size={28} />,
      title: "Economia de Tempo",
      description: "15h/mês economizadas em tarefas de marketing que você pode dedicar aos seus pacientes."
    },
    {
      icon: <Bot size={28} />,
      title: "IA Especializada",
      description: "Conteúdo médico gerado automaticamente seguindo as regulamentações do CFM."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Resultados Mensuráveis",
      description: "Dashboard com métricas específicas para saúde que mostram o retorno exato do investimento."
    },
    {
      icon: <Headset size={28} />,
      title: "Suporte Especializado",
      description: "Equipe com experiência em TI hospitalar para te auxiliar em cada etapa."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="solucao">
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça o Sistema AutoNegócio.AI</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A única solução de marketing digital criada especificamente para profissionais de saúde independentes
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Benefit 
              key={index} 
              icon={benefit.icon} 
              title={benefit.title} 
              description={benefit.description} 
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gray-800/30 border border-gray-700 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-center mb-10">Como Funciona</h3>
          <div className="max-w-2xl mx-auto">
            <Step 
              number={1} 
              title="Diagnóstico Gratuito" 
              description="Análise completa da sua presença digital atual, identificando pontos fracos e oportunidades de melhoria específicas para sua especialidade."
              delay={0.3}
            />
            <Step 
              number={2} 
              title="Implementação Personalizada" 
              description="Setup completo em até 7 dias, incluindo otimização de perfis, criação de conteúdo e configuração de campanhas direcionadas."
              delay={0.5}
            />
            <Step 
              number={3} 
              title="Crescimento Automatizado" 
              description="Mais pacientes todo mês, no piloto automático, enquanto você se concentra no que faz de melhor: cuidar dos seus pacientes."
              delay={0.7}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;