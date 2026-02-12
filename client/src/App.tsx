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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Welcome} />
      <Route path="/setup" component={LocationInput} />
      <Route path="/home" component={Home} />
      <Route path="/community" component={Community} />
      <Route path="/alert" component={ActiveAlert} />
      <Route path="/dos-donts" component={DosDonts} />
      <Route path="/contacts" component={EmergencyContacts} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
