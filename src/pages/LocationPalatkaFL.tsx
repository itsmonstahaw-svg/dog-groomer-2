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

const ServiceAreaPalatka = () => {
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
              Your Dependable Palatka, FL Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Serving Palatka, FL and surrounding areas
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
                Mobile Pet Grooming Services In Palatka, FL
              </h2>
              <p className="leading-relaxed">
                Finding a reliable and professional mobile pet groomer in Palatka, FL can be a challenge for busy pet owners who want the best for their furry companions. At Acme Grooming Co Mobile, we understand that your pets are family, and we bring our high-quality grooming salon directly to your doorstep in Palatka, FL. Our mobile unit is fully equipped to handle all your pet's needs without the stress of a traditional salon environment or the long commute across Palatka, FL. We pride ourselves on being the go-to experts for mobile pet grooming in Palatka, FL, ensuring that every session is convenient for you and comfortable for your animal. Whether you are located in the heart of Palatka, FL or the surrounding rural areas, our expert team is dedicated to providing a superior level of care that pet owners in Palatka, FL have come to trust and rely on for years.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Here For All Your Grooming Needs In Palatka, FL
              </h2>
              <p className="leading-relaxed">
                Acme Grooming Co Mobile offers a comprehensive suite of services to meet the diverse grooming requirements of pet owners in Palatka, FL. Our skilled groomers in Palatka, FL are experts in dematting & undercoat treatments, ensuring your pet's coat remains healthy and manageable in the Florida heat. We also provide precision hand scissoring and professional show cuts for those in Palatka, FL who want their pets looking their absolute best. For a complete refresh, our full grooming package in Palatka, FL includes everything from deep cleaning baths to stylish trims. We don't just stop at dogs and cats; our specialized bird grooming services in Palatka, FL cater to our feathered friends with expert care. Additionally, we offer quick and efficient nail trim & ear cleaning services in Palatka, FL, as well as multi-pet grooming discounts for households in Palatka, FL with several animals that need attention simultaneously.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Why Choose Acme Grooming Co Mobile In Palatka, FL
              </h2>
              <p className="leading-relaxed">
                Choosing Acme Grooming Co Mobile in Palatka, FL means choosing Florida's most experienced pet groomer for your beloved companions. We are proud to be a 5-star rated service in Palatka, FL, where all animals are welcome, from the smallest kittens to the largest dogs and even exotic birds. Our mobile service in Palatka, FL is designed to be completely stress-free, providing a one-on-one environment that is far more comfortable than a noisy, crowded shop. Every session in Palatka, FL is personalized and tailored specifically to your pet's breed, coat type, and unique temperament. By choosing us in Palatka, FL, you are opting for a professional who values quality over quantity and treats every animal with the patience and respect they deserve. Experience the convenience of a premium grooming service that comes to you in Palatka, FL, making pet care a seamless and enjoyable part of your routine.
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

export default ServiceAreaPalatka;
