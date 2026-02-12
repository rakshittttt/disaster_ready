import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import { ShieldCheck, Bell, Users, BookOpen, PhoneCall, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const alerts = [
  "Flood warning in North Bay area - Seek higher ground",
  "Wildfire activity detected 15 miles East - Stay alert",
  "Seismic activity reported - Drop, Cover, and Hold on"
];

export default function Home() {
  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <h1 className="font-display font-bold text-xl">SENTINEL</h1>
        </div>
        <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Alert Banner */}
      <div className="px-6 mb-8">
        <Link href="/alert">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 overflow-hidden relative cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={alertIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm font-medium text-primary flex-1"
                >
                  {alerts[alertIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          </div>
        </Link>
      </div>

      {/* Main Action */}
      <div className="flex-1 px-6 flex flex-col items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center transition-all group"
        >
          <div className="absolute inset-0 bg-primary rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-[15px] border-2 border-primary/40 rounded-full" />
          
          <div className="relative z-10 w-48 h-48 rounded-full bg-primary flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(239,68,68,0.5)]">
            <ShieldCheck className="w-12 h-12 text-white mb-2" />
            <span className="text-xl font-bold text-white uppercase tracking-tighter">I AM SAFE</span>
          </div>
        </motion.button>
        <p className="mt-8 text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">Safety Status Active</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-4 gap-4 p-6 bg-card/40 backdrop-blur-xl border-t border-white/5 rounded-t-[3rem]">
        <FeatureIcon icon={<Bell className="w-6 h-6" />} label="Alerts" href="/alert" />
        <FeatureIcon icon={<Users className="w-6 h-6" />} label="Community" href="/community" />
        <FeatureIcon icon={<BookOpen className="w-6 h-6" />} label="Safety" href="/dos-donts" />
        <FeatureIcon icon={<PhoneCall className="w-6 h-6" />} label="Emergency" href="/contacts" />
      </div>
    </div>
  );
}

function FeatureIcon({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) {
  return (
    <Link href={href}>
      <motion.div 
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-muted-foreground hover:text-primary transition-colors hover:border-primary/30">
          {icon}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      </motion.div>
    </Link>
  );
}
