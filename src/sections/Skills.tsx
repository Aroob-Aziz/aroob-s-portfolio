import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Brain, 
  GitBranch, 
  Container,
  Layers,
  Terminal
} from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    name: 'Frontend',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: ['React', 'Angular', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Express', 'NestJS', 'REST APIs']
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    skills: ['PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    name: 'Data & AI',
    icon: Brain,
    color: 'from-rose-500 to-red-500',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'SHAP', 'LIME']
  },
  {
    name: 'DevOps & Tools',
    icon: Container,
    color: 'from-indigo-500 to-violet-500',
    skills: ['Git', 'Docker', 'Linux', 'CI/CD']
  }
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#171717]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            across banking, healthcare, and education sectors.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div 
                className={`relative h-full bg-[#0a0a0a] rounded-2xl p-6 border border-neutral-800 transition-all duration-500 ${
                  hoveredCategory === index ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transition-transform duration-300 ${
                      hoveredCategory === index ? 'scale-110 rotate-3' : ''
                    }`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 text-sm bg-neutral-800 text-neutral-300 rounded-lg border border-neutral-700 transition-all duration-300 ${
                        hoveredCategory === index ? 'hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-white' : ''
                      }`}
                      style={{
                        transitionDelay: hoveredCategory === index ? `${skillIndex * 50}ms` : '0ms'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Hover Gradient Border */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 transition-opacity duration-300 pointer-events-none`}
                  style={{ 
                    opacity: hoveredCategory === index ? 0.05 : 0,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    padding: '1px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-neutral-800 text-center">
            <Terminal className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Problem Solver</h4>
            <p className="text-neutral-400 text-sm">Analytical approach to complex challenges</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-neutral-800 text-center">
            <GitBranch className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Team Player</h4>
            <p className="text-neutral-400 text-sm">Collaborative and effective communicator</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-neutral-800 text-center">
            <Brain className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h4 className="text-white font-semibold mb-1">Continuous Learner</h4>
            <p className="text-neutral-400 text-sm">Always exploring new technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
