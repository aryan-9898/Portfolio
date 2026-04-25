import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Available for innovative projects</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            Crafting <br />
            <span className="gradient-text glow-text">Immersive</span> <br />
            Experiences.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light mb-10">
            I'm <span className="text-white font-medium">Aryan Choudhary</span>, a student engineer specializing in <span className="text-brand-primary font-medium">Agentic AI</span>, high-performance cloud applications, and digital systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://huggingface.co/spaces/Aryan098765432/chatbot" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-brand-primary text-slate-950 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              Chat with my AI
            </a>
            <a 
              href="mailto:choudharyaryan2003@gmail.com"
              className="px-8 py-3 border border-brand-primary/30 text-brand-primary rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-brand-primary/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 w-full aspect-square glass glow p-6 overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full"></div>
             <div className="grid grid-cols-2 grid-rows-2 h-full gap-5">
                <div className="glass bg-white/[0.02] flex items-center justify-center p-6 hover:bg-white/[0.05] transition-colors border-white/5">
                   <div className="text-center">
                      <div className="text-4xl font-display font-bold gradient-text">AWS</div>
                      <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-3">Infrastructure</div>
                   </div>
                </div>
                <div className="glass bg-white/[0.02] flex items-center justify-center p-6 hover:bg-white/[0.05] transition-colors border-white/5">
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold gradient-text">5★</div>
                      <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase mt-3">Algorithmic</div>
                   </div>
                </div>
                <div className="glass bg-white/[0.02] p-8 col-span-2 border-white/5 flex flex-col justify-between">
                   <div className="space-y-4">
                      <div className="h-1 bg-brand-primary/20 rounded-full w-full overflow-hidden">
                         <motion.div 
                           initial={{ x: "-100%" }}
                           animate={{ x: "0%" }}
                           transition={{ duration: 2, delay: 1 }}
                           className="h-full bg-brand-primary w-2/3 shadow-[0_0_10px_#22d3ee]" 
                         />
                      </div>
                      <div className="h-1 bg-brand-secondary/20 rounded-full w-full overflow-hidden">
                         <motion.div 
                           initial={{ x: "-100%" }}
                           animate={{ x: "0%" }}
                           transition={{ duration: 2.5, delay: 1.2 }}
                           className="h-full bg-brand-secondary w-1/2 shadow-[0_0_10px_#818cf8]" 
                         />
                      </div>
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Status: Optimal</div>
                      <div className="text-brand-primary animate-pulse">
                         <ArrowRight size={16} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass glow px-6 py-4 z-20 border-white/10"
          >
             <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300 whitespace-nowrap">B.Tech Engineering '25</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
