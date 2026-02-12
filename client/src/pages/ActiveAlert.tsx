import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, AlertTriangle, Wind, Info, ShieldCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ActiveAlert() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col p-6 overflow-hidden relative">
      {/* Background Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full"
      />

      <header className="flex items-center justify-between relative z-10 mb-12">
        <Link href="/home">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <div className="px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Critical Alert</span>
        </div>
        <div className="w-10" />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-40 h-40 rounded-full border-2 border-primary/30 flex items-center justify-center mb-8 relative"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-primary rounded-full"
          />
          <Wind className="w-16 h-16 text-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-display font-bold mb-4 tracking-tighter"
        >
          TSUNAMI PREDICTED
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg mb-12 max-w-[280px]"
        >
          Impact expected in <span className="text-white font-bold">14 minutes</span>. Seek higher ground immediately.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full glass p-6 rounded-[2.5rem] mb-8 space-y-6"
        >
          <div className="flex justify-between items-end mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Alert Status</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Evacuation in progress</span>
          </div>
          <Progress value={75} className="h-3 bg-white/10" />
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 glass-dark rounded-2xl text-left border border-white/5">
              <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">Magnitude</span>
              <span className="text-lg font-display font-bold">7.2 <span className="text-xs font-sans text-muted-foreground">MW</span></span>
            </div>
            <div className="p-4 glass-dark rounded-2xl text-left border border-white/5">
              <span className="text-[10px] font-bold uppercase text-muted-foreground block mb-1">Wave Height</span>
              <span className="text-lg font-display font-bold">4.5 <span className="text-xs font-sans text-muted-foreground">Meters</span></span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col gap-4 mb-4">
        <Link href="/dos-donts">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full h-16 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3"
          >
            <ShieldCheck className="w-5 h-5" /> View Safety Plan
          </motion.button>
        </Link>
        <button className="w-full h-16 glass text-white font-bold rounded-2xl flex items-center justify-center gap-3">
          <Info className="w-5 h-5" /> More Details
        </button>
      </div>
    </div>
  );
}
