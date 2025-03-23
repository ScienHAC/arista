"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Menu, Search, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/use-cart"
import MobileMenu from "@/components/mobile-menu"
import { motion } from "framer-motion"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "Smart Luggage", href: "/products/luggage" },
      { name: "Smart Wallets", href: "/products/wallets" },
      { name: "Smart Backpacks", href: "/products/backpacks" },
      { name: "Accessories", href: "/products/accessories" },
    ],
  },
  {
    name: "Collections",
    href: "/collections",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="mr-3"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8d3Pt8lBsiULe3dAid19uOB1F1njlN.png"
                alt="Arista Vault"
                className="h-10 md:h-12"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="arista-title text-xl md:text-2xl font-bold">ARISTA VAULT</span>
              <span className="text-xs text-muted-foreground">Smart Travel Essentials</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors inline-flex items-center",
                  pathname === item.href ? "text-gold" : "text-foreground/80 hover:text-gold",
                )}
              >
                {item.name}
                {item.submenu && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                )}
              </Link>

              {item.submenu && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:bg-muted hover:text-gold transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          {/* <Link href="/ai">
            <Button
              variant="ghost"
              className="group relative flex items-center gap-2 px-4 py-2 
              text-black font-medium overflow-hidden transition-all duration-300
              hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 
              border border-gold/30"
              aria-label="Arista AI"
            >
              <div className="relative z-10 flex items-center gap-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold-light font-semibold">
                  AI
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-gold animate-pulse"
                >
                  <path d="M12 3a6 6 0 0 0-6 6c0 2 2 3 3 4l3 2"></path>
                  <path d="M12 3a6 6 0 0 1 6 6c0 2-2 3-3 4l-3 2"></path>
                  <line x1="9" y1="16" x2="9" y2="16.01"></line>
                  <line x1="15" y1="16" x2="15" y2="16.01"></line>
                  <path d="M12 19h.01"></path>
                </svg>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-white via-gold/10 to-white opacity-50" />

              <div className="absolute top-0 left-1/4 w-1 h-1 bg-gold rounded-full animate-ping" />
              <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-gold-dark rounded-full animate-ping" />

              <div className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-500
                  bg-gradient-to-r from-gold/20 via-gold-light/20 to-gold/20 rounded-full" />

              <div className="absolute -inset-1 group-hover:animate-pulse opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0
                  blur-sm" />
            </Button>
          </Link> */}
          <Link href="/ai">
            <Button
              variant="ghost"
              className="relative group bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black 
                border border-gold/30 shadow-[0_0_8px_rgba(212,175,55,0.5)]
                hover:shadow-[0_0_15px_rgba(212,175,55,0.8)] hover:scale-105 transition-all"
              aria-label="Arista AI"
            >
              <span className="flex items-center text-xs font-medium">
                Arista AI
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1 h-3 w-3"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </span>
              <span className="absolute inset-0 h-full w-full bg-white/20 scale-0 rounded-full group-hover:scale-100 transition-all duration-300 group-hover:animate-ripple"></span>
            </Button>
          </Link>
          <ThemeToggle />
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <Badge
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-gold text-black"
                  variant="default"
                >
                  {items.length}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div >

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navItems={navItems} />
    </header >
  )
}

