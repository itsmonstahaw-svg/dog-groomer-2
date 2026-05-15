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

const ServiceMultiPetGrooming = () => {
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
              Multi-Pet Grooming
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              We welcome dogs, cats, rabbits, and horses! Comprehensive care for all your companions.
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
                  What Is Multi-Pet Grooming?
                </h2>
                <p className="leading-relaxed">
                  Multi-pet grooming at Acme Grooming Co Mobile is a comprehensive service designed for diverse households in Florida that share their lives with multiple animals. As Florida's most experienced mobile pet groomer, we are uniquely equipped to handle a wide variety of species, including dogs, cats, rabbits, and even horses. Whether you are in Palatka, Gainesville, Daytona Beach, or Jacksonville, Acme Grooming Co Mobile brings a versatile and professional grooming salon directly to your property. Our mobile unit is outfitted to provide specialized care for each different type of pet, ensuring that your entire animal family can be groomed in a single, convenient visit. We understand the logistics of managing multiple pets, and our service is designed to save you time and stress while providing top-tier care for every companion. Acme Grooming Co Mobile is proud to offer this inclusive and expert grooming solution to pet lovers throughout the Florida region.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Multi-Pet Grooming Important?
                </h2>
                <p className="leading-relaxed">
                  The importance of a dedicated multi-pet grooming service lies in its ability to provide consistent, high-quality care across different species with varying needs. At Acme Grooming Co Mobile, we believe that all animals welcome deserve 5-star rated attention, whether they are a small rabbit or a large horse. This service is important because it ensures that every pet in your household remains healthy, clean, and comfortable, which is particularly challenging in the Florida environment. Every sessions are personalized to each pet's breed and coat type, meaning your dog gets a different, specialized treatment than your cat or rabbit, all within the same visit. By choosing Acme Grooming Co Mobile in Palatka, Gainesville, Daytona Beach, or Jacksonville, you are ensuring that no pet is overlooked and that everyone receives the expert grooming they need to thrive. Our professional approach helps maintain a hygienic and happy home for both you and your diverse group of animal companions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Multi-Pet Grooming?
                </h2>
                <p className="leading-relaxed">
                  You should consider multi-pet grooming with Acme Grooming Co Mobile if you find it difficult to coordinate multiple trips to different groomers for your various animals. Florida pet owners in Palatka, Gainesville, Daytona Beach, or Jacksonville who value convenience and professional expertise will find our mobile service to be the perfect solution. If you have a household where the dogs, cats, and even the rabbits all need attention at once, Acme Grooming Co Mobile can handle it all in one stop. This is also an ideal time to consider grooming if you have larger animals like horses that require professional maintenance on your property. Our mobile unit is the safest and most efficient way to ensure your entire "pack" or "herd" is looking and feeling their best. Don't let the stress of multiple appointments overwhelm you; let Florida's most experienced mobile groomer take care of everything. Call us today or click below to Get Free Quote and simplify your pet care routine.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/de41e973-091f-485f-bc69-7711bf65de80.png"
                alt="Multi-pet grooming"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/6a856d63-a18b-44ca-ba6c-39a8e115a2d0.png"
                alt="Service image 2"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/ddd9f5ae-ee75-4ce0-8fdb-4c0daa6da377.png"
                alt="Service image 3"
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

export default ServiceMultiPetGrooming;
