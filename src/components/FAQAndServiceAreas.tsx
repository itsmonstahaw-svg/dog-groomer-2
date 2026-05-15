import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin } from "lucide-react";


export const FAQAndServiceAreas = () => {
  const faqs = [
    {
      question: "Do you require vaccination records?",
      answer: "Yes, for the safety of all pets in our salon, we require proof of current Rabies, Distemper/Parvo, and Bordetella vaccinations before any grooming services."
    },
    {
      question: "How long does a grooming appointment take?",
      answer: "A typical full groom takes between 2 to 4 hours depending on the breed, size, coat condition, and temperament of your dog. We will give you a call or text when they are ready for pickup."
    },
    {
      question: "Can I stay with my dog during the grooming?",
      answer: "For safety reasons and to keep the dogs calm, we ask that owners do not stay in the grooming area. Dogs are usually much more cooperative and relaxed when their owners are not present."
    },
    {
      question: "Do you groom large breeds or difficult dogs?",
      answer: "Yes! We welcome dogs of all sizes and breeds. Please let us know in advance if your dog has any behavioral issues or anxieties so we can schedule appropriate time and staff."
    }
  ];



  return (
    <section id="faq-areas" className="py-20 bg-black text-white border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] space-y-24">
        
        {/* Top Section: FAQ + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* FAQ Left */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#849b36]/40 border-b-2">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-[#849b36] hover:no-underline transition-colors py-6 flex-row-reverse justify-end gap-4 [&[data-state=open]>svg]:text-[#849b36]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Image Right */}
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[450px]">
            <img 
              src="https://vibe.filesafe.space/1777144393499000111/attachments/66a642c2-d034-4139-ab67-96efe7c2fc74.png" 
              alt="Standard Poodle on grooming table" 
              className="object-contain w-full h-full absolute inset-0"
            />
          </div>
        </div>

        {/* Bottom Section: Service Areas */}
        <div className="pt-10 mt-10 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl aspect-square md:aspect-[4/3] relative overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=101%20Ganey%20Ln,%20Satsuma,%20FL%2032189&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Service Areas List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
                  PROUDLY SERVING THESE AREAS
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Palatka, FL",
                  "Gainesville, FL",
                  "Daytona Beach, FL",
                  "Jacksonville, FL"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800 shadow-sm text-white">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
