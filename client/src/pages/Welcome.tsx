import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ShieldAlert } from "lucide-react";

export default function Welcome() {
  const [, setLocation] = useLocation();

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden welcome-gradient">
      {/* Animated Floating Bubbles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 -right-10 w-60 h-60 bg-white/10 blur-3xl rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 glass p-8 rounded-[2.5rem] w-[85%] text-center border-white/30"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 100 }}
          className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center rounded-3xl mx-auto mb-6"
        >
          <ShieldAlert className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-display font-bold text-white tracking-tight mb-2"
        >
          Rakshit Disaster Response
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/80 text-sm leading-relaxed mb-8"
        >
          Securing lives through intelligent Indian-native disaster response.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setLocation("/setup")}
          className="w-full py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-xl transition-all hover:bg-white/90"
        >
          Enter Workspace
        </motion.button>
      </motion.div>
    </div>
  );
}
