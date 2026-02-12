import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Phone, Hospital, Siren, Shield, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const contacts = [
  { name: "Emergency Dispatch", number: "911", icon: Siren, color: "text-primary" },
  { name: "Central Hospital", number: "1-800-MED-SAFE", icon: Hospital, color: "text-blue-500" },
  { name: "Fire Department", number: "1-800-FIRE-HELP", icon: Shield, color: "text-orange-500" },
  { name: "Ambulance Services", number: "1-800-AMBU-FAST", icon: Siren, color: "text-red-500" },
  { name: "Red Cross Relief", number: "1-800-RED-HELP", icon: Hospital, color: "text-primary" }
];

export default function EmergencyContacts() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-6 flex flex-col gap-6 sticky top-0 bg-background/80 backdrop-blur-xl z-10">
        <div className="flex items-center justify-between">
          <Link href="/home">
            <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="font-display font-bold text-xl uppercase tracking-tighter">Emergency Contacts</h1>
          <div className="w-10" />
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search local services..." 
            className="h-12 pl-12 bg-card border-white/5 rounded-2xl text-sm"
          />
        </div>
      </header>

      <div className="flex-1 p-6 space-y-4">
        <div className="p-5 bg-primary/10 border border-primary/20 rounded-3xl mb-8">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-1">Offline Access</h2>
          <p className="text-xs text-muted-foreground">These numbers are stored locally and are accessible without internet connection.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {contacts.map((contact, idx) => (
            <motion.a
              key={contact.name}
              href={`tel:${contact.number}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileTap={{ scale: 0.98 }}
              className="p-6 bg-card/60 border border-white/5 rounded-[2rem] flex items-center justify-between group active:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${contact.color}`}>
                  <contact.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{contact.name}</h3>
                  <p className="text-muted-foreground font-mono text-sm tracking-widest">{contact.number}</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="p-6 mt-auto">
        <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest leading-loose">
          Sentinel Emergency Directory v2.4<br/>Updated automatically via satellite link
        </p>
      </div>
    </div>
  );
}
