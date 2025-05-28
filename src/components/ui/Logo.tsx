import * as React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative w-48 h-48 mb-4">
        {/* Efeitos de brilho */}
        <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-primary/5 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Container da logo com borda brilhante */}
        <div className="relative w-full h-full rounded-full p-4 bg-secondary/50 backdrop-blur-sm border border-primary/20">
          {/* Logo */}
          <div className="relative w-full h-full animate-float">
            <img
              src="/Cérebro Digital_ Biologia e Tecnologia.png"
              alt="AutoNegócio.AI Logo"
              className="w-full h-full object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(60, 223, 255, 0.3))'
              }}
            />
          </div>
        </div>
      </div>

      {showText && (
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-2 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              AUTO<span className="text-white">NEGÓCIO</span>
            </span>
            <span className="text-primary glow relative inline-block ml-1">.AI</span>
            
            {/* Linha decorativa animada */}
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
          </h1>
          <p className="text-gray-300 text-lg font-light mt-4 relative group">
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300">
              Automatize.
            </span>
            {' '}
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
              Escale.
            </span>
            {' '}
            <span className="relative inline-block group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
              Lucre com IA.
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo; 