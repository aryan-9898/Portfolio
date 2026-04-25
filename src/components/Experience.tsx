import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    company: 'Capgemini',
    role: 'Software Developer',
    period: 'Present - 2026',
    description: [
      'Focusing on high-perfomance Java development and enterprise solution architecture.',
      'Developing and maintaining scalable software modules with a focus on code efficiency and reliability.'
    ],
    type: 'experience'
  },
  {
    company: 'ABES Engineering College',
    role: 'B.Tech Engineering',
    period: '2021 - 2025',
    description: ['CGPA: 7.4', 'Focusing on core engineering principles and software development.'],
    type: 'education'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">Professional Journey</span>
          <h2 className="text-5xl font-display font-bold mt-2">Experience & <span className="text-slate-600">Education</span></h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 group hover:bg-white/[0.06] hover:border-brand-primary/50 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               {item.type === 'experience' ? <Briefcase size={80} /> : <GraduationCap size={80} />}
            </div>

            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="p-4 glass bg-white/[0.02] text-brand-primary glow">
                {item.type === 'experience' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 rounded-full uppercase">{item.period}</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-1 group-hover:glow-text transition-all">{item.company}</h3>
            <p className="text-brand-primary font-medium mb-6 uppercase text-xs tracking-widest">{item.role}</p>
            
            <ul className="space-y-4 relative z-10">
              {item.description.map((desc, i) => (
                <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/30 mt-1.5 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
