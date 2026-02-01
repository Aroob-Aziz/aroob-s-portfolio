import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    institution: 'National University of Computer and Emerging Sciences (FAST)',
    degree: 'MSc Artificial Intelligence',
    period: '2025 - Present',
    details: 'Coursework-based program with a focus on applied AI, machine learning, and deep learning.',
    coursework: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
    icon: GraduationCap,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 2,
    institution: 'National University of Sciences & Technology (NUST)',
    degree: 'BSc Computer Science',
    period: '2019 - 2023',
    details: 'CGPA: 3.81/4.00 - Graduated with honors and strong foundation in computer science fundamentals.',
    coursework: ['AI', 'Data Structures', 'Databases', 'Software Engineering', 'Data Mining', 'HCI'],
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500'
  }
];

const certifications = [
  {
    name: 'Meta Front-End Development (React)',
    provider: 'Meta (Coursera)',
    icon: '⚛️'
  },
  {
    name: 'Python for Data Science, AI & Development',
    provider: 'IBM (Coursera)',
    icon: '🐍'
  }
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A strong educational foundation combined with continuous learning 
            through certifications and hands-on experience.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 mb-16">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(edu.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`relative bg-[#171717] rounded-2xl p-6 lg:p-8 border border-neutral-800 transition-all duration-500 ${
                  hoveredCard === edu.id ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon */}
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      hoveredCard === edu.id ? 'scale-110' : ''
                    }`}
                  >
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-2">
                      <span className="flex items-center gap-1 text-sm text-neutral-400">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-3`}>
                      {edu.institution}
                    </p>
                    <p className="text-neutral-400 mb-4">
                      {edu.details}
                    </p>

                    {/* Coursework Tags */}
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${edu.color} opacity-0 transition-opacity duration-300 pointer-events-none`}
                  style={{ 
                    opacity: hoveredCard === edu.id ? 0.05 : 0,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-indigo-400" />
            Certifications
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group bg-[#171717] rounded-xl p-5 border border-neutral-800 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-indigo-400 transition-colors duration-300">
                      {cert.name}
                    </h4>
                    <p className="text-neutral-400 text-sm">{cert.provider}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
