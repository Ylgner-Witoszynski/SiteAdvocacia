"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    const whatsappPhone = "5511999999999" // Replace with actual phone number
    const message = "Olá, gostaria de agendar uma consulta gratuita com vocês."
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleConhecaTime = () => {
    const element = document.getElementById("advogados")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative w-full pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url(/lady-justice-courthouse-elegant-legal-abstract.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${offsetY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px]">
        <div className="text-center max-w-3xl animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-4 tracking-widest uppercase animate-fade-in-down">
            Excelência em Advocacia
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance text-foreground leading-tight">
            Justiça e
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/80 mt-2">
              Profissionalismo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Mais de 20 anos de experiência em direito corporativo, tributário e civil. Confiança, expertise e resultados
            tangíveis para seus desafios jurídicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsApp}
              className="button-prestige px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-base md:text-lg"
            >
              Fale Conosco
            </button>
            <button
              onClick={handleConhecaTime}
              className="button-prestige px-8 py-4 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-base md:text-lg"
            >
              Conheça Nosso Time
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float-up">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
