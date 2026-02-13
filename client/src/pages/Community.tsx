import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Users, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

const communities = [
  { id: 1, name: "Patiala Relief Group", members: 1240, location: "Nearby", type: "Active" },
  { id: 2, name: "Chandigarh Emergency Network", members: 850, location: "Local", type: "Monitoring" },
  { id: 3, name: "Delhi Disaster Support", members: 3200, location: "Zone A", type: "Alert" }
];

export default function Community() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="p-6 flex items-center gap-4 border-b border-white/5 pt-12">
        <Link href="/home">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
        </Link>
        <h1 className="font-display font-bold text-lg">COMMUNITY</h1>
      </header>

      <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary">Indian Communities</h2>
        
        {communities.map((c, idx) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="p-4 bg-card/40 border-white/5 rounded-2xl hover:border-primary/20 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-sm mb-0.5">{c.name}</h3>
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="w-2.5 h-2.5" /> {c.members}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> {c.location}</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10">
                  {c.type}
                </span>
              </div>
              <button className="w-full h-10 bg-white/5 border border-white/10 rounded-xl font-bold text-xs hover:bg-primary hover:text-black transition-all">
                Join Community
              </button>
            </Card>
          </motion.div>
        ))}

        <div className="p-4 glass-dark rounded-2xl border border-white/5 flex items-start gap-3 mt-6">
          <Info className="w-4 h-4 text-primary mt-0.5" />
          <p className="text-[10px] leading-relaxed text-muted-foreground">
            Connect with local volunteers and verified support groups in your region for real-time ground updates.
          </p>
        </div>
      </div>
    </div>
  );
}
