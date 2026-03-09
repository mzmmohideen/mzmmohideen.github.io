import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Terminal, 
  Award, 
  BookOpen, 
  ChevronRight,
  Menu,
  X,
  Briefcase,
  GraduationCap,
  Trophy,
  MessageSquare,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Typewriter } from './components/Typewriter';
import { cn } from './lib/utils';

// --- Data ---
const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Blog', href: '#blog' },
];

const ROLES = [
  "Senior Software Engineering Lead",
  "Full-Stack AI Engineer",
  "Technical Trainer",
  "Freelancer"
];

const EXPERIENCE = [
  {
    company: "Optum Global Solutions",
    role: "Senior Software Engineering Lead",
    period: "Jan 2026 - Present",
    description: "Leading engineering initiatives at Optum, focusing on scalable architectures and high-performance systems.",
    location: "Chennai, India"
  },
  {
    company: "Turing Global India",
    role: "Associate Technical Lead",
    period: "Aug 2025 - Jan 2026",
    description: "Developed scalable backend APIs using Python and FastAPI. Integrated LLM-powered features and RAG workflows into enterprise systems.",
    location: "Remote"
  },
  {
    company: "Sony India Software Centre",
    role: "Technical Specialist",
    period: "Jan 2021 - Aug 2025",
    description: "Led development of customer-centric applications for PlayStation. Containerized services with Docker/AWS EKS and implemented AI-driven media search prototypes.",
    location: "Bangalore, India"
  },
  {
    company: "Botvfx Private Limited",
    role: "Senior Python Programmer",
    period: "Feb 2016 - Jan 2021",
    description: "Led full-stack development using Django and React.js. Implemented automated testing frameworks reducing manual testing by 50%.",
    location: "Chennai, India"
  }
];

const PROJECTS = [
  {
    title: "Investment Campaign Planner",
    period: "Aug 2025 - Nov 2025",
    description: "AI-assisted features for customer investment channel planning, integrating LLM APIs for predictive analysis.",
    tags: ["Python", "LLM", "RAG", "DynamoDB"],
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "AI-Driven Media Search",
    company: "Sony",
    description: "Prototype using Intern Video2 model for object-based semantic search and metadata extraction from video assets.",
    tags: ["AI", "MongoDB", "Python", "Computer Vision"],
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "PlayStation Lease Automation",
    company: "Sony",
    description: "Prompt-based hardware provisioning system with AI chatbot interface for automated request creation.",
    tags: ["Automation", "React", "Node.js", "AI Chatbot"],
    icon: <Terminal className="w-5 h-5" />
  },
  {
    title: "Equity Boss",
    description: "Web-based platform for portfolio management for Indian equity markets with real-time data analysis.",
    tags: ["Django", "AngularJS", "PostgreSQL", "FinTech"],
    icon: <Award className="w-5 h-5" />
  }
];

const SKILLS = [
  { category: "Languages & Frameworks", items: ["Python", "Django", "FastAPI", "Node.js", "React.js", "ExpressJS", "Flask"] },
  { category: "AI & Emerging Tech", items: ["Generative AI", "LLM Integration", "RAG", "AI Chatbots", "AI API Integration"] },
  { category: "DevOps & Cloud", items: ["AWS", "Digital Ocean", "Docker", "Nginx", "CI/CD", "Git"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB"] },
];

const ACHIEVEMENTS = [
  { title: "20,000+ Stack Overflow Points", description: "Active contributor to the developer community with high reputation in Python and Software Engineering." },
  { title: "500+ Candidates Trained", description: "Successfully mentored and trained aspiring developers in Python through online/offline sessions." },
  { title: "Best Performing Team Award", description: "Received at Sony India Software Center for Q3 2023." },
  { title: "CPL Hackathon Winner", description: "Won the competition at Sony India Software Center for innovative problem-solving." },
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif italic mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 100 }}
      viewport={{ once: true }}
      className="h-px bg-accent mt-6"
    />
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled ? "bg-bg-dark/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-serif italic tracking-tighter hover:text-accent transition-colors">
            M. Mohideen M Z
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:mzmmohideen@gmail.com"
              className="px-5 py-2 bg-accent text-bg-dark text-sm font-bold rounded-full hover:bg-emerald-400 transition-all active:scale-95"
            >
              Hire Me
            </a>
          </div>

          <button 
            className="md:hidden text-zinc-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-bg-dark pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif italic border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              Available for Consulting
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic leading-[0.9] text-gradient mb-8">
              Mohammed <br /> Mohideen M Z
            </h1>
            <div className="h-12 text-xl md:text-2xl font-mono text-zinc-400">
              <Typewriter texts={ROLES} />
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-bg-dark font-bold rounded-full flex items-center gap-2 group"
              >
                View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <div className="flex items-center gap-4">
                <a href="https://github.com/mzmmohideen" target="_blank" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/mzmmohideen" target="_blank" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:mzmmohideen@gmail.com" className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading subtitle="Crafting intelligent systems with 11+ years of expertise.">
                The Professional <br /> Summary
              </SectionHeading>
              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  Highly accomplished Full-Stack AI Developer with a strong foundation in building scalable, high-performance applications using Python, Django, React.js, and Node.js.
                </p>
                <p>
                  Currently expanding expertise into Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG), focusing on building intelligent, context-aware systems that integrate AI capabilities into enterprise workflows.
                </p>
                <p>
                  Recognized leader and mentor with a consistent track record of delivering mission-critical systems and driving innovation at companies like Sony and Turing.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm font-serif italic text-zinc-500">
                    "Proud son of Sakkena and Zakriya, whose support and values shaped my journey."
                  </p>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif italic text-accent">11+</h4>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif italic text-accent">20k+</h4>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mt-1">StackOverflow Rep</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto group"
            >
              <div className="absolute inset-0 border-2 border-accent/20 rounded-3xl translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              <div className="relative h-full w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/mzmmohideen/800/800" 
                  alt="Mohammed Mohideen" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Based in Chennai, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="A journey through leading tech organizations.">
            Work Experience
          </SectionHeading>

          <div className="space-y-4">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-all cursor-default overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-serif italic group-hover:text-accent transition-colors">{exp.role}</h3>
                    <p className="text-zinc-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right md:text-right flex flex-col items-start md:items-end">
                    <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                    <span className="text-xs text-zinc-600 uppercase tracking-widest mt-1">{exp.location}</span>
                  </div>
                </div>
                <p className="mt-6 text-zinc-500 max-w-3xl leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-card-dark/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Selected works in AI, Web, and Automation.">
            Featured Projects
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-accent/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-serif italic mb-2">{project.title}</h3>
                {project.company && <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">{project.company}</p>}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="My technical arsenal and areas of expertise.">
            Technical Skills
          </SectionHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-card-dark/20"
              >
                <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-6">{skillGroup.category}</h4>
                <ul className="space-y-3">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="flex items-center gap-2 text-zinc-400 group">
                      <ChevronRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Recognition for contributions and excellence.">
            Key Achievements
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-accent/10 bg-bg-dark hover:border-accent/40 transition-all"
              >
                <Trophy className="w-8 h-8 text-accent mb-6" />
                <h4 className="text-lg font-serif italic mb-3">{ach.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Under Construction Section */}
      <section id="blog" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 skew-y-3 origin-right" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <BookOpen className="w-16 h-16 text-accent/20 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Technical Insights</h2>
          <p className="text-zinc-500 max-w-xl mx-auto mb-10">
            I'm currently preparing a series of tutorials and technical articles on GenAI, RAG, and Python architectures.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-accent/30 bg-accent/10 text-accent font-bold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            Under Construction
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Let's build <br /> something magical.</h2>
              <p className="text-zinc-500 max-w-md mb-8">
                Available for consulting, freelance projects, and technical training. Let's connect and discuss how I can help your team.
              </p>
              <div className="flex items-center gap-6">
                <a href="mailto:mzmmohideen@gmail.com" className="text-2xl font-serif italic text-accent hover:underline underline-offset-8">
                  mzmmohideen@gmail.com
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-6">Social</h4>
                <ul className="space-y-4">
                  <li><a href="https://github.com/mzmmohideen" target="_blank" className="text-zinc-400 hover:text-white transition-colors">GitHub</a></li>
                  <li><a href="https://linkedin.com/in/mzmmohideen" target="_blank" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="https://stackoverflow.com/users/your-id" target="_blank" className="text-zinc-400 hover:text-white transition-colors">Stack Overflow</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-zinc-600 font-bold mb-6">Location</h4>
                <p className="text-zinc-400">Chennai, India</p>
                <p className="text-zinc-500 text-sm mt-2">Open to worldwide <br /> remote opportunities.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
            <p className="text-xs text-zinc-600 uppercase tracking-widest">
              © 2026 Mohammed Mohideen. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-xs text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs text-zinc-600 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
