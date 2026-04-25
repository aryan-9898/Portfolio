import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/5 bg-dark-bg py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="text-xl font-display font-bold tracking-tighter">
            ARYAN<span className="text-brand-primary">.</span>
          </div>
          <p className="mt-2 text-sm text-gray-500 max-w-xs leading-relaxed">
            Building digital solutions with precision and passion. Based in India, available worldwide.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/choudharyaryan2003" className="p-3 bg-white/5 rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/aryan-choudhary-258827227" className="p-3 bg-white/5 rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
            <Linkedin size={20} />
          </a>
          <a href="https://hackerrank.com/profile/aryan21b0121103" className="p-3 bg-white/5 rounded-full hover:bg-brand-primary/10 hover:text-brand-primary transition-all">
            <ExternalLink size={20} />
          </a>
        </div>

        <div className="text-right">
          <p className="text-sm font-medium">© {currentYear} Aryan Choudhary</p>
          <p className="text-xs text-gray-500 mt-1">Built with React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
