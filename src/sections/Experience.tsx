import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Software Engineer',
    company: 'Health Department, Government of Sindh',
    period: 'April 2025 - Present',
    location: 'Karachi, Sindh',
    description: 'Contributing to the design and development of Sindh\'s first World Bank-funded Electronic Medical Record (EMR) system, supporting primary care and maternal and child health services across 2,000+ facilities with 15,000+ records.',
    achievements: [
      'System architecture and module integration',
      'Structured health data pipelines',
      'HRMIS portal management',
      'Collaboration with clinicians and health workers'
    ],
    image: '/images/experience-healthcare.jpg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: 'JS Bank',
    period: 'July 2024 - March 2025',
    location: 'Karachi, Sindh',
    description: 'Developed and deployed an in-house FX trading portal, replacing a previously licensed third-party system, supporting high-value foreign exchange transactions in a regulated banking environment.',
    achievements: [
      'FX trading portal development',
      '360° customer dashboard',
      'MEAN-stack applications',
      'Backend services and data integration'
    ],
    image: '/images/experience-banking.jpg',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Liam Crest (USA-based EdTech)',
    period: 'August 2023 - June 2024',
    location: 'Remote',
    description: 'Built and enhanced large-scale learning management systems (LMS) with a focus on usability and performance. Contributed to the National Council on Radiation Protection (NCRP) website.',
    achievements: [
      'Large-scale LMS development',
      'NCRP website development',
      'Responsive frontend design',
      'API integration'
    ],
    image: '/images/experience-edtech.jpg',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    role: 'MERN Stack Trainee',
    company: 'SkipQ',
    period: 'December 2022 - March 2023',
    location: 'Remote',
    description: 'Gained hands-on experience in full-stack development and collaborative software practices, working with MongoDB, Express, React, and Node.js.',
    achievements: [
      'Full-stack development training',
      'Collaborative software practices',
      'MERN stack proficiency'
    ],
    image: '/images/experience-edtech.jpg',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 hidden lg:block" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#171717] z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>

                {/* Card Content */}
                <div 
                  className={`${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'} mb-8 lg:mb-16`}
                  onMouseEnter={() => setHoveredCard(exp.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div 
                    className={`group relative bg-[#0a0a0a] rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-500 ${
                      hoveredCard === exp.id ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredCard === exp.id ? 'scale-110' : 'scale-100'
                        }`}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-20`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                        {exp.company}
                      </p>

                      <p className="text-neutral-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${exp.color} opacity-0 transition-opacity duration-300 pointer-events-none`}
                      style={{ 
                        opacity: hoveredCard === exp.id ? 0.1 : 0,
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        padding: '2px'
                      }}
                    />
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
