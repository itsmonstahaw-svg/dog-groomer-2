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

const ServiceNailTrimEarCleaning = () => {
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
              Nail Trim & Ear Cleaning
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Essential maintenance for your pet's comfort, hygiene, and overall well-being.
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
                  What Is Nail Trim & Ear Cleaning?
                </h2>
                <p className="leading-relaxed">
                  Nail trim and ear cleaning at Acme Grooming Co Mobile are essential maintenance services that form the foundation of good pet hygiene in Florida. As Florida's most experienced mobile pet groomer, we provide these critical services with a focus on safety, comfort, and precision. Whether you are located in Palatka, Gainesville, Daytona Beach, or Jacksonville, Acme Grooming Co Mobile brings professional-grade tools and expert handling directly to your home. Our mobile unit is designed to be a calm oasis, allowing us to perform these often-sensitive tasks without the distractions of a busy shop. We use specialized techniques to ensure nails are trimmed to the perfect length and ears are cleaned of debris and wax build-up. Acme Grooming Co Mobile understands that for many Florida pet owners, these tasks can be difficult to perform at home, which is why we offer them as a convenient and professional mobile solution.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Nail Trim & Ear Cleaning Important?
                </h2>
                <p className="leading-relaxed">
                  Regular nail and ear maintenance is vital for preventing pain and long-term health issues for pets across Florida. At Acme Grooming Co Mobile, we believe that all animals welcome should receive 5-star rated care that addresses their most basic needs. Overgrown nails can cause joint pain and difficulty walking on Florida's varied terrain, while neglected ears can quickly lead to painful infections in the humid Florida climate. This service is important because it promotes proper posture and prevents the discomfort of scratched skin or constant ear-flapping. Every sessions are personalized to each pet's breed and coat type, ensuring that we use the most appropriate cleaning solutions and trimming methods for their specific needs. By choosing Acme Grooming Co Mobile in Palatka, Gainesville, Daytona Beach, or Jacksonville, you are ensuring that your pet receives a thorough and professional check-up of these critical areas, keeping them healthy and happy year-round.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Nail Trim & Ear Cleaning?
                </h2>
                <p className="leading-relaxed">
                  You should consider booking a nail trim and ear cleaning session with Acme Grooming Co Mobile if you hear your pet's nails clicking on the floor or if they appear to be walking gingerly. Florida pet owners in Palatka, Gainesville, Daytona Beach, or Jacksonville should also be alert for signs of ear discomfort, such as frequent head shaking, scratching at the ears, or a noticeable odor. If your pet's ears appear red or have a dark discharge, it is time for a professional cleaning from Acme Grooming Co Mobile. These services are ideal as a standalone appointment or as an add-on to our full grooming packages. Our mobile service is particularly beneficial for pets who are nervous about having their paws or ears handled, as the one-on-one attention from our experienced groomers helps build trust. Don't wait for a minor issue to become a major veterinary bill; maintain your pet's hygiene with the best in Florida. Call us today or click below to Get Free Quote.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/192b8bb7-4439-4599-ad94-7855875f2b5b.png"
                alt="Nail trim and ear cleaning"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/55c53488-2dca-4238-b9d9-4df80614726a.png"
                alt="Service image 2"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/9be5e90e-5aa8-4ae2-8c39-24462efce95a.png"
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

export default ServiceNailTrimEarCleaning;
