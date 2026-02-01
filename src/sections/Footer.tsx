import { Heart, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold gradient-text mb-4 hover:opacity-80 transition-opacity duration-300"
          >
            Aroob Aziz
          </button>

          {/* Tagline */}
          <p className="text-neutral-400 mb-8 max-w-md">
            Building technology that makes a difference. 
            Passionate about AI, healthcare, and impactful software solutions.
          </p>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-neutral-400 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-500 transition-all duration-250 group-hover:w-full group-hover:left-0" />
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-neutral-500 text-sm">
            <p>
              © {new Date().getFullYear()} Aroob Aziz. All rights reserved.
            </p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Karachi
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
