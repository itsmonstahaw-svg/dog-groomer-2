import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { useState, useEffect } from "react";

const ServiceAreaInterlachen = () => {
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
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              Service Areas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Your Dependable Interlachen, FL Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Grandin · Florahome · Hollister · Lake Butler · Penney Farms · 32148
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base uppercase tracking-wider rounded-sm shadow-2xl flex items-center gap-2" asChild>
                <a href="tel:+13863883540">
                  <Phone className="w-5 h-5" />
                  (386) 388-3540
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 border-white bg-white/10 text-white hover:bg-white hover:text-black font-black text-base uppercase tracking-wider rounded-sm shadow-2xl" onClick={() => setQuoteOpen(true)}>
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

        {/* Body Copy Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[900px] mx-auto px-[12px] space-y-12 text-lg text-zinc-800">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Mobile Pet Grooming Services In Interlachen, FL
              </h2>
              <p className="leading-relaxed">
                Interlachen, FL is a quiet, lake-dotted community in Putnam County where pet owners often struggle to find professional grooming services close to home. Acme Grooming Co Mobile solves that problem by bringing our fully equipped, professional mobile grooming van directly to your Interlachen, FL property. As your nearby mobile grooming specialist, we eliminate the long drive to the nearest pet salon and replace it with a calm, personalized session right in your own driveway in Interlachen, FL. Our expert groomers understand the rural and lakeside character of Interlachen, FL, and we are proud to bring city-quality grooming to this underserved community. Pets in Interlachen, FL thrive when groomed in a stress-free one-on-one environment, and that is exactly what Acme Grooming Co Mobile provides on every visit. We are your most convenient and trusted option for mobile pet grooming in Interlachen, FL.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Here For All Your Grooming Needs In Interlachen, FL
              </h2>
              <p className="leading-relaxed">
                Acme Grooming Co Mobile brings the full range of professional grooming services to Interlachen, FL, no matter how rural or off-the-beaten-path your property may be. Our skilled groomers specialize in dematting & undercoat treatments that are crucial for pets living near the lakes and humid forests of Interlachen, FL. We offer precision hand scissoring, show cuts, and full grooming packages that give Interlachen, FL pets the polished, professional look their owners love. For households in Interlachen, FL with birds, multiple dogs, cats, or other animals, our multi-pet service means everyone gets cared for in one convenient visit. Quick services like nail trim & ear cleaning are also available throughout Interlachen, FL for owners who need fast, professional maintenance without a full grooming session. Whatever your pet needs, Acme Grooming Co Mobile is ready to deliver it in Interlachen, FL.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Why Choose Acme Grooming Co Mobile In Interlachen, FL
              </h2>
              <p className="leading-relaxed">
                Interlachen, FL residents choose Acme Grooming Co Mobile because we are the only professional mobile grooming service that reliably serves their community with the same high standards you would expect in a major city. We are a 5-star rated service that welcomes all animals and believes every pet in Interlachen, FL deserves top-tier care regardless of their location. Our mobile approach in Interlachen, FL means no crates, no waiting rooms, and no noisy distractions — just focused, expert grooming in the quiet comfort of your home. Every appointment in Interlachen, FL is customized to your pet's specific breed, coat condition, and personality, ensuring we always deliver the most appropriate care. Interlachen, FL pet owners know they can count on us to show up on time and perform exceptional work every single visit. Call us today or click below to Get Free Quote and experience the best mobile grooming available in Interlachen, FL.
              </p>
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

export default ServiceAreaInterlachen;
