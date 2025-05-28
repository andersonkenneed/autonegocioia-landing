import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ExitPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitPopup: React.FC<ExitPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary border border-gray-700 rounded-xl p-6 sm:p-8 z-50 max-w-md w-[90%] sm:w-full mx-auto shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Espere!</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Antes de sair, que tal um diagnóstico gratuito do seu marketing digital?
              </p>
            </div>
            
            <div className="bg-primary/10 p-4 rounded-lg mb-6">
              <p className="text-center text-sm sm:text-base">
                <span className="text-primary font-bold">87%</span> dos profissionais de saúde 
                desperdiçam dinheiro em marketing que não traz resultados
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="#formulario" 
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const element = document.getElementById('formulario');
                  if (element) {
                    const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 88;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset - 24;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="block w-full btn btn-primary py-3 text-center text-sm sm:text-base font-bold tracking-wide"
              >
                Quero Meu Diagnóstico Gratuito
              </a>
              
              <button 
                onClick={onClose}
                className="block w-full text-center text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-200"
              >
                Não, obrigado
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;