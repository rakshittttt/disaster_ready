import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Wind, ShieldCheck } from "lucide-react";

export default function ActiveAlert() {
  return (
    <div className="flex-1 flex flex-col p-6 pt-12 overflow-hidden relative">
      {/* Background Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"
      />

      <header className="flex items-center gap-4 relative z-10 mb-8">
        <Link href="/home">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
        </Link>
        <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Live Probablity</span>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-40 h-40 rounded-full border-4 border-primary/20 flex flex-col items-center justify-center mb-8 bg-card/40 backdrop-blur-xl"
        >
          <span className="text-4xl font-display font-bold text-primary">78%</span>
          <span className="text-[10px] font-bold uppercase text-muted-foreground">Accuracy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-display font-bold mb-3 tracking-tight"
        >
          EARTHQUAKE ALERT
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm mb-12 px-4"
        >
          Seismic activity detected near <span className="text-white font-bold">Chandigarh</span>. Prepare for potential aftershocks.
        </motion.p>

        <div className="w-full space-y-4">
          <Link href="/dos-donts">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full h-14 bg-primary text-black font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <ShieldCheck className="w-4 h-4" /> View Safety Plan
            </motion.button>
          </Link>
          <p className="text-[9px] text-muted-foreground uppercase tracking-widest">Protocol: Rakshit-Alpha-9</p>
        </div>
      </div>
    </div>
  );
}
