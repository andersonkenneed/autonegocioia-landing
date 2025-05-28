import React from 'react';
import { Shield, Check, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/20250527_1914_Logotipo Futurista de IA_remix_01jw9wxtgbecaatm2gsfq79dgw.png"
                alt="AutoNegócio.AI Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Transformando profissionais de saúde em referências digitais
            </p>
            <p className="text-gray-400 text-sm">
              Desenvolvido com IA por especialistas em TI hospitalar
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Odontologia</li>
              <li>Nutrição</li>
              <li>Fisioterapia</li>
              <li>Psicologia</li>
              <li>Dermatologia</li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Segurança</h3>
            <div className="flex items-center mb-3">
              <Shield className="text-primary w-5 h-5 mr-2" />
              <span className="text-gray-400">Dados protegidos pela LGPD</span>
            </div>
            <div className="flex items-center mb-3">
              <Check className="text-success w-5 h-5 mr-2" />
              <span className="text-gray-400">Empresa 100% brasileira</span>
            </div>
            <div className="flex items-center">
              <Heart className="text-primary w-5 h-5 mr-2" />
              <span className="text-gray-400">Suporte humanizado</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AutoNegócio.AI - Todos os direitos reservados
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Conforme regulamentações do CFM para marketing médico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;