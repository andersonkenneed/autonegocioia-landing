import React, { useEffect, useState } from 'react';
import Hero from './components/sections/Hero';
import ProblemsSection from './components/sections/ProblemsSection';
import SolutionSection from './components/sections/SolutionSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CtaSection from './components/sections/CtaSection';
import UrgencySection from './components/sections/UrgencySection';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import WhatsappButton from './components/ui/WhatsappButton';
import ExitPopup from './components/ui/ExitPopup';
import ProgressBar from './components/ui/ProgressBar';

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasInteracted && !sessionStorage.getItem('exitPopupShown')) {
        setShowExitPopup(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    const handleInteraction = () => {
      setHasInteracted(true);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleInteraction);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleInteraction);
    };
  }, [hasInteracted]);

  const closeExitPopup = () => {
    setShowExitPopup(false);
  };

  return (
    <div className="min-h-screen bg-secondary overflow-hidden">
      <ProgressBar />
      <Header />
      <main>
        <Hero />
        <ProblemsSection />
        <SolutionSection />
        <TestimonialsSection />
        <CtaSection />
        <UrgencySection />
      </main>
      <Footer />
      <WhatsappButton />
      <ExitPopup isOpen={showExitPopup} onClose={closeExitPopup} />
    </div>
  );
}

export default App;