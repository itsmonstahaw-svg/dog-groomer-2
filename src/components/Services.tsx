import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Dematting & Undercoat Treatment",
      description: "Gentle removal of mats and dead undercoat to keep your pet's skin healthy and coat shining.",
      image: "https://vibe.filesafe.space/1777144393499000111/attachments/58ba642a-4ee9-4082-ad9b-a9b21c821316.png",
      href: "/services/dematting-undercoat"
    },
    {
      title: "Hand Scissoring & Show Cuts",
      description: "Precision styling and breed-specific cuts by our experienced master groomers.",
      image: "https://vibe.filesafe.space/1777144393499000111/attachments/a5d8c2c5-8753-4015-9740-75d9995c8c52.png",
      href: "/services/hand-scissoring"
    },
    {
      title: "Full Grooming Package",
      description: "Complete spa treatment including bath, brush, cut, and finishing touches.",
      image: "https://vibe.filesafe.space/1777144393499000111/attachments/008dbbef-cd63-47ec-b9cb-de9eefe38af2.png",
      href: "/services/full-grooming"
    },
    {
      title: "Bird Grooming",
      description: "Professional beak, nail, and wing trimming for all types of avian friends.",
      image: "https://vibe.filesafe.space/1777144393499000111/attachments/ac0de7e9-73c7-4347-a111-dd60d27cfeef.png",
      href: "/services/bird-grooming"
    },
    {
      title: "Nail Trim & Ear Cleaning",
      description: "Essential maintenance for your pet's comfort, hygiene, and overall well-being.",
      image: "https://vibe.filesafe.space/1777144393499000111/attachments/e2305356-3ce9-4c00-866c-0206676ea4de.png",
      href: "/services/nail-trim-ear-cleaning"
    },
    {
      title: "Multi-Pet Grooming",
      description: "We welcome dogs, cats, rabbits, and horses! Comprehensive care for all your companions.",
      image: "https://vibe.filesafe.space/1777144393499000111/assets/7db4e9d7-dfce-44ec-9b93-1c9b9587f7fe.png",
      href: "/services/multi-pet-grooming"
    }
  ];

  return (
    <section id="services" className="py-12 bg-card border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black border-[2px] border-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.a 
              key={index} 
              href={service.href}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative block overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-[4/3] bg-black"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              />
              
              {/* Overlay Description */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 pointer-events-none">
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <p className="text-white text-lg font-medium leading-relaxed text-center drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Title Badge */}
              <div className="absolute bottom-6 left-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="bg-black text-white px-4 py-2.5 text-sm sm:text-base font-black uppercase tracking-wide flex items-center gap-2 shadow-xl rounded-sm">
                  {service.title}
                  <div className="bg-primary text-primary-foreground rounded-full p-0.5 ml-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
