import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ArrowRight, MapPin, Users, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LocationInput() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mt-8 mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Profile Setup</h2>
        <p className="text-muted-foreground">Tailor Sentinel to your needs.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-8 flex-1"
      >
        <div className="space-y-3">
          <Label className="text-sm uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Current City
          </Label>
          <Input 
            placeholder="e.g. San Francisco" 
            className="h-14 bg-card border-white/5 rounded-2xl focus:ring-primary focus:border-primary text-lg"
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <Users className="w-4 h-4" /> Category
          </Label>
          <Select>
            <SelectTrigger className="h-14 bg-card border-white/5 rounded-2xl text-lg">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-card border-white/10 rounded-xl">
              <SelectItem value="adult">Adult</SelectItem>
              <SelectItem value="child">Child</SelectItem>
              <SelectItem value="elderly">Elderly</SelectItem>
              <SelectItem value="disabled">Person with Disability</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-6">
          <Label className="text-sm uppercase tracking-widest text-primary font-bold flex items-center gap-2">
            <Phone className="w-4 h-4" /> Emergency Contacts
          </Label>
          <div className="space-y-4">
            <Input 
              placeholder="Primary Contact Label (e.g. Mom)" 
              className="h-12 bg-card/50 border-white/5 rounded-xl"
            />
            <Input 
              placeholder="Phone Number" 
              className="h-14 bg-card border-white/5 rounded-2xl text-lg"
            />
          </div>
          <div className="space-y-4">
            <Input 
              placeholder="Secondary Contact Label (e.g. Dad)" 
              className="h-12 bg-card/50 border-white/5 rounded-xl"
            />
            <Input 
              placeholder="Phone Number" 
              className="h-14 bg-card border-white/5 rounded-2xl text-lg"
            />
          </div>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLocation("/home")}
        className="w-full h-16 bg-primary text-white font-bold rounded-2xl flex items-center justify-center gap-3 mt-8 shadow-[0_10px_30px_rgba(239,68,68,0.3)]"
      >
        Complete Setup <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
