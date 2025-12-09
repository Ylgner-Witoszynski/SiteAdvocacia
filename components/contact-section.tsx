"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappPhone = "5511999999999" // Replace with actual WhatsApp number
    const message = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`

    // Show success message
    setSubmitted(true)

    // Redirect to WhatsApp after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <p className="text-primary font-serif text-sm md:text-base mb-2 tracking-widest uppercase">Contato</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">Entre em Contato</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Telefone</p>
                  <p className="text-muted-foreground">(11) 3000-0000</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <p className="text-muted-foreground">contato@lexadvocat.com.br</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Endereço</p>
                  <p className="text-muted-foreground">
                    Av. Paulista, 1000
                    <br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">WhatsApp</p>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 glass rounded-xl p-6">
              <p className="font-medium text-foreground mb-3">Horário de Atendimento</p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Segunda a Sexta: 9h - 18h</p>
                <p>Sábado e Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="corporate">Direito Corporativo</option>
                    <option value="tax">Direito Tributário</option>
                    <option value="real-estate">Direito Imobiliário</option>
                    <option value="civil">Direito Civil</option>
                    <option value="other">Outro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-foreground placeholder-muted-foreground border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos sobre seu caso..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Enviar via WhatsApp
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="p-4 rounded-lg bg-primary/20 border border-primary text-primary text-sm text-center font-medium animate-fade-in-up">
                    ✓ Mensagem preparada! Redirecionando para WhatsApp...
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
