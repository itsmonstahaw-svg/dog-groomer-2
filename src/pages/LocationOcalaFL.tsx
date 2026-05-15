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

const ServiceAreaOcala = () => {
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
              Your Dependable Ocala, FL Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Silver Springs Shores · On Top of the World · Marion Oaks · Belleview · 34471 · 34476
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
                Mobile Pet Grooming Services In Ocala, FL
              </h2>
              <p className="leading-relaxed">
                Ocala, FL is home to horse farms, sprawling properties, and pet lovers who demand the best care for their animals, and Acme Grooming Co Mobile is built to serve exactly that community. We bring our professional, fully equipped mobile grooming salon directly to your property in Ocala, FL, making quality pet care more accessible and stress-free than ever before. The wide open spaces of Ocala, FL are perfect for our mobile model — we pull right up to your home and get to work in a calm, one-on-one environment that keeps your pets comfortable. Our groomers are experienced with the specific coat and care needs of animals in Ocala, FL's warm inland climate, from the humidity that encourages matting to the dust and pollen that can irritate sensitive skin. Acme Grooming Co Mobile has become the trusted choice for mobile pet grooming in Ocala, FL, and we are proud to serve this vibrant animal-loving community. Experience the convenience and quality of Florida's most experienced mobile groomer in Ocala, FL today.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Here For All Your Grooming Needs In Ocala, FL
              </h2>
              <p className="leading-relaxed">
                Acme Grooming Co Mobile provides Ocala, FL pet owners with a comprehensive menu of expert grooming services delivered right to their doorstep. Our team excels at dematting & undercoat treatments that are vital for dogs and cats living in the warm Ocala, FL climate. We offer precision hand scissoring, breed-standard show cuts, and full grooming packages for Ocala, FL clients who want their pets looking polished and professional. With so many multi-pet households in the Ocala, FL area, our ability to groom dogs, cats, birds, and other animals in a single visit is a major convenience. We also provide standalone nail trim & ear cleaning services throughout Ocala, FL for quick, no-fuss maintenance between full grooming sessions. Whatever your pet needs in Ocala, FL, Acme Grooming Co Mobile has the expertise and equipment to deliver exceptional results.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                Why Choose Acme Grooming Co Mobile In Ocala, FL
              </h2>
              <p className="leading-relaxed">
                Ocala, FL pet owners choose Acme Grooming Co Mobile because we combine the expertise of Florida's most experienced groomer with the unmatched convenience of a fully mobile service. We are a 5-star rated provider proud to welcome all animals, and our reputation throughout Ocala, FL is built on years of consistent, high-quality results. Our mobile grooming setup in Ocala, FL means your pet never has to sit in a crate waiting for their turn — every session is a private, focused appointment dedicated entirely to your animal. Each visit to an Ocala, FL home is personalized to the pet's specific breed, coat, and temperament, ensuring we always use the most appropriate techniques and products. We understand that Ocala, FL residents value reliability and professionalism, and we deliver on both with every appointment. Call us today or click below to Get Free Quote and join the growing family of satisfied Ocala, FL clients who trust Acme Grooming Co Mobile.
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

export default ServiceAreaOcala;
