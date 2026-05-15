import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDemattingUndercoat from "./pages/ServiceDemattingUndercoat";
import ServiceHandScissoring from "./pages/ServiceHandScissoring";
import ServiceFullGrooming from "./pages/ServiceFullGrooming";
import ServiceBirdGrooming from "./pages/ServiceBirdGrooming";
import ServiceNailTrimEarCleaning from "./pages/ServiceNailTrimEarCleaning";
import ServiceMultiPetGrooming from "./pages/ServiceMultiPetGrooming";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost1";
import ServiceAreaPalatka from "./pages/LocationPalatkaFL";
import ServiceAreaGainesville from "./pages/LocationGainesvilleFL";
import ServiceAreaDaytonaBeach from "./pages/LocationDaytonaBeachFL";
import ServiceAreaJacksonville from "./pages/LocationJacksonvilleFL";
import ServiceAreaCrescentCity from "./pages/LocationCrescentCityFL";
import ServiceAreaStAugustine from "./pages/LocationStAugustineFL";
import ServiceAreaOcala from "./pages/LocationOcalaFL";
import ServiceAreaInterlachen from "./pages/LocationInterlachenFL";
import ServiceAreaOrangePark from "./pages/LocationOrangeParkFL";
import Contact from "./pages/Contact";
import Discount from "./pages/Discount";
import Review from "./pages/Review";
import ClientSubmit from "./pages/ClientSubmit";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/services/dematting-undercoat" element={<ServiceDemattingUndercoat />} />
          <Route path="/services/hand-scissoring" element={<ServiceHandScissoring />} />
          <Route path="/services/full-grooming" element={<ServiceFullGrooming />} />
          <Route path="/services/bird-grooming" element={<ServiceBirdGrooming />} />
          <Route path="/services/nail-trim-ear-cleaning" element={<ServiceNailTrimEarCleaning />} />
          <Route path="/services/multi-pet-grooming" element={<ServiceMultiPetGrooming />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/service-areas/palatka-fl" element={<ServiceAreaPalatka />} />
          <Route path="/service-areas/gainesville-fl" element={<ServiceAreaGainesville />} />
          <Route path="/service-areas/daytona-beach-fl" element={<ServiceAreaDaytonaBeach />} />
          <Route path="/service-areas/jacksonville-fl" element={<ServiceAreaJacksonville />} />
          <Route path="/service-areas/crescent-city-fl" element={<ServiceAreaCrescentCity />} />
          <Route path="/service-areas/st-augustine-fl" element={<ServiceAreaStAugustine />} />
          <Route path="/service-areas/ocala-fl" element={<ServiceAreaOcala />} />
          <Route path="/service-areas/interlachen-fl" element={<ServiceAreaInterlachen />} />
          <Route path="/service-areas/orange-park-fl" element={<ServiceAreaOrangePark />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-your-discount" element={<Discount />} />
          <Route path="/review" element={<Review />} />
          <Route path="/client-submit" element={<ClientSubmit />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
