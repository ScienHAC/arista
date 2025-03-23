import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductShowcase from "@/components/aristaai/product-showcase"

const categories = [
  {
    name: "Smart Wallets",
    description: "RFID-blocking wallets with GPS tracking and fingerprint security",
    image: "/placeholder.svg?height=300&width=300",
    link: "/ai/products/wallets",
  },
  {
    name: "Smart Luggage",
    description: "Intelligent luggage with built-in scales, GPS tracking, and USB charging",
    image: "/placeholder.svg?height=300&width=300",
    link: "/ai/products/luggage",
  },
  {
    name: "Smart Bags",
    description: "Anti-theft backpacks and bags with hidden compartments and security features",
    image: "/placeholder.svg?height=300&width=300",
    link: "/ai/products/bags",
  },
  {
    name: "Accessories",
    description: "Travel accessories designed for security, convenience, and style",
    image: "/placeholder.svg?height=300&width=300",
    link: "/ai/products/accessories",
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-24">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Smart Travel Products</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover our premium collection of smart travel products designed to enhance your journey with security,
            convenience, and style.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Featured Product</h2>
          <ProductShowcase />
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Product Categories</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.link}
                className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{category.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{category.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-arista-orange group-hover:text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Explore
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-muted/30 p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Why Choose Arista Smart Products?</h2>
              <ul className="space-y-4">
                {[
                  "Advanced security features including GPS tracking and RFID protection",
                  "Premium materials and craftsmanship for durability and style",
                  "Innovative technology that integrates seamlessly with your travel experience",
                  "Designed by travelers, for travelers, with real-world testing",
                  "Comprehensive warranty and dedicated customer support",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-arista-orange" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 bg-gradient-to-r from-arista-orange to-arista-gold hover:from-arista-orange/90 hover:to-arista-gold/90"
                asChild
              >
                <Link href="/products">Shop All Products</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-arista-orange/10 via-arista-gold/5 to-arista-silver/10 blur-xl" />
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Smart Products Collection"
                  className="relative h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

