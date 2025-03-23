"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/ai" className="flex items-center space-x-2">
          <motion.div
            className="relative h-10 w-10 rounded-full bg-gradient-to-r from-arista-orange via-arista-gold to-arista-silver"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">A</span>
          </motion.div>
          <motion.span
            className="text-xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Arista AI
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/ai">Home</NavLink>
          <NavLink href="/ai/travel">Travel</NavLink>
          <NavLink href="/ai/products">Smart Products</NavLink>
          <NavLink href="/ai/about">About</NavLink>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-arista-orange text-[10px] text-white">
              0
            </span>
          </Button>
          <ModeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/ai" onClick={() => setIsOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/ai/travel" onClick={() => setIsOpen(false)}>
                Travel
              </MobileNavLink>
              <MobileNavLink href="/ai/products" onClick={() => setIsOpen(false)}>
                Smart Products
              </MobileNavLink>
              <MobileNavLink href="/ai/about" onClick={() => setIsOpen(false)}>
                About
              </MobileNavLink>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="relative text-foreground/80 hover:text-foreground transition-colors">
      <span className="relative">
        {children}
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-arista-orange to-arista-gold"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </span>
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

