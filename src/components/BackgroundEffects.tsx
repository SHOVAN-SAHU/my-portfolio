'use client';

import { useState, useEffect } from 'react';

export default function BackgroundEffects() {
  const [particleCount, setParticleCount] = useState(15);

  useEffect(() => {
    const updateParticleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleCount(8); // Fewer particles on mobile
      } else if (width < 1024) {
        setParticleCount(12); // Medium amount on tablet
      } else {
        setParticleCount(15); // Full amount on desktop
      }
    };

    updateParticleCount();
    window.addEventListener('resize', updateParticleCount);

    return () => window.removeEventListener('resize', updateParticleCount);
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-terminal-bg via-terminal-dark to-terminal-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,65,0.1)_0%,transparent_50%)] sm:bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,65,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,65,0.1)_0%,transparent_50%)] sm:bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,65,0.15)_0%,transparent_50%)]" />
      </div>
      
      {/* Floating Particles - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-terminal-green rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Mobile-specific subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </>
  );
}