import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Users, PlusCircle, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const communities = [
  { id: 1, name: "Downtown SF Relief", members: 1240, location: "0.8 miles away", type: "Active" },
  { id: 2, name: "Marina District Safety", members: 850, location: "2.1 miles away", type: "Monitoring" },
  { id: 3, name: "Sunset Ward Community", members: 3200, location: "4.5 miles away", type: "Alert" }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-6 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-lg z-10 border-b border-white/5">
        <Link href="/home">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="font-display font-bold text-xl">COMMUNITY</h1>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-8 overflow-y-auto">
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Nearby Communities</h2>
          <div className="space-y-4">
            {communities.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-5 bg-card/60 border-white/5 rounded-2xl hover:border-primary/30 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{c.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {c.members}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {c.location}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      c.type === 'Alert' ? 'bg-primary/20 text-primary border border-primary/30' : 'glass-dark'
                    }`}>
                      {c.type}
                    </span>
                  </div>
                  <button className="w-full h-12 bg-white/5 border border-white/10 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all">
                    Join Community
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Live Updates</h2>
          <Card className="p-4 bg-card/60 border-white/5 rounded-2xl">
            <div className="flex gap-4">
              <div className="flex-1">
                <textarea 
                  placeholder="Share roadblocks, casualties, or news..." 
                  className="w-full bg-transparent border-none focus:ring-0 resize-none h-20 text-sm"
                />
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                  <div className="flex gap-4">
                    <button className="text-muted-foreground hover:text-primary transition-colors"><MapPin className="w-5 h-5" /></button>
                    <button className="text-muted-foreground hover:text-primary transition-colors"><PlusCircle className="w-5 h-5" /></button>
                  </div>
                  <button className="px-6 py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                    Post Update
                  </button>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4 mt-6">
            <UpdateItem 
              user="Alex Reed" 
              time="2m ago" 
              content="Road blockage on 5th Ave due to fallen trees. Emergency services notified." 
              type="Blockage"
            />
            <UpdateItem 
              user="Sarah Chen" 
              time="15m ago" 
              content="Water levels rising rapidly near Pier 39. Evacuating area now." 
              type="Hazard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function UpdateItem({ user, time, content, type }: { user: string, time: string, content: string, type: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 glass-dark rounded-2xl flex gap-4 border border-white/5"
    >
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
        {user[0]}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="font-bold text-sm">{user}</span>
          <span className="text-[10px] text-muted-foreground">{time}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{content}</p>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded border border-primary/20">{type}</span>
          <button className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-white"><MessageCircle className="w-3 h-3" /> Reply</button>
        </div>
      </div>
    </motion.div>
  );
}
