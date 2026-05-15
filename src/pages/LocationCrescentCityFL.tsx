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

const ServiceAreaCrescentCity = () => {
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
              Your Dependable Crescent City, FL Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Fruitland · Georgetown · Pomona Park · Welaka · Lake Como · 32112
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
                Mobile Pet Grooming Services In Crescent City, FL
              </h2>
              <p className="leading-relaxed">
                Pet owners in Crescent City, FL deserve the same level of professional grooming care as those in larger Florida cities, and Acme Grooming Co Mobile is here to deliver exactly that. As your local mobile pet grooming specialist, we bring our fully equipped salon van directly to your door in Crescent City, FL, eliminating the need to transport anxious animals across town. We understand the close-knit, rural character of Crescent City, FL, and we are proud to serve this community with the personalized attention that our neighbors deserve. Our experienced groomers arrive at your Crescent City, FL home ready to provide a calm, one-on-one session that keeps your pet relaxed and comfortable from start to finish. Crescent City, FL pet owners have come to rely on Acme Grooming Co Mobile for consistent, high-quality results that simply cannot be matched by a busy shop environment. We are your trusted neighbor and the most reliable mobile grooming option serving Crescent City, FL today.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Here For All Your Grooming Needs In Crescent City, FL
              </h2>
              <p className="leading-relaxed">
                Acme Grooming Co Mobile brings the full spectrum of professional pet grooming services right to Crescent City, FL residents. Our skilled team specializes in dematting & undercoat treatments that are especially important in Crescent City, FL's humid lakeside climate, where coats can become thick and tangled quickly. We offer precision hand scissoring and breed-specific show cuts for Crescent City, FL pet owners who want their animals looking their best at all times. Our full grooming package for Crescent City, FL clients covers everything from deep conditioning baths to nail trimming and stylish finishes. For households in Crescent City, FL with birds, dogs, cats, or multiple animals, we have dedicated services that address every need in a single, convenient visit. Whether you need a quick nail trim & ear cleaning or a complete head-to-tail makeover, Acme Grooming Co Mobile is the answer for Crescent City, FL pet owners.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Why Choose Acme Grooming Co Mobile In Crescent City, FL
              </h2>
              <p className="leading-relaxed">
                Choosing Acme Grooming Co Mobile in Crescent City, FL means trusting Florida's most experienced mobile groomer to care for your family's beloved pets. We are a 5-star rated service proud to welcome all animals, and our commitment to excellence has made us the top choice for mobile grooming throughout Putnam County, including Crescent City, FL. Our mobile model in Crescent City, FL eliminates the noise, stress, and waiting rooms of traditional grooming salons, replacing them with a calm, individualized experience in the comfort of your own driveway. Every session we perform in Crescent City, FL is tailored to your pet's specific breed, coat type, and temperament, ensuring the most appropriate and gentle treatment possible. We know that Crescent City, FL pet owners value trust and reliability, and we deliver both on every single visit. Contact us today or click below to schedule your appointment and experience the Acme Grooming Co Mobile difference in Crescent City, FL.
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

export default ServiceAreaCrescentCity;
