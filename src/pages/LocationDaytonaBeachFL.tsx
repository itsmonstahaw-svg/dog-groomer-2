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

const ServiceAreaDaytonaBeach = () => {
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
              Your Dependable Daytona Beach, FL Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Serving Daytona Beach, FL and surrounding areas
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
                Mobile Pet Grooming Services In Daytona Beach, FL
              </h2>
              <p className="leading-relaxed">
                For pet owners in Daytona Beach, FL, finding a reliable and professional mobile grooming service is essential for maintaining their pet's health and happiness without the stress of travel. Acme Grooming Co Mobile is proud to offer premium mobile pet grooming throughout Daytona Beach, FL, bringing our state-of-the-art mobile salon directly to your home. We understand that the busy lifestyle in Daytona Beach, FL can make it difficult to schedule traditional salon visits, which is why our convenient mobile service is the perfect choice for the local community. Our expert groomers are dedicated to providing a calm, one-on-one environment for every pet we serve in Daytona Beach, FL, ensuring they feel safe and relaxed throughout the entire process. Whether you live near the coast or further inland in Daytona Beach, FL, our team is committed to delivering a superior level of care that has made us the most trusted name for mobile grooming in Daytona Beach, FL and beyond.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Here For All Your Grooming Needs In Daytona Beach, FL
              </h2>
              <p className="leading-relaxed">
                Acme Grooming Co Mobile offers a wide array of professional services to meet the specific grooming needs of every pet in Daytona Beach, FL. Our experienced team in Daytona Beach, FL specializes in dematting & undercoat treatments, which are vital for keeping pets comfortable and healthy in the warm Daytona Beach, FL climate. We also provide precision hand scissoring and high-quality show cuts for pet owners in Daytona Beach, FL who want their animals to look their absolute best. For a complete transformation, our full grooming package in Daytona Beach, FL includes deep cleaning baths, stylish trims, and thorough attention to detail. We are also proud to offer specialized bird grooming services in Daytona Beach, FL, catering to our feathered friends with expert care. Additionally, we provide quick nail trim & ear cleaning services across Daytona Beach, FL, and our multi-pet grooming options are perfect for households in Daytona Beach, FL with several animals that need professional care at the same time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Why Choose Acme Grooming Co Mobile In Daytona Beach, FL
              </h2>
              <p className="leading-relaxed">
                Choosing Acme Grooming Co Mobile in Daytona Beach, FL means you are opting for Florida's most experienced pet groomer to care for your beloved companions. We are a 5-star rated service in Daytona Beach, FL, known for welcoming all animals and providing a level of care that is second to none. Our mobile grooming model in Daytona Beach, FL is specifically designed to be completely stress-free, offering a quiet and comfortable environment that eliminates the anxiety often associated with busy, noisy pet salons. Every session we provide in Daytona Beach, FL is highly personalized and tailored to your pet's unique breed, coat type, and individual temperament. We pride ourselves on our patience and dedication to quality, ensuring that every pet owner in Daytona Beach, FL receives consistent and exceptional results. Experience the peace of mind that comes with a professional grooming service that comes directly to you in Daytona Beach, FL, making pet care a convenient and positive experience for both you and your pet.
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

export default ServiceAreaDaytonaBeach;
