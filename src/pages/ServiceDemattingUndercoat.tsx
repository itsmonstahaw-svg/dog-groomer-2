import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { useState, useEffect } from "react";

const ServiceDemattingUndercoat = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center pt-32 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777144393499000111/attachments/2c9060be-13eb-4282-8f3c-7811c0f61fd5.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Dematting & Undercoat Treatment
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Gentle removal of mats and dead undercoat to keep your pet's skin healthy and coat shining.
            </p>

            <div className="pt-8">
              <Button size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-2xl" onClick={() => setQuoteOpen(true)}>
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z"
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* About This Service Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[1200px] mx-auto px-[12px]">
            <div className="w-full max-w-[900px] mx-auto space-y-12 text-lg text-zinc-800 text-left mb-16">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  What Is Dematting & Undercoat Treatment?
                </h2>
                <p className="leading-relaxed">
                  Dematting and undercoat treatment at Acme Grooming Co Mobile is a specialized process designed to safely remove painful tangles and dense, dead hair from your pet's coat. As Florida's most experienced mobile pet groomer, we utilize professional tools and gentle techniques to reach deep into the coat without causing distress. Whether you are in Palatka, Gainesville, Daytona Beach, or Jacksonville, our mobile unit brings this essential service directly to you, ensuring your pet remains in a calm and familiar environment. Acme Grooming Co Mobile understands the unique challenges of Florida's climate, where humidity can quickly lead to severe matting if the undercoat isn't properly managed. Our expert groomers are dedicated to restoring your pet's coat to its natural, healthy state, providing a level of care that is unmatched in the Florida grooming industry.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Dematting & Undercoat Treatment Important?
                </h2>
                <p className="leading-relaxed">
                  Properly managing your pet's undercoat is vital for their overall health and comfort, especially across the warm regions of Florida. At Acme Grooming Co Mobile, we believe that all animals welcome should have access to 5-star rated care that prevents skin irritation and overheating. This service is important because mats can trap moisture and bacteria against the skin, leading to infections and hidden sores that are common in Florida's humid weather. Each session is personalized to each pet's breed and coat type, ensuring that we only remove what is necessary while maintaining the integrity of their protective fur. By choosing Acme Grooming Co Mobile in Palatka, Gainesville, Daytona Beach, or Jacksonville, you are investing in a service that improves air circulation to the skin and reduces excessive shedding. Our professional approach ensures that your pet feels lighter, cooler, and significantly more comfortable in the Florida sun.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Dematting & Undercoat Treatment?
                </h2>
                <p className="leading-relaxed">
                  You should consider booking a dematting and undercoat treatment with Acme Grooming Co Mobile if you notice your pet's fur feeling thick, lumpy, or difficult to brush through. Florida pet owners often see an increase in shedding during seasonal changes, which is a prime time to schedule a visit from our mobile salon in Palatka, Gainesville, Daytona Beach, or Jacksonville. If your pet is scratching more than usual or if you see visible mats forming behind the ears or under the legs, it is time for professional intervention. Acme Grooming Co Mobile is here to help before these issues become painful or require more drastic measures. Don't wait for the Florida heat to make your pet uncomfortable; proactive care is the best way to keep them happy and healthy. Call us today or click the button below to Get Free Quote and experience the difference of a truly professional mobile grooming service.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/91bbd518-5a0f-4a23-b734-88b6985a1941.png"
                alt="Dematting treatment"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/d0a9c37c-ca2c-42ee-882f-acc76da7b2ac.png"
                alt="Dog getting brushed"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/e5b40cf5-6e03-4f64-99d3-d3448b94f0be.png"
                alt="Happy groomed dog"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
            </div>
          </div>
        </section>

        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />

      {quoteOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70" onClick={() => setQuoteOpen(false)}>
          <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full" onClick={e => e.stopPropagation()}>
            <button onClick={() => setQuoteOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white text-xl leading-none">✕</button>
            <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">Get A Free Quote</h2>
            <p className="text-center text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDemattingUndercoat;
