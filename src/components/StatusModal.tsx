import { motion, AnimatePresence } from 'motion/react';
import { X, AlertCircle } from 'lucide-react';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StatusModal({ isOpen, onClose }: StatusModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative glass glow p-8 max-w-sm w-full border-brand-primary/20 bg-dark-bg/90"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mb-6 border border-brand-primary/20">
                <AlertCircle className="text-brand-primary" size={32} />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">System Notice</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Currently, this section is under maintenance as I'm deploying new features. Please come back later!
              </p>
              
              <button 
                onClick={onClose}
                className="w-full py-3 bg-brand-primary text-slate-950 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)]"
              >
                Acknowledged
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
