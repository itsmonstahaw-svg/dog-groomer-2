import { Facebook, Instagram, MapPin, Users, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const About = () => {
  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        {/* Top Stats */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-6 mb-12 border-b border-border/40 pb-12">
          {[
            { text: "50 Years Experience", icon: Clock },
            { text: "All Pets Welcome", icon: Users },
            { text: "5 Star Rated", icon: ShieldCheck },
            { text: "Serving Satsuma, FL", icon: MapPin },
            { text: "Family Owned", icon: Users }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <span className="text-base md:text-lg font-black uppercase text-foreground">{stat.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">About Us</h2>
            <div className="w-24 h-1 bg-primary"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With 50 years of experience, Acme Grooming Co Mobile is your trusted partner for all pet grooming needs. Owned by Joan, we welcome all pets and provide top-notch, 5-star rated services within 50-60 miles of Satsuma, FL.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <GoogleIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://vibe.filesafe.space/1777144393499000111/attachments/f32313b8-afd0-4c42-90bd-8b7460f1da5e.png" 
                alt="About us" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 border-l-4 border-b-4 border-primary rounded-bl-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
