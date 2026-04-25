import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px]" />
      
      <div className="max-w-3xl mx-auto relative z-10 w-full text-center">
        <div>
          <span className="text-brand-primary text-[10px] font-bold tracking-[0.3em] uppercase">Connect</span>
          <h2 className="text-5xl font-display font-bold mt-2">Let's build <br/><span className="text-slate-600">together.</span></h2>
          <p className="mt-8 text-slate-400 font-light leading-relaxed mx-auto max-w-md">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="mt-12">
            <a 
              href="mailto:choudharyaryan2003@gmail.com"
              className="px-8 py-4 bg-brand-primary text-slate-950 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] inline-block"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
