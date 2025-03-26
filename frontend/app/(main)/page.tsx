import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import FeaturedProducts from "@/components/featured-products"
import FeaturedProduct from "@/components/featured-product"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Newsletter from "@/components/newsletter"
import CTASection from "@/components/cta-section"
import AnimatedCompanyLogos from "@/components/animated-company-logos"
import Shopbycategories from "@/components/shopbycategories"
import ProductShowcase from "@/components/product-showcase"
import { showcaseProducts } from "@/data/products"
import { SpecialOffers } from "@/components/SpecialOffer"
import { WhyChooseUs } from "@/components/whychooseus"
import FeatureBanner from "@/components/featureBanner"
import AristaChatbot from "@/components/chatbot/arista-chatbot"
// Featured product data
const featuredProduct1 = {
  id: 101,
  name: "Smart Luggage with GPS Tracking",
  description:
    "Our advanced smart luggage helps you track your belongings in real-time. The AI provides instant notifications and location updates to ensure your luggage is always secure and within reach.",
  price: 29999,
  rating: 4.9,
  reviewCount: 128,
  image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?q=80&w=1000&auto=format&fit=crop",
}

const featuredProduct2 = {
  id: 102,
  name: "RFID-Blocking Smart Wallet",
  description:
    "Protect your personal information with our RFID-blocking smart wallet. Featuring Bluetooth tracking and sleek design, it combines security with style for the modern traveler.",
  price: 5999,
  rating: 4.8,
  reviewCount: 96,
  image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection />

      <div className="w-full space-y-8 md:space-y-16 py-8 md:py-16">
        <Shopbycategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <FeaturedProduct product={featuredProduct1} />
        <FeaturedProduct product={featuredProduct2} reversed={true} />
        {/* Product Showcase Sections */}
        {showcaseProducts.map((product, index) => (
          <ProductShowcase
            key={product.id}
            badge={product.badge}
            title={product.title}
            description={product.description}
            rating={product.rating}
            reviews={product.reviews}
            price={product.price}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            reversed={index % 2 !== 0}
          />
        ))}
        <FeatureBanner
          title="Travel Smarter, Not Harder"
          description="Our smart luggage combines cutting-edge technology with elegant design to make your travels seamless and stress-free."
          image="/assets/banners-jarviz.jpg?height=800&width=1600&text=Smart+Travel"
          buttonText="Explore Smart Luggage"
          buttonLink="/categories/luggage" />
        <SpecialOffers />
        <AnimatedCompanyLogos />
        <FeaturesSection />
        <TestimonialCarousel />
        <CTASection />
        <Newsletter />
        <AristaChatbot />
      </div>
    </main>
  )
}