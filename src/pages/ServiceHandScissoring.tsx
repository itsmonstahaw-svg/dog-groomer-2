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

const ServiceHandScissoring = () => {
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
              Hand Scissoring & Show Cuts
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Precision styling and breed-specific cuts by our experienced master groomers.
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
                  What Is Hand Scissoring & Show Cuts?
                </h2>
                <p className="leading-relaxed">
                  Hand scissoring and show cuts at Acme Grooming Co Mobile represent the pinnacle of professional grooming artistry for pet owners in Florida. This specialized service involves the meticulous use of professional shears to sculpt and shape your pet's coat with a level of precision that clippers simply cannot achieve. As Florida's most experienced mobile pet groomer, Acme Grooming Co Mobile brings this high-end salon technique directly to your home in Palatka, Gainesville, Daytona Beach, or Jacksonville. Our master groomers understand the intricate requirements of breed-standard cuts and the aesthetic nuances that make a show-quality finish. By choosing Acme Grooming Co Mobile, you are opting for a tailored styling experience that highlights your pet's best features while maintaining a natural and balanced appearance. We take pride in offering this premium service across Florida, ensuring that every pet we touch looks like they just stepped off a professional stage.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Hand Scissoring & Show Cuts Important?
                </h2>
                <p className="leading-relaxed">
                  The importance of hand scissoring lies in its ability to provide a customized, soft, and textured finish that is far superior to standard clipper work. At Acme Grooming Co Mobile, we believe that all animals welcome deserve a 5-star rated styling session that respects their unique physical structure. This technique is particularly important for breeds with specific coat requirements, as it prevents the "choppy" look and allows for a more seamless transition between different lengths of fur. Every sessions are personalized to each pet's breed and coat type, ensuring that the final result is both beautiful and functional for the Florida environment. Whether you are in Palatka, Gainesville, Daytona Beach, or Jacksonville, Acme Grooming Co Mobile provides a stress-free environment where your pet can receive the detailed attention they deserve. Our hand scissoring service not only enhances your pet's beauty but also ensures their coat remains healthy and manageable in the Florida humidity.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Hand Scissoring & Show Cuts?
                </h2>
                <p className="leading-relaxed">
                  You should consider hand scissoring and show cuts if you want a more refined, professional look for your pet that stands out in the Florida sun. This service is ideal for Florida pet owners who are preparing for a special event, a photo session, or simply want to maintain their pet's breed-specific silhouette with the help of Acme Grooming Co Mobile. If your pet has a thick, curly, or double coat that requires careful management in Palatka, Gainesville, Daytona Beach, or Jacksonville, our master groomers can provide the precision needed to keep them looking their best. Acme Grooming Co Mobile is the preferred choice for those who value quality over speed and want a groomer who treats every animal as an individual. When your pet's coat starts to lose its shape or if you want to switch to a more natural, hand-finished style, it is time to contact Florida's experts. Call us today or click below to Get Free Quote and schedule your premium styling session.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/d23a365c-7ea8-47c6-9047-dbdcd8f1f0b2.png"
                alt="Hand scissoring service"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/bf3edf0b-2f00-482f-970d-291e8e6d63d1.png"
                alt="Service image 2"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/997efeed-57e3-4c2e-aa90-44480fd33d68.png"
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

export default ServiceHandScissoring;
