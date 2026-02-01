import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Brain, Globe } from 'lucide-react';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15K+', label: 'Records Managed' },
  { value: '2000+', label: 'Facilities Supported' },
];

const skills = [
  { name: 'Full-Stack Development', level: 95, icon: Code2 },
  { name: 'Database Architecture', level: 90, icon: Database },
  { name: 'AI/ML', level: 85, icon: Brain },
  { name: 'System Design', level: 88, icon: Globe },
];

function AnimatedCounter({ value, isVisible }: { value: string; isVisible: boolean }) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 1500;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return <span>{count}{suffix}</span>;
}

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            Passionate About Building{' '}
            <span className="gradient-text">Technology That Matters</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-neutral-300 text-lg leading-relaxed">
              I'm a Computer Science graduate with a strong background in full-stack 
              software development and system architecture. Over the past year, I've 
              contributed to Sindh's first World Bank-funded Electronic Medical Record 
              (EMR) system, working on scalable data pipelines and digital workflows 
              for maternal and child health.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              My experience in banking, education, and public healthcare has motivated 
              my transition toward AI-driven decision support, with a focus on explainable 
              and human-centered AI. I believe technology should serve people and make 
              a tangible difference in their lives.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} isVisible={isVisible} />
                  </div>
                  <p className="text-neutral-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div 
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Core Expertise</h3>
            
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-5 h-5 text-indigo-400" />
                    <span className="text-white font-medium">{skill.name}</span>
                  </div>
                  <span className="text-neutral-400 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-indigo-500/30"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${600 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Additional Info Card */}
            <div 
              className={`mt-8 p-6 bg-[#171717] rounded-2xl border border-neutral-800 transition-all duration-700 hover:border-indigo-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <p className="text-neutral-400 text-sm mb-2">Currently Learning</p>
              <p className="text-white font-medium">
                Advanced Machine Learning, Deep Learning, and Explainable AI (XAI) techniques 
                for my MSc in Artificial Intelligence at FAST.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
