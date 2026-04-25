import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-6 right-6 z-50 glass h-16 flex items-center glow"
    >
      <div className="w-full mx-auto px-6 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-display font-bold tracking-tighter glow-text"
        >
          ARYAN<span className="text-brand-primary">.</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-xs uppercase tracking-widest font-bold text-slate-400 hover:text-brand-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/aryan-9898" target="_blank" rel="noopener noreferrer" className="p-2 glass border-white/10 hover:bg-white/10 transition-colors">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/aryan-choudhary-258827227" target="_blank" rel="noopener noreferrer" className="p-2 glass border-white/10 hover:bg-white/10 transition-colors">
            <Linkedin size={16} />
          </a>
          <a href="mailto:choudharyaryan2003@gmail.com" className="hidden sm:block px-5 py-2 bg-brand-primary text-slate-950 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Hire Me
          </a>
        </div>
      </div>
    </motion.header>
  );
}
