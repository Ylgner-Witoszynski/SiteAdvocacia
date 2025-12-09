"use client"

import { useEffect, useRef } from "react"
import { Shield, Clock, Users, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Proteção total de dados com criptografia de ponta a ponta. Seus documentos estão seguros conosco.",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Disponível sempre que você precisar. Equipe dedicada para resolver suas questões jurídicas.",
  },
  {
    icon: Users,
    title: "Experiência Comprovada",
    description: "Mais de 15 anos de prática com centenas de casos resolvidos com sucesso.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Inovadoras",
    description: "Estratégias modernas e criativas para resolver seus problemas legais de forma eficiente.",
  },
]

export default function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".highlight-card")
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  const handleWhatsApp = () => {
    const whatsappPhone = "5511999999999" // Replace with actual phone number
    const message = "Olá, gostaria de saber mais sobre os seus serviços jurídicos."
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="diferenciais" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">
            Por Que Nos Escolher
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Conheça o que nos torna a escolha ideal para seus assuntos jurídicos.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="highlight-card glass rounded-2xl p-8 border border-primary/20 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 group hover:scale-105"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up">
          <p className="text-muted-foreground mb-6 text-lg">Pronto para contar com nossos serviços?</p>
          <button
            onClick={handleWhatsApp}
            className="button-prestige inline-block px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 text-base"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  )
}
