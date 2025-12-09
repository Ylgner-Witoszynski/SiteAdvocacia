"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScheduleClick = () => {
    const whatsappPhone = "5511999999999" // Update with your WhatsApp number
    const message = "Olá, gostaria de agendar uma consulta com vocês."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappPhone}?text=${encodedMessage}`, "_blank")
    setMobileOpen(false)
  }

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Advogados", href: "#lawyers" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-primary/10" : "glass"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all">
                <span className="text-primary-foreground font-serif font-bold text-sm">⚖</span>
              </div>
              <span className="font-serif font-bold text-lg text-primary group-hover:text-primary/80 transition-colors">
                LEX
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleScheduleClick}
              className="button-prestige px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 text-sm"
            >
              Agendar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-down">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleScheduleClick}
              className="w-full mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg"
            >
              Agendar
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
