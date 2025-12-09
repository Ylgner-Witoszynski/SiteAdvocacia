const areas = [
  {
    icon: "📊",
    title: "Direito Corporativo",
    description: "Consultoria estratégica, fusões, aquisições e governança corporativa.",
  },
  {
    icon: "💰",
    title: "Direito Tributário",
    description: "Planejamento tributário avançado, compliance fiscal e litigância tributária.",
  },
  {
    icon: "🏠",
    title: "Direito Imobiliário",
    description: "Transações imobiliárias, contratos comerciais e resolução de conflitos.",
  },
  {
    icon: "⚖️",
    title: "Direito Civil",
    description: "Litígios complexos, contratos e proteção de patrimônio pessoal.",
  },
  {
    icon: "🤝",
    title: "Direito Comercial",
    description: "Contratos comerciais, parcerias estratégicas e negociações complexas.",
  },
  {
    icon: "📋",
    title: "Compliance Legal",
    description: "Auditoria legal, conformidade regulatória e governança corporativa.",
  },
  {
    icon: "📱",
    title: "Direito Digital",
    description: "Proteção de dados, direitos autorais digitais e contratos eletrônicos.",
  },
  {
    icon: "👨‍⚖️",
    title: "Direito Trabalhista",
    description: "Reclamações trabalhistas, contratos de emprego e negociações sindicais.",
  },
  {
    icon: "💍",
    title: "Direito Familiar",
    description: "Divorciados, heranças, guarda de menores e planejamento sucessório.",
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">
            Áreas de Atuação
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Especialidades Jurídicas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cobertura completa nas principais áreas do direito com expertise reconhecida.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-xl p-6 md:p-8 transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-primary to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
