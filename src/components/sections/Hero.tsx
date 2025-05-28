import * as React from 'react';
import Logo from '../ui/Logo';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-70 z-0">
        {/* Overlay gradiente para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/90"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <Logo className="mb-8" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-300 hover:from-primary hover:to-white">
            Pare de Perder Pacientes para Clínicas que Investem em{' '}
            <span className="text-primary relative">
              Marketing Digital e Automação
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-300">
            Automatize sua presença online e processos do consultório para aumentar em até{' '}
            <span className="text-success font-bold hover:text-primary transition-colors duration-300">150%</span> o número de novos pacientes em 90 dias, 
            usando <span className="highlight text-primary">Inteligência Artificial</span> específica para profissionais de saúde
          </p>
          
          <a 
            href="#contato" 
            className="btn btn-primary text-lg px-12 py-5 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(60,223,255,0.3)] hover:shadow-[0_0_30px_rgba(60,223,255,0.5)]"
          >
            <span className="font-bold tracking-wide flex items-center">
              Quero Mais Pacientes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: '👥', value: '150%', label: 'Mais Pacientes' },
            { icon: '⚡', value: '60%', label: 'Processos Automatizados' },
            { icon: '🎯', value: '90', label: 'Dias para Resultados' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group flex items-center justify-center bg-gray-800/60 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/80 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-primary/10 rounded-full p-3 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-gray-300 group-hover:text-primary transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="flex items-center bg-gray-800/40 px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">⚕️</span>
            <span className="text-gray-300 text-sm">Soluções em conformidade com o CFM/CRM</span>
          </div>
          <div className="flex items-center bg-gray-800/40 px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">🏆</span>
            <span className="text-gray-300 text-sm">Top 10 Health Tech 2024</span>
          </div>
          <div className="flex items-center bg-gray-800/40 px-6 py-3 rounded-full">
            <span className="text-2xl mr-2">⭐</span>
            <span className="text-gray-300 text-sm">4.9/5 de Satisfação</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;