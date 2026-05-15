import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const blogContent: Record<string, { title: string; content: { heading: string; text: string }[] }> = {
  "complete-guide-to-professional-dog-grooming-in-satsuma-fl": {
    title: "THE COMPLETE GUIDE TO PROFESSIONAL DOG GROOMING IN SATSUMA, FL",
    content: [
      {
        heading: "Expert Grooming Services Right at Your Doorstep",
        text: "Finding the right grooming service for your pet in Satsuma, FL, shouldn't be a hassle. Acme Grooming Co Mobile brings professional, top-tier grooming directly to your driveway. Our fully equipped mobile salons provide a safe, comfortable, and stress-free environment for your furry friends. Whether your dog needs a simple bath and brush or a full styling session, our experienced groomers handle every detail with care and precision."
      },
      {
        heading: "Tailored Care for Every Breed and Coat Type",
        text: "No two dogs are the same, and neither are their grooming needs. We specialize in customized grooming plans that take into account your dog's breed, coat texture, and lifestyle. From double-coated breeds that require extensive deshedding to curly-coated poodles that need precise hand scissoring, our team has the expertise to ensure your dog looks and feels their absolute best. We use premium, pet-safe products that nourish the skin and leave the coat shining."
      },
      {
        heading: "A Stress-Free Experience for Anxious Pets",
        text: "Traditional grooming salons can be loud, crowded, and overwhelming for many dogs. Our mobile grooming service eliminates the stress of car rides, waiting in cages, and being surrounded by unfamiliar animals. Your dog receives one-on-one attention from start to finish in a calm, quiet setting. This personalized approach is especially beneficial for senior dogs, puppies, and pets with anxiety, allowing them to relax and enjoy the pampering process."
      },
      {
        heading: "Health Benefits Beyond Just Looking Good",
        text: "Regular grooming is a crucial component of your dog's overall health and well-being. During a grooming session, our professionals thoroughly inspect your dog's skin, coat, ears, and paws. This allows us to spot potential health issues such as ear infections, skin irritations, or hidden lumps early on. Furthermore, services like nail trimming prevent painful overgrowth and joint issues, while proper coat maintenance prevents severe matting that can cause skin damage."
      },
      {
        heading: "Convenience That Fits Your Busy Schedule",
        text: "We understand that your time is valuable. Driving back and forth to a grooming salon can take up a significant portion of your day. With Acme Grooming Co Mobile, we work around your schedule, bringing the salon to you. You can continue with your daily tasks at home while we take care of your pet just steps away. It's the ultimate convenience for busy pet owners in Satsuma and the surrounding Florida areas."
      },
      {
        heading: "Commitment to Safety and Hygiene",
        text: "Safety and cleanliness are our top priorities. Our mobile grooming vans are sanitized thoroughly between each appointment to prevent the spread of germs and ensure a hygienic environment. We use state-of-the-art equipment, including climate control, warm water baths, and safe restraint systems, to guarantee your pet's comfort and security throughout the entire grooming process. Trust Acme Grooming Co Mobile for a pristine and safe grooming experience."
      }
    ]
  },
  "your-go-to-team-for-mobile-pet-grooming-in-florida": {
    title: "YOUR GO-TO TEAM FOR MOBILE PET GROOMING IN FLORIDA",
    content: [
      {
        heading: "Bringing the Salon to Your Driveway",
        text: "Acme Grooming Co Mobile is proud to be Florida's premier choice for mobile pet grooming. We understand that your pets are beloved members of your family, and they deserve the highest level of care and attention. Our state-of-the-art mobile grooming vans are fully equipped with everything needed to provide a comprehensive spa experience right outside your home. Say goodbye to the hassle of transporting your pet and hello to unparalleled convenience."
      },
      {
        heading: "Experienced and Compassionate Groomers",
        text: "Our team consists of highly trained and passionate grooming professionals who truly love animals. We treat every pet with the same patience, kindness, and respect we would give our own. With years of experience handling various breeds and temperaments, our groomers know how to make the grooming process enjoyable and relaxing. We take the time to build trust with your pet, ensuring they feel safe and comfortable in our care."
      },
      {
        heading: "Comprehensive Grooming Services Tailored to You",
        text: "From luxurious baths and deep-conditioning treatments to precision haircuts and gentle ear cleanings, we offer a full suite of grooming services. We customize each session based on your pet's specific needs, coat condition, and your personal preferences. Whether it's a simple maintenance trim or a complete makeover, our team is dedicated to delivering exceptional results that leave your pet looking fabulous and smelling fresh."
      },
      {
        heading: "The Mobile Advantage: Less Stress, More Love",
        text: "The traditional salon environment can be chaotic and stressful for many pets. The noise of multiple dryers, the presence of other animals, and the time spent waiting in kennels can cause significant anxiety. Our mobile service provides a quiet, cage-free, and one-on-one environment. Your pet receives our undivided attention from the moment they step into the van until they are happily returned to your door, making the experience positive and stress-free."
      },
      {
        heading: "Serving Communities Across the Sunshine State",
        text: "While we are rooted in Satsuma, our mobile grooming services extend across a wide range of Florida communities, including Palatka, Gainesville, Daytona Beach, and Jacksonville. We are committed to reaching pet owners who demand the best for their furry companions. Our reliable and punctual service ensures that you can count on us to be there when you need us, providing top-tier grooming without the commute."
      },
      {
        heading: "Book Your Pet's Spa Day Today",
        text: "Ready to experience the ultimate in pet grooming convenience? Scheduling an appointment with Acme Grooming Co Mobile is easy and hassle-free. Our friendly customer service team is ready to answer any questions and help you choose the right services for your pet. Treat your dog or cat to a luxurious spa day right at home and see why we are Florida's go-to team for mobile pet grooming."
      }
    ]
  },
  "why-regular-grooming-is-essential-for-your-dogs-health": {
    title: "WHY REGULAR GROOMING IS ESSENTIAL FOR YOUR DOG'S HEALTH",
    content: [
      {
        heading: "More Than Just a Pretty Face",
        text: "When most people think of dog grooming, they picture a beautifully styled coat and a fresh-smelling pet. While aesthetics are certainly a wonderful benefit, regular grooming is fundamentally about maintaining your dog's overall health. At Acme Grooming Co Mobile, we emphasize the medical and physical benefits of consistent grooming. It is a vital part of preventative care that keeps your furry friend comfortable, happy, and thriving."
      },
      {
        heading: "Healthy Skin and a Shiny Coat",
        text: "Routine brushing and bathing remove dirt, dead skin cells, and loose fur from your dog's coat. This process helps distribute natural oils across the skin and fur, promoting a healthy, shiny coat and preventing dry, flaky skin. For dogs with thick or double coats, regular deshedding and brushing prevent severe matting. Mats can pull tightly on the skin, causing pain, restricted movement, and even severe skin infections if left untreated."
      },
      {
        heading: "Early Detection of Health Issues",
        text: "Professional groomers are trained to notice things that might easily be overlooked at home. During a grooming session, our team thoroughly examines your dog's body. We often discover early signs of skin conditions, unusual lumps, bumps, or cysts, as well as external parasites like fleas and ticks. Catching these issues early allows you to consult with your veterinarian promptly, potentially saving your pet from prolonged discomfort or serious health complications."
      },
      {
        heading: "Nail Care for Proper Posture and Mobility",
        text: "Overgrown nails are a common issue that can lead to significant pain and mobility problems. When a dog's nails are too long, they can alter the way the dog walks, placing unnatural strain on their joints and potentially leading to arthritis over time. In severe cases, nails can curl and grow into the paw pads, causing excruciating pain and infection. Regular nail trimming during grooming appointments ensures your dog's feet remain healthy and their posture stays correct."
      },
      {
        heading: "Ear and Eye Maintenance",
        text: "Clean ears and eyes are essential for your dog's comfort and health. Certain breeds are particularly prone to ear infections due to heavy, floppy ears or excess hair growing in the ear canal. Regular ear cleaning removes wax buildup and moisture, significantly reducing the risk of painful infections. Similarly, keeping the hair around the eyes trimmed prevents irritation, tearing, and potential eye infections, ensuring your dog can see clearly and comfortably."
      },
      {
        heading: "Establishing a Healthy Routine",
        text: "Consistency is key when it comes to grooming. Establishing a regular grooming schedule not only keeps your dog in top physical condition but also helps them become accustomed to the process. Dogs that are groomed regularly from a young age learn to tolerate and even enjoy the experience. Trust Acme Grooming Co Mobile to partner with you in maintaining your dog's health through professional, compassionate, and regular mobile grooming services."
      }
    ]
  },
  "from-chaos-to-calm-mobile-grooming-that-actually-works": {
    title: "FROM CHAOS TO CALM: MOBILE GROOMING THAT ACTUALLY WORKS",
    content: [
      {
        heading: "Transforming the Grooming Experience",
        text: "For many pet owners, grooming day is synonymous with stress, anxiety, and a struggle to get their dog into the car. If your pet dreads the salon, Acme Grooming Co Mobile offers a transformative solution. We bring a calm, controlled, and soothing environment directly to your home. By eliminating the chaotic elements of traditional salons, we turn what used to be a chaotic chore into a peaceful, positive experience for both you and your pet."
      },
      {
        heading: "The Power of a Familiar Environment",
        text: "Dogs are highly sensitive to their surroundings. The sights, sounds, and smells of a busy grooming salon can easily overwhelm them. With our mobile grooming vans, your dog never has to leave the comfort and security of their own property. Being just steps away from their home significantly reduces anxiety. They are groomed in a quiet, private space where the only focus is on their comfort and well-being."
      },
      {
        heading: "One-on-One Attention Makes All the Difference",
        text: "In a typical salon, groomers often juggle multiple dogs at once, leading to prolonged stays and extended periods in holding cages. Our mobile service guarantees exclusive, one-on-one attention. Your dog is the only pet in the van, which means no barking dogs to upset them and no waiting around. This focused approach allows our groomers to work efficiently yet gently, pacing the session according to your dog's comfort level."
      },
      {
        heading: "Building Trust Through Patience",
        text: "We believe that a successful groom is built on trust. Our experienced groomers take the time to introduce themselves to your pet, allowing them to sniff the equipment and get comfortable before any work begins. We use positive reinforcement, gentle handling, and a soothing voice to reassure anxious dogs. By moving at a pace that respects your dog's boundaries, we help them realize that grooming is nothing to fear."
      },
      {
        heading: "Specialized Care for Senior and Special Needs Pets",
        text: "Older dogs and those with physical limitations or medical conditions require extra care and a gentle touch. The hustle and bustle of a salon can be particularly hard on them. Our mobile grooming environment is ideal for these special pets. We provide supportive equipment, take frequent breaks if needed, and ensure they are physically comfortable throughout the process, providing a dignified and pain-free grooming experience."
      },
      {
        heading: "A Happier Pet, A Happier Owner",
        text: "When your dog is calm and happy, you are too. The convenience and peace of mind that come with mobile grooming are unmatched. You can relax inside your home, knowing your furry family member is receiving the best possible care right outside. Choose Acme Grooming Co Mobile for a grooming solution that actually works, turning chaos into calm and leaving your pet looking and feeling wonderful."
      }
    ]
  },
  "mobile-grooming-vs-salons-which-is-better-for-your-dog": {
    title: "MOBILE GROOMING VS. SALONS: WHICH IS BETTER FOR YOUR DOG?",
    content: [
      {
        heading: "Making the Right Choice for Your Pet",
        text: "As a pet owner, you want the absolute best for your furry friend, and choosing the right grooming option is a significant decision. While traditional grooming salons have been the standard for decades, mobile grooming has rapidly gained popularity for its numerous benefits. Understanding the differences between the two can help you make an informed choice that prioritizes your dog's comfort, health, and happiness. At Acme Grooming Co Mobile, we believe the mobile advantage is clear."
      },
      {
        heading: "The Salon Environment: Hustle and Bustle",
        text: "Traditional grooming salons are often busy, high-energy environments. Multiple dogs are being washed, dried, and clipped simultaneously. The noise of high-velocity dryers, ringing phones, and barking dogs can be incredibly overstimulating. Additionally, pets are typically required to wait in kennels before and after their appointments, meaning a groom that takes one hour of actual work might require your dog to be at the salon for four to six hours."
      },
      {
        heading: "The Mobile Environment: Quiet and Focused",
        text: "In stark contrast, mobile grooming offers a serene, private setting. Our fully equipped vans arrive at your home, providing a one-on-one grooming session for your dog. There are no other animals, no ringing phones, and no cages. The environment is climate-controlled, quiet, and entirely focused on your pet. This exclusive attention ensures the groom is completed efficiently and safely, without any unnecessary waiting or stress."
      },
      {
        heading: "Health and Safety Considerations",
        text: "Whenever multiple animals are gathered in one place, there is an increased risk of spreading fleas, ticks, or contagious illnesses like kennel cough. Traditional salons work hard to maintain cleanliness, but the risk is inherently higher. Mobile grooming significantly reduces this risk. Your dog is not exposed to other pets, and our vans are thoroughly sanitized between every single appointment, providing a pristine and safe environment for your pet's spa day."
      },
      {
        heading: "Unmatched Convenience for Owners",
        text: "Let's face it: life is busy. Scheduling a drop-off and pick-up at a salon takes a chunk out of your day, not to mention the hassle of getting a reluctant or muddy dog into your car. Mobile grooming brings the service to your doorstep. You save time on commuting and can go about your day at home or work while your dog is being pampered just outside. It's the ultimate luxury and convenience for busy Florida residents."
      },
      {
        heading: "Personalized Relationships",
        text: "In a large salon, your dog might see a different groomer each time they visit. With Acme Grooming Co Mobile, you and your pet build a lasting relationship with a dedicated groomer. This consistency allows the groomer to intimately know your dog's physical quirks, behavioral triggers, and preferred styling. This personalized bond translates to a better, faster, and more enjoyable grooming experience every single time."
      }
    ]
  },
  "preparing-your-pet-for-their-first-mobile-groom": {
    title: "PREPARING YOUR PET FOR THEIR FIRST MOBILE GROOM",
    content: [
      {
        heading: "Setting the Stage for Success",
        text: "Your pet's first mobile grooming appointment is an exciting milestone, but it can also be a little intimidating for them. The sight of a new van and the introduction of new sounds and sensations require a gentle approach. At Acme Grooming Co Mobile, we strive to make every first impression a positive one. By taking a few simple steps to prepare your dog beforehand, you can help ensure their first mobile spa day is smooth, stress-free, and enjoyable."
      },
      {
        heading: "Familiarize Them with Handling",
        text: "Grooming involves a lot of touching in sensitive areas. You can help your dog prepare by regularly handling their paws, ears, tail, and muzzle at home. Gently massage their feet and extend their nails, look inside their ears, and lift their lips to check their teeth. Pair these actions with high-value treats and praise. The more comfortable they are with being handled by you, the more relaxed they will be when our professional groomers do the same."
      },
      {
        heading: "Introduce Grooming Tools Early",
        text: "If possible, introduce your dog to basic grooming tools before their appointment. Let them sniff a brush or comb, and gently run it over their coat while offering treats. You can also desensitize them to the sound of clippers or dryers by using an electric toothbrush or a hair dryer on a low setting near them, rewarding them for remaining calm. Familiarity with these tools reduces the startle factor during the actual groom."
      },
      {
        heading: "A Tired Dog is a Good Dog",
        text: "Excess energy can make it difficult for a dog to stand still and relax during a grooming session. We highly recommend taking your dog for a solid walk or engaging them in an active play session before our van arrives. Burning off that nervous energy helps them remain calm and compliant on the grooming table. A tired dog is much more likely to lean into the pampering and enjoy the process."
      },
      {
        heading: "Communicate with Your Groomer",
        text: "Open communication is key to a successful first groom. When we arrive, take a moment to discuss your dog's personality, any medical conditions, sensitive areas, or past grooming experiences with our team. If your dog is particularly anxious about having their nails clipped or their face washed, let us know. This information allows us to tailor our approach, moving slowly and using specific techniques to keep your pet comfortable."
      },
      {
        heading: "Keep Your Own Goodbyes Brief and Positive",
        text: "Dogs are incredibly intuitive and easily pick up on their owners' emotions. If you are anxious or overly emotional when handing your dog over, they will assume there is something to fear. Keep your goodbye brief, upbeat, and positive. Trust that your pet is in the hands of experienced, compassionate professionals. Once they are inside the quiet, secure environment of the Acme Grooming Co Mobile van, they will settle in for a fantastic spa experience."
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? blogContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://vibe.filesafe.space/1777144393499000111/attachments/2c9060be-13eb-4282-8f3c-7811c0f61fd5.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[900px] mx-auto px-6 space-y-10">
          {post.content.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-black text-zinc-900 tracking-tight">
                {section.heading}
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
          
          <div className="pt-10 mt-10 border-t border-gray-200">
            <Link to="/blog" className="inline-flex items-center text-primary font-bold hover:underline uppercase tracking-wider text-sm">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default BlogPost;