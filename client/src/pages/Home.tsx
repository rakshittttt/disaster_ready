import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import { ShieldCheck, Bell, Users, BookOpen, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const alerts = [
  "Earthquake probability rising in Chandigarh",
  "Flood warning in Delhi-NCR - Level 2 Alert",
  "High heat wave alert in Mumbai region"
];

export default function Home() {
  const [alertIndex, setAlertIndex] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      {/* Top Banner */}
      <div className="px-6 pt-12 pb-4">
        <Link href="/alert">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-primary/10 border border-primary/20 rounded-2xl p-4 overflow-hidden relative cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={alertIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-xs font-bold text-primary flex-1"
                >
                  {alerts[alertIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Main Action */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-56 h-56 flex items-center justify-center"
        >
          {/* Pulse Effects */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 bg-primary rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
            className="absolute inset-4 bg-primary rounded-full"
          />
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10 w-44 h-44 rounded-full bg-primary flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.4)] border-4 border-white/20"
          >
            <ShieldCheck className="w-12 h-12 text-black mb-1" />
            <span className="text-lg font-bold text-black uppercase tracking-tighter">I AM SAFE</span>
          </motion.button>
        </motion.div>
        
        <p className="mt-8 text-muted-foreground text-[10px] font-bold uppercase tracking-[0.3em]">Guardian Protocol Active</p>
      </div>

      {/* Navigation */}
      <nav className="p-6 grid grid-cols-4 gap-2 border-t border-white/5 bg-card/20 backdrop-blur-xl">
        <NavIcon icon={<Bell className="w-5 h-5" />} label="Alerts" active={location === '/alert'} href="/alert" />
        <NavIcon icon={<Users className="w-5 h-5" />} label="Community" active={location === '/community'} href="/community" />
        <NavIcon icon={<BookOpen className="w-5 h-5" />} label="Safety" active={location === '/dos-donts'} href="/dos-donts" />
        <NavIcon icon={<PhoneCall className="w-5 h-5" />} label="Emergency" active={location === '/contacts'} href="/contacts" />
      </nav>
    </div>
  );
}

function NavIcon({ icon, label, active, href }: { icon: React.ReactNode, label: string, active: boolean, href: string }) {
  return (
    <Link href={href}>
      <motion.div 
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
          active ? 'bg-primary text-black' : 'bg-white/5 text-muted-foreground'
        }`}>
          {icon}
        </div>
        <span className={`text-[9px] font-bold uppercase tracking-wider ${active ? 'text-primary' : 'text-muted-foreground'}`}>
          {label}
        </span>
      </motion.div>
    </Link>
  );
}
