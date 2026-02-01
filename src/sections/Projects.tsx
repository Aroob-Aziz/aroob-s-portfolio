import { useEffect, useRef, useState } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Electronic Medical Record (EMR) System',
    category: 'Public Healthcare',
    description: 'Structured data capture, role-based portals, and digital workflows for maternal and child health services. Supporting 2,000+ facilities with 15,000+ health records.',
    tech: ['NestJS', 'PostgreSQL', 'React', 'Docker'],
    image: '/images/project-emr.jpg',
    color: 'from-blue-500 to-cyan-500',
    links: { demo: '#', github: '#' }
  },
  {
    id: 2,
    title: 'FX Trading Portal',
    category: 'Banking & Finance',
    description: 'Secure foreign exchange transaction platform replacing licensed third-party system. Supporting high-value transactions in a regulated banking environment.',
    tech: ['Node.js', 'MongoDB', 'Angular', 'Express'],
    image: '/images/project-fx.jpg',
    color: 'from-amber-500 to-orange-500',
    links: { demo: '#', github: '#' }
  },
  {
    id: 3,
    title: 'Learning Management System',
    category: 'EdTech',
    description: 'Large-scale LMS with focus on usability and performance. Designed interfaces to support diverse users with structured data flow between services.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: '/images/project-lms.jpg',
    color: 'from-green-500 to-emerald-500',
    links: { demo: '#', github: '#' }
  },
  {
    id: 4,
    title: 'Drone Telemetry Anomaly Detection',
    category: 'AI/ML',
    description: 'ML pipeline for classifying anomalies in drone telemetry data. Used SHAP and LIME for explainable AI, highlighting key feature drivers.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SHAP', 'LIME'],
    image: '/images/project-ai.jpg',
    color: 'from-purple-500 to-pink-500',
    links: { demo: '#', github: '#' }
  }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-wider uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in full-stack development, 
            system architecture, and AI-driven solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className={`relative h-full bg-[#171717] rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-500 ${
                  hoveredProject === project.id ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10' : ''
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-10 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-30' : 'opacity-10'
                  }`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${project.color} text-white rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-3 text-neutral-400 hover:text-white hover:bg-neutral-800"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Border */}
                <div 
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, rgba(99, 102, 241, 0.1) 50%, transparent 60%)`,
                    backgroundSize: '200% 200%',
                    animation: hoveredProject === project.id ? 'gradient-shift 3s linear infinite' : 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-700 text-white hover:bg-neutral-800 px-8"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
