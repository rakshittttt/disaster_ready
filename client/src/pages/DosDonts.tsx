import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Circle, AlertCircle, HelpCircle } from "lucide-react";
import { useState } from "react";

const tasks = [
  { id: 1, text: "Evacuate to higher ground (30m+)", category: "critical" },
  { id: 2, text: "Carry only essential survival kit", category: "do" },
  { id: 3, text: "Avoid coastal roads and beaches", category: "dont" },
  { id: 4, text: "Stay away from glass windows", category: "do" },
  { id: 5, text: "Do not use elevators", category: "dont" }
];

export default function DosDonts() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTask = (id: number) => {
    setCompleted(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-6 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-lg z-10">
        <Link href="/alert">
          <button className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
        </Link>
        <h1 className="font-display font-bold text-xl uppercase tracking-tighter">Safety Checklist</h1>
        <div className="w-10" />
      </header>

      <div className="flex-1 p-6 space-y-8">
        <div className="p-6 bg-primary/10 border border-primary/20 rounded-3xl">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-primary">Tsunami Protocol</h2>
          </div>
          <p className="text-sm text-muted-foreground">Follow these steps immediately to ensure your survival and the safety of your family.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground px-2">Action Items</h3>
          <div className="space-y-3">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                onClick={() => toggleTask(task.id)}
                className={`p-5 rounded-2xl flex items-center gap-4 cursor-pointer transition-all border ${
                  completed.includes(task.id) 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-card/40 border-white/5'
                }`}
              >
                <div className="flex-shrink-0">
                  <AnimatePresence mode="wait">
                    {completed.includes(task.id) ? (
                      <motion.div
                        key="checked"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="unchecked"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Circle className="w-6 h-6 text-muted-foreground/30" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium transition-all ${
                    completed.includes(task.id) ? 'text-green-500/80 line-through opacity-50' : 'text-foreground'
                  }`}>
                    {task.text}
                  </p>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md mt-1 inline-block ${
                    task.category === 'critical' ? 'bg-primary/20 text-primary' :
                    task.category === 'dont' ? 'bg-white/10 text-white' : 'bg-green-500/20 text-green-500'
                  }`}>
                    {task.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="p-5 glass-dark rounded-3xl border border-white/5 flex items-center gap-4">
          <HelpCircle className="w-6 h-6 text-muted-foreground" />
          <div className="flex-1">
            <h4 className="text-sm font-bold">Need assistance?</h4>
            <p className="text-xs text-muted-foreground">Contact local emergency services via the emergency tab.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
