import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "THE COMPLETE GUIDE TO PROFESSIONAL DOG GROOMING IN SATSUMA, FL",
    description:
      "Looking for expert dog grooming in Satsuma and surrounding areas? Discover how Acme Grooming Co Mobile keeps your furry friend clean, healthy, and looking their absolute best.",
    href: "/blog/complete-guide-to-professional-dog-grooming-in-satsuma-fl",
  },
  {
    title: "YOUR GO-TO TEAM FOR MOBILE PET GROOMING IN FLORIDA",
    description:
      "Need safe, loving, and convenient care for your dog? Learn how Acme Grooming Co Mobile provides stress-free mobile grooming right at your doorstep.",
    href: "/blog/your-go-to-team-for-mobile-pet-grooming-in-florida",
  },
  {
    title: "WHY REGULAR GROOMING IS ESSENTIAL FOR YOUR DOG'S HEALTH",
    description:
      "Regular grooming is about more than looks. Discover how consistent grooming sessions at Acme Grooming Co Mobile support your dog's skin, coat, and overall wellbeing.",
    href: "/blog/why-regular-grooming-is-essential-for-your-dogs-health",
  },
  {
    title: "FROM CHAOS TO CALM: MOBILE GROOMING THAT ACTUALLY WORKS",
    description:
      "Struggling with a nervous or anxious pet? Explore how Acme Grooming Co Mobile's gentle and patient approach transforms grooming across Florida.",
    href: "/blog/from-chaos-to-calm-mobile-grooming-that-actually-works",
  },
  {
    title: "MOBILE GROOMING VS. SALONS: WHICH IS BETTER FOR YOUR DOG?",
    description:
      "Not all grooming experiences are equal. Trust Acme Grooming Co Mobile to provide warm, one-on-one attention so your dog never has to wait in a stressful cage.",
    href: "/blog/mobile-grooming-vs-salons-which-is-better-for-your-dog",
  },
  {
    title: "PREPARING YOUR PET FOR THEIR FIRST MOBILE GROOM",
    description:
      "Grooming doesn't have to be a nightmare. Discover proven techniques from the Acme Grooming Co Mobile team to help your dog learn fast and enjoy a stress-free experience.",
    href: "/blog/preparing-your-pet-for-their-first-mobile-groom",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://vibe.filesafe.space/1777144393499000111/attachments/2c9060be-13eb-4282-8f3c-7811c0f61fd5.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
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

        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            CHECK OUT OUR BLOG
          </h1>
          {/* Three downward arrows */}
          <div className="flex items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="52"
                height="68"
                viewBox="0 0 52 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M26 4 L26 56 M10 40 L26 58 L42 40"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white text-black rounded-lg border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-base font-black uppercase leading-snug mb-4 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {post.description}
                </p>
                <Link
                  to={post.href}
                  className="text-sm font-black uppercase tracking-wider text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  READ FULL POST →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main>
        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Blog;
