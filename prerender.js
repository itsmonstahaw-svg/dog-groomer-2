import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://acme-grooming.netlify.app'

const routesMeta = {
  '/': {
    title: 'Acme Grooming Co Mobile | Mobile Pet Grooming Satsuma, FL',
    description: 'Florida\'s most experienced mobile pet groomer. We come to you! Professional grooming for dogs, cats, birds & more in Satsuma, FL and surrounding areas. Call (386) 388-3540.',
  },
  '/home': {
    title: 'Acme Grooming Co Mobile | Mobile Pet Grooming Satsuma, FL',
    description: 'Florida\'s most experienced mobile pet groomer. We come to you! Professional grooming for dogs, cats, birds & more in Satsuma, FL and surrounding areas. Call (386) 388-3540.',
  },
  '/services/dematting-undercoat': {
    title: 'Dematting & Undercoat Treatment | Acme Grooming Co Mobile FL',
    description: 'Professional dematting and undercoat removal for dogs and cats across Florida. Gentle, stress-free mobile grooming at your door. Call (386) 388-3540.',
  },
  '/services/hand-scissoring': {
    title: 'Hand Scissoring & Show Cuts | Acme Grooming Co Mobile FL',
    description: 'Precision hand scissoring and breed-standard show cuts by expert mobile groomers in Florida. Book your appointment today. Call (386) 388-3540.',
  },
  '/services/full-grooming': {
    title: 'Full Grooming Package | Acme Grooming Co Mobile FL',
    description: 'Complete mobile pet grooming package including bath, blowout, haircut, nail trim & ear cleaning. Serving Florida pet owners. Call (386) 388-3540.',
  },
  '/services/bird-grooming': {
    title: 'Bird Grooming | Acme Grooming Co Mobile FL',
    description: 'Specialized mobile bird grooming — beak, nail & wing trimming for all avian species across Florida. Expert care at your door. Call (386) 388-3540.',
  },
  '/services/nail-trim-ear-cleaning': {
    title: 'Nail Trim & Ear Cleaning | Acme Grooming Co Mobile FL',
    description: 'Mobile pet nail trimming and ear cleaning services across Florida. Quick, professional, stress-free maintenance at your home. Call (386) 388-3540.',
  },
  '/services/multi-pet-grooming': {
    title: 'Multi-Pet Grooming | Acme Grooming Co Mobile FL',
    description: 'Mobile grooming for dogs, cats, birds, rabbits & horses — all in one visit. Serving multi-pet households across Florida. Call (386) 388-3540.',
  },
  '/gallery': {
    title: 'Gallery | Acme Grooming Co Mobile FL',
    description: 'See our work — before and after photos of mobile pet grooming across Florida. 5-star rated service. Call (386) 388-3540.',
  },
  '/blog': {
    title: 'Blog | Acme Grooming Co Mobile FL',
    description: 'Pet grooming tips, guides & mobile grooming news from Acme Grooming Co Mobile in Satsuma, FL.',
  },
  '/blog/complete-guide-to-professional-dog-grooming-in-satsuma-fl': {
    title: 'Complete Guide To Professional Dog Grooming In Satsuma FL | Acme Grooming Co Mobile',
    description: 'Everything Satsuma, FL pet owners need to know about professional mobile dog grooming — services, benefits & what to expect from Acme Grooming Co Mobile.',
  },
  '/blog/your-go-to-team-for-mobile-pet-grooming-in-florida': {
    title: 'Your Go-To Team For Mobile Pet Grooming In Florida | Acme Grooming Co Mobile',
    description: 'Discover why Acme Grooming Co Mobile is Florida\'s top choice for mobile pet grooming — convenience, expert care & stress-free sessions at your door.',
  },
  '/blog/why-regular-grooming-is-essential-for-your-dogs-health': {
    title: 'Why Regular Grooming Is Essential For Your Dog\'s Health | Acme Grooming Co Mobile',
    description: 'Learn how regular professional grooming benefits your dog\'s skin, coat, nails & overall health. Expert advice from Acme Grooming Co Mobile in Florida.',
  },
  '/blog/from-chaos-to-calm-mobile-grooming-that-actually-works': {
    title: 'From Chaos To Calm: Mobile Grooming That Actually Works | Acme Grooming Co Mobile',
    description: 'How mobile grooming transforms a stressful experience into a calm, positive spa day for anxious pets across Florida.',
  },
  '/blog/mobile-grooming-vs-salons-which-is-better-for-your-dog': {
    title: 'Mobile Grooming vs. Salons: Which Is Better For Your Dog? | Acme Grooming Co Mobile',
    description: 'Comparing mobile grooming and traditional salons — learn why Florida pet owners choose Acme Grooming Co Mobile for a safer, lower-stress experience.',
  },
  '/blog/preparing-your-pet-for-their-first-mobile-groom': {
    title: 'Preparing Your Pet For Their First Mobile Groom | Acme Grooming Co Mobile',
    description: 'Tips for Florida pet owners to help their dog or cat have a smooth, stress-free first mobile grooming appointment with Acme Grooming Co Mobile.',
  },
  '/service-areas/palatka-fl': {
    title: 'Mobile Pet Grooming Palatka FL | Acme Grooming Co Mobile',
    description: 'Professional mobile pet grooming in Palatka, FL. We come to your door — no stress, no salon. 5-star rated service. Call (386) 388-3540.',
  },
  '/service-areas/gainesville-fl': {
    title: 'Mobile Pet Grooming Gainesville FL | Acme Grooming Co Mobile',
    description: 'Expert mobile pet grooming in Gainesville, FL. Full-service salon comes to you. Dogs, cats, birds & more. Call (386) 388-3540.',
  },
  '/service-areas/daytona-beach-fl': {
    title: 'Mobile Pet Grooming Daytona Beach FL | Acme Grooming Co Mobile',
    description: 'Professional mobile pet grooming in Daytona Beach, FL. Stress-free, one-on-one grooming at your home. Call (386) 388-3540.',
  },
  '/service-areas/jacksonville-fl': {
    title: 'Mobile Pet Grooming Jacksonville FL | Acme Grooming Co Mobile',
    description: 'Top-rated mobile pet grooming in Jacksonville, FL. Full service salon van comes to your door. Call (386) 388-3540.',
  },
  '/service-areas/crescent-city-fl': {
    title: 'Mobile Pet Grooming Crescent City FL | Acme Grooming Co Mobile',
    description: 'Professional mobile pet grooming in Crescent City, FL. Convenient, stress-free grooming at your home in Putnam County. Call (386) 388-3540.',
  },
  '/service-areas/st-augustine-fl': {
    title: 'Mobile Pet Grooming St. Augustine FL | Acme Grooming Co Mobile',
    description: 'Expert mobile pet grooming in St. Augustine, FL. We come to your home — no busy salon, no stress. Call (386) 388-3540.',
  },
  '/service-areas/ocala-fl': {
    title: 'Mobile Pet Grooming Ocala FL | Acme Grooming Co Mobile',
    description: 'Professional mobile pet grooming in Ocala, FL. Full grooming services for dogs, cats, birds & more at your property. Call (386) 388-3540.',
  },
  '/service-areas/interlachen-fl': {
    title: 'Mobile Pet Grooming Interlachen FL | Acme Grooming Co Mobile',
    description: 'Mobile pet grooming serving Interlachen, FL. We bring city-quality grooming to your rural or lakeside home. Call (386) 388-3540.',
  },
  '/service-areas/orange-park-fl': {
    title: 'Mobile Pet Grooming Orange Park FL | Acme Grooming Co Mobile',
    description: 'Professional mobile pet grooming in Orange Park, FL. Convenient, one-on-one grooming at your door in Clay County. Call (386) 388-3540.',
  },
  '/contact': {
    title: 'Contact Us | Acme Grooming Co Mobile FL',
    description: 'Contact Acme Grooming Co Mobile in Satsuma, FL. Call (386) 388-3540 or send a message to book your mobile pet grooming appointment.',
  },
  '/review': {
    title: 'Leave A Review | Acme Grooming Co Mobile FL',
    description: 'Enjoyed your mobile grooming experience? Leave a review for Acme Grooming Co Mobile and help other Florida pet owners find us.',
  },
  '/get-your-discount': {
    title: 'Get Your Discount | Acme Grooming Co Mobile FL',
    description: 'Claim your special discount on mobile pet grooming services from Acme Grooming Co Mobile in Florida. Limited time offer.',
  },
  '/client-submit': {
    title: 'Client Submission | Acme Grooming Co Mobile FL',
    description: 'Submit your service request to Acme Grooming Co Mobile in Satsuma, FL.',
  },
  '/thank-you': {
    title: 'Thank You | Acme Grooming Co Mobile FL',
    description: 'Thank you for contacting Acme Grooming Co Mobile. We\'ll be in touch shortly to confirm your appointment.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Acme Grooming Co Mobile FL',
    description: 'Privacy policy for Acme Grooming Co Mobile in Satsuma, FL.',
  },
  '/terms': {
    title: 'Terms & Conditions | Acme Grooming Co Mobile FL',
    description: 'Terms and conditions for Acme Grooming Co Mobile in Satsuma, FL.',
  },
}

const DEFAULT_META = {
  title: 'Acme Grooming Co Mobile | Mobile Pet Grooming FL',
  description: 'Florida\'s most experienced mobile pet groomer. Professional grooming at your door. Call (386) 388-3540.',
}

const routes = Object.keys(routesMeta)

async function prerender() {
  const templatePath = path.resolve(__dirname, 'dist/client/index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  const { render } = await import('./dist/server/entry-server.js')

  for (const route of routes) {
    const meta = routesMeta[route] || DEFAULT_META
    const canonical = `${BASE_URL}${route === '/' ? '' : route}`

    const appHtml = render(route)
    let html = template
      .replace('<!--app-html-->', appHtml)
      .replace(/<!--page-title-->/g, meta.title)
      .replace(/<!--page-description-->/g, meta.description)
      .replace(/<!--page-canonical-->/g, canonical)

    const routePath = route === '/' ? '/index.html' : `${route}/index.html`
    const filePath = path.resolve(__dirname, `dist/client${routePath}`)

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, html)
    console.log(`✓ Pre-rendered: ${route}`)
  }

  console.log('\n✅ Static site generation complete!')
  console.log(`   ${routes.length} pages written to dist/`)
}

prerender().catch((err) => {
  console.error('SSG failed:', err)
  process.exit(1)
})
