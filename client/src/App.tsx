import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Welcome from "./pages/Welcome";
import LocationInput from "./pages/LocationInput";
import Home from "./pages/Home";
import Community from "./pages/Community";
import ActiveAlert from "./pages/ActiveAlert";
import DosDonts from "./pages/DosDonts";
import EmergencyContacts from "./pages/EmergencyContacts";

function PhoneWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch">
        <div className="w-12 h-1 bg-zinc-800 rounded-full" />
      </div>
      <div className="phone-screen">
        {children}
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <PhoneWrapper><Welcome /></PhoneWrapper>
      </Route>
      <Route path="/setup">
        <PhoneWrapper><LocationInput /></PhoneWrapper>
      </Route>
      <Route path="/home">
        <PhoneWrapper><Home /></PhoneWrapper>
      </Route>
      <Route path="/community">
        <PhoneWrapper><Community /></PhoneWrapper>
      </Route>
      <Route path="/alert">
        <PhoneWrapper><ActiveAlert /></PhoneWrapper>
      </Route>
      <Route path="/dos-donts">
        <PhoneWrapper><DosDonts /></PhoneWrapper>
      </Route>
      <Route path="/contacts">
        <PhoneWrapper><EmergencyContacts /></PhoneWrapper>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
