import ParallaxHero from "@/components/aristaai/parallax-hero"
import TravelPlanner from "@/components/aristaai/travel-planner"
import ProductShowcase from "@/components/aristaai/product-showcase"
import FeaturesSection from "@/components/features-section"
import Testimonials from "@/components/aristaai/testimonials"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div>
      <ParallaxHero />

      <section id="ai-travel" className="py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">AI-Powered Travel Planning</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Let our intelligent AI assistant create the perfect travel itinerary based on your preferences and needs.
            </p>
          </div>
          <TravelPlanner />
        </div>
      </section>

      <section id="smart-products" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Premium Smart Products</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our collection of luxury smart wallets, luggage, and accessories designed for the modern
              traveler.
            </p>
          </div>
          <ProductShowcase />
        </div>
      </section>

      <FeaturesSection />

      <Testimonials />

      <CTASection />
    </div>
  )
}

