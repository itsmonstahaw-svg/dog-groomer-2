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

const ServiceFullGrooming = () => {
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
              Full Grooming Package
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Complete spa treatment including bath, brush, cut, and finishing touches.
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
                  What Is Full Grooming Package?
                </h2>
                <p className="leading-relaxed">
                  The Full Grooming Package at Acme Grooming Co Mobile is a comprehensive, head-to-tail spa experience designed for the modern Florida pet owner. As Florida's most experienced mobile pet groomer, we have created a service that combines essential hygiene with professional styling, all within the convenience of our mobile salon. Serving Palatka, Gainesville, Daytona Beach, and Jacksonville, Acme Grooming Co Mobile ensures that your pet receives a deep-cleaning bath, a professional blowout, and a custom haircut tailored to your specific desires. Our mobile unit is fully equipped with the latest grooming technology, allowing us to provide a high-quality salon experience right in your driveway. We take the stress out of grooming by bringing our 5-star rated services directly to you, ensuring your pet remains relaxed and comfortable throughout the entire process. Acme Grooming Co Mobile is dedicated to providing the most thorough and professional full grooming service available in the state of Florida.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  Why Is Full Grooming Package Important?
                </h2>
                <p className="leading-relaxed">
                  A regular full grooming package is essential for maintaining your pet's physical health and emotional well-being in the Florida climate. At Acme Grooming Co Mobile, we believe that all animals welcome should have access to a service that includes not just a haircut, but also nail trimming, ear cleaning, and a thorough skin check. This holistic approach is important because it allows our experienced groomers to identify potential health issues early, which is a hallmark of our 5-star rated service. Each session is personalized to each pet's breed and coat type, ensuring that the products and techniques used are perfectly suited to their individual needs. By choosing Acme Grooming Co Mobile in Palatka, Gainesville, Daytona Beach, or Jacksonville, you are providing your pet with a stress-free environment that promotes a positive association with grooming. Our professional care helps prevent skin irritations and keeps your pet feeling fresh and happy despite the Florida heat and humidity.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
                  When Should You Consider Full Grooming Package?
                </h2>
                <p className="leading-relaxed">
                  You should consider booking a Full Grooming Package with Acme Grooming Co Mobile every 4 to 6 weeks to keep your pet in peak condition. For Florida pet owners in Palatka, Gainesville, Daytona Beach, or Jacksonville, regular grooming is the best way to manage shedding and prevent the build-up of dirt and allergens. If your pet's coat is looking dull, if they have developed a "doggy" odor, or if their fur is starting to mat, it is definitely time for a visit from Acme Grooming Co Mobile. Our mobile service is the perfect solution for busy families who want professional results without the hassle of a traditional salon. Whether you have a puppy experiencing their first groom or a senior pet who needs extra patience and care, our team is here to provide a gentle and expert experience. Don't wait until your pet is uncomfortable; maintain their beauty and health with Florida's most trusted groomers. Call us today or click below to Get Free Quote and schedule your appointment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/e37c624d-b987-434b-9b2b-88b28597555a.png"
                alt="Full grooming service"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/122fa165-703e-4169-b013-6fe123e364fb.png"
                alt="Service image 2"
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img
                src="https://vibe.filesafe.space/1777144393499000111/attachments/c61f5b12-8e55-438d-b83f-4d430ec3ed82.png"
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

export default ServiceFullGrooming;
