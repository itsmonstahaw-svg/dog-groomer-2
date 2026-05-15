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

const ServiceBirdGrooming = () => {
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
              Bird Grooming
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Professional beak, nail, and wing trimming for all types of avian friends.
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
                  What Is Bird Grooming?
                </h2>
                <p className="leading-relaxed">
                  Bird grooming at Acme Grooming Co Mobile is a specialized service dedicated to the health and comfort of our avian friends across Florida. As Florida's most experienced mobile pet groomer, we provide professional beak, nail, and wing trimming services delivered right to your doorstep. Whether you reside in Palatka, Gainesville, Daytona Beach, or Jacksonville, Acme Grooming Co Mobile brings expert handling and precision care to birds of all sizes, from small parakeets to large macaws. Our mobile unit is a calm and controlled environment, which is essential for reducing the stress often associated with transporting birds to a traditional shop. We understand the delicate nature of avian anatomy and use only the safest techniques to ensure a quick and comfortable session. Acme Grooming Co Mobile is proud to be one of the few providers in Florida offering this high level of specialized mobile care for the avian community.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Bird Grooming Important?
                </h2>
                <p className="leading-relaxed">
                  Regular grooming is vital for a bird's physical health and their ability to interact safely with their environment. At Acme Grooming Co Mobile, we believe that all animals welcome, including our feathered companions, deserve 5-star rated care that promotes their well-being. This service is important because overgrown beaks can interfere with proper eating, while sharp or long nails can lead to perching difficulties and accidental scratches for owners in Florida. Wing trimming, when requested, helps ensure your bird remains safe within the home environment, preventing dangerous flights into windows or ceiling fans. Every sessions are personalized to each pet's breed and coat type—or in this case, feather and beak type—ensuring the most appropriate care for your specific bird. By choosing Acme Grooming Co Mobile in Palatka, Gainesville, Daytona Beach, or Jacksonville, you are opting for a professional service that prioritizes the safety and comfort of your bird above all else.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Bird Grooming?
                </h2>
                <p className="leading-relaxed">
                  You should consider booking a bird grooming session with Acme Grooming Co Mobile if you notice your bird's nails getting caught in their toys or on your clothing. Florida bird owners often look for professional help when a bird's beak starts to appear uneven or if they are having trouble manipulating their food in Palatka, Gainesville, Daytona Beach, or Jacksonville. If your bird is becoming increasingly difficult to handle due to sharp talons or if you want to maintain a safe wing trim for indoor safety, Acme Grooming Co Mobile is the expert to call. Our mobile service eliminates the danger of exposing your bird to outside predators or temperature extremes during travel in the Florida heat. We provide a gentle and efficient service that keeps your avian friend happy and healthy in the comfort of their own surroundings. Don't wait for your bird to show signs of discomfort; contact Florida's most experienced mobile groomer today. Call us or click below to Get Free Quote.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/546def8d-72fe-42c0-be9e-56aa132da399.png"
                alt="Macaws"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/assets/7dffff63-b01d-4650-95a7-59153dc9f34a.png"
                alt="Bird grooming session"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/assets/47cbcc3a-91f1-4960-9cc4-b91cff557a28.png"
                alt="Professional bird care"
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

export default ServiceBirdGrooming;
