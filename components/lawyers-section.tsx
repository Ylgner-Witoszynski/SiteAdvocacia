"use client"

import { useState, useEffect, useRef } from "react"
import LawyerCard from "./lawyer-card"

const lawyers = [
  {
    id: 1,
    name: "Dr. Ricardo Martins",
    specialization: "Direito Corporativo & M&A",
    image: "/professional-lawyer-male-portrait.jpg",
    description: "20+ anos de experiência em fusões, aquisições e consultoria corporativa estratégica.",
  },
  {
    id: 2,
    name: "Dra. Fernanda Silva",
    specialization: "Direito Tributário",
    image: "/professional-lawyer-female-portrait.jpg",
    description: "Especialista em planejamento tributário complexo e estratégia fiscal para grandes corporações.",
  },
  {
    id: 3,
    name: "Dr. Paulo Oliveira",
    specialization: "Direito Civil e Imobiliário",
    image: "/professional-lawyer-male-portrait-brunette.jpg",
    description: "Especializado em direito imobiliário, contratos e litígios complexos com foco em soluções.",
  },
]

export default function LawyersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards([true, true, true])
            }, 100)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="lawyers" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">Nossa Equipe</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Advogados Renomados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance text-lg">
            Uma equipe de especialistas dedicados à excelência e à satisfação do cliente em cada caso.
          </p>
        </div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {lawyers.map((lawyer, index) => (
            <div
              key={lawyer.id}
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease-out ${index * 100}ms`,
              }}
            >
              <LawyerCard
                lawyer={lawyer}
                isHovered={hoveredId === lawyer.id}
                onHover={() => setHoveredId(lawyer.id)}
                onLeave={() => setHoveredId(null)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
