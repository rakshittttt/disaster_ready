import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, MapPin, Users, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const INDIAN_CITIES = [
  "Delhi", "Mumbai", "Chennai", "Kolkata", "Patiala", "Chandigarh", "Bengaluru", "Hyderabad", "Pune", "Jaipur"
];

export default function LocationInput() {
  const [, setLocation] = useLocation();

  return (
    <div className="flex-1 bg-background p-6 flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8 mb-8"
      >
        <h2 className="text-2xl font-display font-bold mb-1">Registration</h2>
        <p className="text-muted-foreground text-sm">Join the Rakshit Network.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-6 flex-1 overflow-y-auto pb-6"
      >
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" /> Indian City
          </Label>
          <Select>
            <SelectTrigger className="h-12 bg-card border-white/5 rounded-xl">
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent className="bg-card border-white/10 rounded-xl">
              {INDIAN_CITIES.map(city => (
                <SelectItem key={city} value={city.toLowerCase()}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <Users className="w-3.5 h-3.5" /> Category
          </Label>
          <Select>
            <SelectTrigger className="h-12 bg-card border-white/5 rounded-xl">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-card border-white/10 rounded-xl">
              <SelectItem value="adult">Adult</SelectItem>
              <SelectItem value="child">Child</SelectItem>
              <SelectItem value="elderly">Elderly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4 pt-2">
          <Label className="text-xs uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" /> Emergency Contacts
          </Label>
          <div className="space-y-3">
            <div className="p-4 bg-card/40 border border-white/5 rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Local Contact</span>
              <Input 
                placeholder="Phone Number" 
                className="h-11 bg-black/20 border-white/5 rounded-lg text-sm"
              />
            </div>
            <div className="p-4 bg-card/40 border border-white/5 rounded-xl space-y-3">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Outside City Contact</span>
              <Input 
                placeholder="Phone Number" 
                className="h-11 bg-black/20 border-white/5 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setLocation("/home")}
        className="w-full h-14 bg-primary text-black font-bold rounded-xl flex items-center justify-center gap-2 mt-4 shadow-[0_10px_30px_rgba(0,255,255,0.2)]"
      >
        Create Profile <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
}
