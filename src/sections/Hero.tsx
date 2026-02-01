import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse-glow pointer-events-none" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cube */}
        <div 
          className={`absolute top-[20%] left-[10%] w-16 h-16 border border-indigo-500/30 rotate-45 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animation: 'float 8s ease-in-out infinite', transitionDelay: '800ms' }}
        />
        {/* Circle */}
        <div 
          className={`absolute top-[30%] right-[15%] w-12 h-12 rounded-full border border-purple-500/30 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animation: 'float 10s ease-in-out infinite 1s', transitionDelay: '1000ms' }}
        />
        {/* Diamond */}
        <div 
          className={`absolute bottom-[25%] left-[15%] w-10 h-10 border border-indigo-400/20 rotate-45 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ animation: 'float 7s ease-in-out infinite 0.5s', transitionDelay: '1200ms' }}
        />
        {/* Small dots */}
        <div 
          className={`absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-indigo-500/40 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animation: 'float 6s ease-in-out infinite 2s', transitionDelay: '1400ms' }}
        />
        <div 
          className={`absolute bottom-[35%] right-[10%] w-2 h-2 rounded-full bg-purple-500/40 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animation: 'float 9s ease-in-out infinite 1.5s', transitionDelay: '1600ms' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting */}
            <div 
              className={`overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-neutral-400 text-lg mb-2">Hi, I'm</p>
            </div>
            
            {/* Name */}
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-spring)' }}
            >
              <span className="gradient-text">Aroob Aziz</span>
            </h1>
            
            {/* Title */}
            <div 
              className={`overflow-hidden mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
                Software Engineer
              </h2>
            </div>
            
            <div 
              className={`overflow-hidden mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <h3 className="text-xl sm:text-2xl font-medium text-indigo-400">
                & AI Enthusiast
              </h3>
            </div>
            
            {/* Description */}
            <p 
              className={`text-neutral-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              Building scalable systems and AI-driven solutions that make a real impact. 
              Currently pursuing MSc in Artificial Intelligence while contributing to 
              public healthcare technology.
            </p>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1300ms' }}
            >
              <Button
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                onClick={() => scrollToSection('#projects')}
              >
                View My Work
                <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-neutral-700 text-white hover:bg-neutral-800 px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div 
              className={`flex gap-4 justify-center lg:justify-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1500ms' }}
            >
              <a
                href="https://github.com/Aroob-Aziz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/aroob-aziz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:aroobmemon@gmail.com"
                className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div 
            className={`relative order-1 lg:order-2 flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ 
              transitionDelay: '800ms',
              transitionTimingFunction: 'var(--ease-expo-out)'
            }}
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl scale-110 animate-pulse-glow" />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500/30 glow-primary transition-all duration-500 hover:scale-105 hover:border-indigo-500/50">
                <img
                  src="/images/hero-profile.jpg"
                  alt="Aroob Aziz"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div 
                className={`absolute -bottom-4 -right-4 bg-[#171717] border border-indigo-500/30 rounded-2xl px-6 py-3 shadow-xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ 
                  transitionDelay: '1200ms',
                  animation: 'float 5s ease-in-out infinite'
                }}
              >
                <p className="text-sm text-neutral-400">Based in</p>
                <p className="text-lg font-semibold text-white">Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
