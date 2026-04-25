import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'Agentic AI',
    skills: ['Large Language Models', 'Agentic Frameworks', 'Prompt Engineering', 'RAG Systems']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (Fundamentals)', 'Linux', 'Cloud Computing', 'Workflow Design']
  },
  {
    title: 'Programming',
    skills: ['C/C++', 'Java', 'Gosu Scripting', 'TypeScript']
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'NodeJS', 'MongoDB', 'LangChain', 'n8n']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1">
          <span className="text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">Capabilities</span>
          <h2 className="text-5xl font-display font-bold mt-2 leading-tight">Technical <br/><span className="text-slate-600">Arsenal</span></h2>
          <p className="mt-8 text-slate-400 font-light leading-relaxed">
            I specialize in building efficient, automated systems and scalable web architectures using modern cloud technologies and performance-oriented programming.
          </p>
          
          <div className="mt-12 p-8 glass glow group border-brand-primary/20 bg-brand-primary/[0.02]">
             <div className="text-brand-primary font-bold text-[10px] tracking-[0.2em] uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-brand-primary/40 block"></span> Verified Certifications
             </div>
             <ul className="space-y-5">
                <li className="flex items-center justify-between group/item">
                   <span className="text-sm font-medium text-slate-300 group-hover/item:text-brand-primary transition-colors">CCNA Certified</span>
                   <span className="text-[10px] font-bold text-slate-600">2024</span>
                </li>
                <li className="flex items-center justify-between group/item">
                   <span className="text-sm font-medium text-slate-300 group-hover/item:text-brand-primary transition-colors">AWS Fundamentals</span>
                   <span className="text-[10px] font-bold text-slate-600">2024</span>
                </li>
                <li className="flex items-center justify-between group/item">
                   <span className="text-sm font-medium text-slate-300 group-hover/item:text-brand-primary transition-colors">Microsoft PL-900</span>
                   <span className="text-[10px] font-bold text-slate-600">2024</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-16 gap-y-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-6 flex items-center gap-3">
                <span className="text-brand-primary glow-text">//</span> {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="skill-tag px-4 py-2 hover:bg-brand-primary/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
