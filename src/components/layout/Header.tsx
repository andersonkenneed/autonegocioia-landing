import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary/95 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative group">
            {/* Efeito de brilho */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Logo */}
            <img 
              src="/20250527_1914_Logotipo Futurista de IA_remix_01jw9wxtgbecaatm2gsfq79dgw.png" 
              alt="AutoNegócio.AI Logo" 
              className="h-20 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(60, 223, 255, 0.3))'
              }}
            />
          </div>
        </div>
        <a 
          href="#contato" 
          className="btn btn-outline text-sm sm:text-base px-6 py-3 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(60,223,255,0.3)]"
        >
          <span className="font-bold tracking-wide flex items-center">
            Diagnóstico Gratuito
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;