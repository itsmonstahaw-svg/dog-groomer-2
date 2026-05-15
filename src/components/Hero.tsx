import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { QuoteForm } from "./QuoteForm";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-32 pb-12">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777144393499000111/attachments/2c9060be-13eb-4282-8f3c-7811c0f61fd5.png")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left text-white"
        >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[1.1] mb-6 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
        Acme Grooming Co Mobile
      </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-medium [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
            Florida's most experienced pet groomer. All animals welcome. 5 star rated. Serving 50-60 miles around Satsuma.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md bg-black border border-white/10 p-8 rounded-lg shadow-2xl relative"
        >
          <h2 className="text-3xl font-black uppercase text-center text-white mb-8 tracking-tight">
            Get A Free Quote
          </h2>
          
          <QuoteForm />
        </motion.div>

      </div>
    </section>
  );
};
