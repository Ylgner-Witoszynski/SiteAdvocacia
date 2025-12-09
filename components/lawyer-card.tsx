"use client"

interface LawyerCardProps {
  lawyer: {
    id: number
    name: string
    specialization: string
    image: string
    description: string
  }
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

export default function LawyerCard({ lawyer, isHovered, onHover, onLeave }: LawyerCardProps) {
  const handleLearnMore = () => {
    const whatsappPhone = "5511999999999" // Replace with actual phone number
    const message = `Olá! Gostaria de conhecer melhor os serviços de ${lawyer.name} (${lawyer.specialization}).`
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative glass glass-hover rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer glow-gold"
    >
      <div className="relative h-80 overflow-hidden bg-gradient-to-b from-primary/30 to-background">
        <img
          src={lawyer.image || "/placeholder.svg"}
          alt={lawyer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 filter brightness-95 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{lawyer.name}</h3>
        <div className="flex items-center gap-3 mb-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">{lawyer.specialization}</p>
          <div className="h-1 w-8 bg-primary/50 group-hover:bg-primary group-hover:w-12 transition-all duration-300"></div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{lawyer.description}</p>
          <button
            onClick={handleLearnMore}
            className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors flex items-center gap-2 group/btn"
          >
            Saiba Mais
            <span className="inline-block transition-transform group-hover/btn:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}
