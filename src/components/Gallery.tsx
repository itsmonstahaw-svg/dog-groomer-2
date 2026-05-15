import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = [
    "https://vibe.filesafe.space/1777144393499000111/attachments/58ba642a-4ee9-4082-ad9b-a9b21c821316.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/a5d8c2c5-8753-4015-9740-75d9995c8c52.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/008dbbef-cd63-47ec-b9cb-de9eefe38af2.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/8a4d744b-9eb5-4891-8caa-9c0a004aa6de.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/c9fbefd8-a5a4-4b91-8f0a-3303d94b1ac2.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/243b2e7a-8c8c-46c7-a56a-b4c6f52790f2.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/16f90138-95dd-4bb7-9aef-c7a2026ac484.png",
    "https://vibe.filesafe.space/1777144393499000111/attachments/59d8c6d2-3f79-4aa6-94cf-8e5abdaaa323.png",
  ];

  return (
    <section id="gallery" className="py-12 bg-card border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              See Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mt-6"></div>
          </div>
          <Button variant="outline" className="font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            See All Photos
          </Button>
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group mb-4"
            >
              <img 
                src={img} 
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover bg-muted/10 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
