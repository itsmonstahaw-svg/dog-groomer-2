import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { useState } from "react";

const Gallery = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const gridImages: string[] = [
    "https://vibe.filesafe.space/1777144393499000111/attachments/7b1db069-4297-4ed9-b54c-6eb193eae158.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/4b598a7f-7868-4dc5-bc84-f2c59bcea6a6.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/f3087eb1-3a82-42a2-88b2-4c23ae8d1719.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/7bdb9229-9350-4c50-93f0-b21c4a0b35d9.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/fe94a529-e735-45c3-8388-44a6a27abdd5.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/87219f90-6880-421b-8429-d01903b3afc1.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/67e52e0a-0316-454f-9b94-7b8a5f01d559.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/eab7292a-ee2d-4169-b19b-d18c0fa36be1.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/1495264b-bf0d-4783-b6fa-1509e439c151.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/73b0944c-87ba-43a7-9235-b44f099a7fdb.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/712a1c73-586c-4db2-bc38-54affc926201.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/a121923b-a298-4255-ae5c-0a68ffc40797.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/4a0d9573-1e61-47ed-bc40-3191bdee832c.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/fbef9ace-2d18-457e-80ea-83fb19d411fa.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/e57b0a03-5462-4317-80a6-29f20f4ffacd.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/21d2fe2b-d609-437a-88cd-66d0d13d19ea.png"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777144393499000111/attachments/2c9060be-13eb-4282-8f3c-7811c0f61fd5.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 text-center text-white flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-4 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              OUR WORK
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium mb-8 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              See for yourself why our customers love us
            </p>
            <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm shadow-2xl" onClick={() => setQuoteOpen(true)}>
              Get Free Quote
            </Button>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                fill="currentColor"
                className="text-black"
                d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </section>

        {/* Photo Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {gridImages.map((src, index) => (
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-md relative bg-zinc-900">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />

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

export default Gallery;
