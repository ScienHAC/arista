import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-gradient">Arista AI</h3>
            <p className="text-sm text-muted-foreground">
              Futuristic AI-powered platform for travel planning and smart product recommendations.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-foreground/70 hover:text-arista-orange transition-colors">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-arista-orange transition-colors">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-arista-orange transition-colors">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/70 hover:text-arista-orange transition-colors">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ai" className="text-foreground/70 hover:text-arista-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ai/travel" className="text-foreground/70 hover:text-arista-orange transition-colors">
                  Travel Planning
                </Link>
              </li>
              <li>
                <Link href="/ai/products" className="text-foreground/70 hover:text-arista-orange transition-colors">
                  Smart Products
                </Link>
              </li>
              <li>
                <Link href="/ai/about" className="text-foreground/70 hover:text-arista-orange transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ai/products/wallets"
                  className="text-foreground/70 hover:text-arista-orange transition-colors"
                >
                  Smart Wallets
                </Link>
              </li>
              <li>
                <Link
                  href="/ai/products/luggage"
                  className="text-foreground/70 hover:text-arista-orange transition-colors"
                >
                  Smart Luggage
                </Link>
              </li>
              <li>
                <Link href="/ai/products/bags" className="text-foreground/70 hover:text-arista-orange transition-colors">
                  Smart Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/ai/products/accessories"
                  className="text-foreground/70 hover:text-arista-orange transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 AI Boulevard</p>
              <p>Tech City, TC 12345</p>
              <p className="mt-2">Email: info@aristaai.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Arista AI. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/ai/privacy" className="text-foreground/70 hover:text-arista-orange transition-colors">
              Privacy Policy
            </Link>{" "}
            &bull;{" "}
            <Link href="/ai/terms" className="text-foreground/70 hover:text-arista-orange transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

