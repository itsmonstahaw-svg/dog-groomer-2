import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "./QuoteForm";
export const FloatingQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    // Show button when navbar becomes sticky (scroll > 10)
    if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Chat widget marker - outside the animation so it stays visible */}
      <div data-chat-widget data-widget-id="69ac39e703fc831334516ff9" data-location-id="scriNzyBzNzN4FtsjgfR"></div>
      
      <div 
        className={`fixed bottom-[20px] right-[90px] z-40 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="h-14 px-6 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-md">
              Get Free Quote
            </Button>
          </DialogTrigger>
        <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
          <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
            Get A Free Quote
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400 mb-6">
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
          <QuoteForm />
        </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
