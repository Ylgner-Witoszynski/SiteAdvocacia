const testimonials = [
  {
    text: "O escritório forneceu consultoria estratégica excepcional para nossa fusão. Resultado impecável com timing perfeito.",
    author: "Carlos Henrique",
    company: "CEO, Tech Ventures Brasil",
    rating: 5,
  },
  {
    text: "Profissionais altamente qualificados, respeitosos com prazos e resultado além das expectativas em planejamento tributário.",
    author: "Marina Oliveira",
    company: "CFO, Industries Corp",
    rating: 5,
  },
  {
    text: "Resolveram nosso litígios de forma estratégica, economizando tempo e recursos. Recomendo fortemente.",
    author: "Roberto Silva",
    company: "Director, Imobiliário Prime",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">Depoimentos</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Que Dizem Nossos Clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass glass-hover rounded-xl p-8 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(null)
                  .map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div>
                <p className="font-serif font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
