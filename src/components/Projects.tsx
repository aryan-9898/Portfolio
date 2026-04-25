import { motion } from 'motion/react';
import { ExternalLink, Github, Workflow, FileText, MonitorPlay, Bot } from 'lucide-react';

const projects = [
  {
    title: 'Personal AI Portfolio Chatbot',
    category: 'Agentic AI / LLM',
    description: 'An intelligent agentic chatbot trained on my personal milestones, projects, and skills to answer recruiter queries in real-time.',
    icon: <Bot className="text-brand-primary" size={24} />,
    tags: ['Gemini API', 'LangChain', 'Agentic AI'],
    links: { github: 'https://github.com/aryan-9898/AI-Chatbot.git', demo: 'https://huggingface.co/spaces/Aryan098765432/chatbot' }
  },
  {
    title: 'Automated LinkedIn Post Creation',
    category: 'Automation / Workflow',
    description: 'Developed an automated workflow using n8n to schedule and publish content directly to LinkedIn, streamlining social media presence.',
    icon: <Workflow className="text-brand-primary" size={24} />,
    tags: ['n8n', 'API Integration', 'Automation'],
    links: { github: '#', demo: '#' }
  },
  {
    title: 'TechNotes',
    category: 'Full Stack App',
    description: 'A comprehensive note management system featuring User Authentication, RBAC, unique ticketing, and role-specific permissions.',
    icon: <FileText className="text-brand-primary" size={24} />,
    tags: ['React', 'NodeJS', 'MongoDB', 'Auth'],
    links: { github: 'https://github.com/aryan-9898/Technotes-MERN.git', demo: '#' }
  }
];

export default function Projects({ onPlaceholderClick }: { onPlaceholderClick: () => void }) {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
       {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/[0.02] blur-[150px] pointer-events-none" />

      <div className="mb-16 relative z-10">
        <span className="text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">Showcase</span>
        <h2 className="text-5xl font-display font-bold mt-2">Selected <span className="text-slate-600">Works</span></h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass flex flex-col h-full overflow-hidden group hover:bg-white/[0.06] hover:border-brand-primary/50 transition-all duration-300 glow"
          >
            <div className="p-8 pb-0">
               <div className="w-14 h-14 glass bg-white/[0.02] flex items-center justify-center mb-8 group-hover:glow transition-all transition-colors border-white/10">
                  {project.icon}
               </div>
               <span className="text-[10px] font-bold text-brand-primary tracking-[0.2em] uppercase mb-3 block">{project.category}</span>
               <h3 className="text-2xl font-bold mb-4 group-hover:glow-text transition-all">{project.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-8">{project.description}</p>
            </div>

            <div className="mt-auto p-8 pt-0">
               <div className="flex flex-wrap gap-3 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
               </div>

               <div className="flex items-center gap-6 border-t border-white/10 pt-8">
                  <button 
                    onClick={() => project.links.github === '#' ? onPlaceholderClick() : window.open(project.links.github, '_blank')}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors text-slate-500 cursor-pointer"
                  >
                    <Github size={14} /> Source Code
                  </button>
                  <button 
                    onClick={() => project.links.demo === '#' ? onPlaceholderClick() : window.open(project.links.demo, '_blank')}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-brand-primary transition-colors text-slate-500 cursor-pointer"
                  >
                    <ExternalLink size={14} /> Live View
                  </button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
