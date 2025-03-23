import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8d3Pt8lBsiULe3dAid19uOB1F1njlN.png"
                alt="Arista Vault"
                className="h-10 mr-3 group-hover:rotate-12 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="arista-title text-xl font-bold">ARISTA VAULT</span>
                <span className="text-xs text-muted-foreground">Smart Travel Essentials</span>
              </div>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-md">
              India's first smart luggage brand offering innovative products with cutting-edge technology for the modern
              traveler. Our mission is to make travel safer, smarter, and more convenient.
            </p>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="icon"
                aria-label="Facebook"
                className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Twitter"
                className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Instagram"
                className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="LinkedIn"
                className="rounded-full border-gold/20 text-gold hover:bg-gold/10"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/luggage" className="text-muted-foreground hover:text-gold transition-colors">
                  Smart Luggage
                </Link>
              </li>
              <li>
                <Link href="/products/wallets" className="text-muted-foreground hover:text-gold transition-colors">
                  Smart Wallets
                </Link>
              </li>
              <li>
                <Link href="/products/backpacks" className="text-muted-foreground hover:text-gold transition-colors">
                  Smart Backpacks
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-muted-foreground hover:text-gold transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products/new" className="text-muted-foreground hover:text-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Smart Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold shrink-0" />
                <span className="text-muted-foreground">info@aristavault.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Arista Vault. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                Shipping Policy
              </Link>
              <Link href="/refund" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

