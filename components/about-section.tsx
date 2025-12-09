export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <p className="text-primary font-serif text-sm md:text-base mb-4 tracking-widest uppercase">
              Sobre o Escritório
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Tradição, Experiência e Inovação
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Fundado em 2003, nosso escritório de advocacia consolidou-se como referência em excelência jurídica. Com
              mais de 50 profissionais especializados, atendemos desde startups inovadoras até grandes corporações
              multinacionais.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Nossas práticas combinam tradição jurídica sólida com tecnologia de ponta, garantindo soluções ágeis,
              inteligentes e baseadas em resultados mensuráveis. Cada cliente é tratado como parceiro estratégico em seu
              crescimento e sucesso.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-lg p-4">
                <div className="font-serif text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-xs text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="glass rounded-lg p-4">
                <div className="font-serif text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-xs text-muted-foreground">Clientes Atendidos</div>
              </div>
              <div className="glass rounded-lg p-4">
                <div className="font-serif text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs text-muted-foreground">Profissionais</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden glass">
            <img
              src="/modern-law-office-elegant-interior-professional.jpg"
              alt="Escritório de Advocacia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
