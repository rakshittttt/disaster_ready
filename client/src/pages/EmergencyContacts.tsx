import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Phone, Hospital, Siren, Shield } from "lucide-react";

const indianContacts = [
  { name: "Police Dispatch", number: "100", icon: Shield, color: "text-blue-500" },
  { name: "Ambulance", number: "108", icon: Siren, color: "text-red-500" },
  { name: "Fire Department", number: "101", icon: Shield, color: "text-orange-500" },
  { name: "Disaster Management", number: "1078", icon: Hospital, color: "text-primary" }
];

export default function EmergencyContacts() {
  return (
    <div className="flex-1 flex flex-col">
      <header className="p-6 pt-12 flex items-center gap-4 border-b border-white/5">
        <Link href="/home">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-4 h-4" />
          </button>
        </Link>
        <h1 className="font-display font-bold text-lg">EMERGENCY</h1>
      </header>

      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">Indian Hotline Services</p>

        {indianContacts.map((contact, idx) => (
          <motion.a
            key={contact.name}
            href={`tel:${contact.number}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-5 bg-card/60 border border-white/5 rounded-2xl flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${contact.color}`}>
                <contact.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">{contact.name}</h3>
                <p className="text-muted-foreground font-mono text-xs">{contact.number}</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-primary" />
            </div>
          </motion.a>
        ))}

        <div className="mt-8 p-6 glass-dark rounded-[2rem] text-center border border-white/5">
          <p className="text-[9px] text-muted-foreground uppercase tracking-widest leading-loose">
            Satellite link active<br/>Protocol Secured
          </p>
        </div>
      </div>
    </div>
  );
}
