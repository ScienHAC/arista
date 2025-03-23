"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface NavItem {
  name: string
  href: string
  submenu?: { name: string; href: string }[]
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) onClose()
  }, [pathname, isOpen, onClose])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 md:hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-background shadow-xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-8d3Pt8lBsiULe3dAid19uOB1F1njlN.png"
                  alt="Arista Vault"
                  className="h-8 mr-2"
                />
                <span className="arista-title text-lg font-bold">ARISTA VAULT</span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-md text-base font-medium transition-colors",
                            pathname === item.href ? "bg-muted text-gold" : "text-foreground/80 hover:text-gold",
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform duration-200",
                              openSubmenu === item.name ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 border-l pl-2"
                            >
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className={cn(
                                    "flex items-center px-4 py-2 text-sm rounded-md transition-colors",
                                    pathname === subitem.href ? "text-gold" : "text-foreground/70 hover:text-gold",
                                  )}
                                  onClick={onClose}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "px-4 py-3 rounded-md text-base font-medium transition-colors",
                          pathname === item.href ? "bg-muted text-gold" : "text-foreground/80 hover:text-gold",
                        )}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between">
                <Button variant="outline" size="sm" className="w-1/2 mr-2">
                  Sign In
                </Button>
                <Button size="sm" className="w-1/2 bg-gold text-black hover:bg-gold/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

