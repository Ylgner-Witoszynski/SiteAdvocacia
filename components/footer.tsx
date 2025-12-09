"use client"

import type React from "react"
import { useState } from "react"
import { Facebook, Linkedin, Instagram, Twitter, X } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [openModal, setOpenModal] = useState<string | null>(null)

  const handlePolicyClick = (e: React.MouseEvent, policyType: string) => {
    e.preventDefault()
    setOpenModal(policyType)
  }

  const closeModal = () => {
    setOpenModal(null)
  }

  return (
    <>
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-bold text-sm">⚖</span>
                </div>
                <span className="font-serif font-bold text-lg text-primary">LEX</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Excelência em advocacia, profissionalismo garantido e resultados tangíveis.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#lawyers" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Advogados
                  </a>
                </li>
                <li>
                  <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Sobre
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Serviços</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Direito Corporativo
                  </a>
                </li>
                <li>
                  <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Direito Tributário
                  </a>
                </li>
                <li>
                  <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Direito Imobiliário
                  </a>
                </li>
                <li>
                  <a href="#areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Compliance Legal
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <a href="tel:+5511300000" className="hover:text-primary transition-colors">
                    (11) 3000-0000
                  </a>
                </p>
                <p>
                  <a href="mailto:contato@lexadvocat.com.br" className="hover:text-primary transition-colors">
                    contato@lexadvocat.com.br
                  </a>
                </p>
                <p>
                  Av. Paulista, 1000
                  <br />
                  São Paulo - SP
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8"></div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} LEX Advocacia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <button
                onClick={(e) => handlePolicyClick(e, "privacy")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Política de Privacidade
              </button>
              <button
                onClick={(e) => handlePolicyClick(e, "terms")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Termos de Serviço
              </button>
              <button
                onClick={(e) => handlePolicyClick(e, "cookies")}
                className="hover:text-primary transition-colors cursor-pointer"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </footer>

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-secondary border border-primary/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-scale-in">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-background to-secondary border-b border-primary/20 px-8 py-8 flex justify-between items-start sticky top-0 z-10">
              <div>
                <h3 className="font-serif text-3xl font-bold text-foreground mb-2">
                  {openModal === "privacy"
                    ? "Política de Privacidade"
                    : openModal === "terms"
                      ? "Termos de Serviço"
                      : "Política de Cookies"}
                </h3>
                <p className="text-sm text-muted-foreground">Última atualização: Novembro 2024</p>
              </div>
              <button onClick={closeModal} className="text-muted-foreground hover:text-primary transition-colors p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto flex-1 px-8 py-8 text-foreground space-y-6 bg-background">
              {openModal === "privacy" && (
                <>
                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">1. Coleta de Dados</h4>
                    <p className="leading-relaxed text-foreground">
                      Coletamos informações que você nos fornece diretamente, como seu nome, email, telefone e dados de
                      contato quando você preenche formulários em nosso site. Também coletamos dados de forma
                      automatizada, como endereço IP e informações sobre seu dispositivo.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">2. Uso de Dados</h4>
                    <p className="leading-relaxed text-foreground">
                      Seus dados são usados para: responder suas consultas, enviar informações sobre nossos serviços,
                      melhorar nossa plataforma e cumprir obrigações legais. Nunca usaremos seus dados para fins não
                      autorizados.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">3. Proteção de Dados</h4>
                    <p className="leading-relaxed text-foreground">
                      Implementamos medidas de segurança apropriadas, incluindo criptografia SSL, firewalls e
                      autenticação de múltiplos fatores para proteger suas informações pessoais contra acesso não
                      autorizado.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">4. Compartilhamento de Dados</h4>
                    <p className="leading-relaxed text-foreground">
                      Não compartilhamos suas informações pessoais com terceiros sem seu consentimento explícito, exceto
                      quando exigido por lei. Nossos parceiros estão sujeitos a obrigações de confidencialidade.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">5. Seus Direitos</h4>
                    <p className="leading-relaxed text-foreground">
                      Você tem o direito de acessar, corrigir ou deletar seus dados pessoais. Entre em contato através
                      do email: contato@lexadvocat.com.br
                    </p>
                  </section>
                </>
              )}

              {openModal === "terms" && (
                <>
                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">1. Uso Autorizado</h4>
                    <p className="leading-relaxed text-foreground">
                      Este site é fornecido para seu uso pessoal e informativo. Você concorda em não usar este site para
                      qualquer fim ilegal, prejudicial ou não autorizado, incluindo spam, phishing ou qualquer atividade
                      maliciosa.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">2. Propriedade Intelectual</h4>
                    <p className="leading-relaxed text-foreground">
                      Todo o conteúdo deste site, incluindo texto, gráficos, logos, imagens e código, é propriedade da
                      LEX Advocacia ou seus fornecedores de conteúdo e está protegido por leis de propriedade
                      intelectual.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">3. Limitação de Responsabilidade</h4>
                    <p className="leading-relaxed text-foreground">
                      A LEX Advocacia não será responsável por danos indiretos, incidentais ou consequentes decorrentes
                      do uso ou da incapacidade de usar este site. O conteúdo é fornecido "no estado em que se
                      encontra".
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">4. Links Externos</h4>
                    <p className="leading-relaxed text-foreground">
                      Nosso site pode conter links para sites externos. Não somos responsáveis pelo conteúdo, precisão
                      ou práticas de segurança de sites de terceiros. Use esses links por sua conta e risco.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">5. Modificações</h4>
                    <p className="leading-relaxed text-foreground">
                      Nos reservamos o direito de modificar estes termos a qualquer momento. Mudanças significativas
                      serão notificadas em nosso site. O uso continuado implica aceitação dos termos modificados.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">6. Lei Aplicável</h4>
                    <p className="leading-relaxed text-foreground">
                      Estes termos são regidos pelas leis da República Federativa do Brasil e devem ser interpretados de
                      acordo com as leis brasileiras.
                    </p>
                  </section>
                </>
              )}

              {openModal === "cookies" && (
                <>
                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">1. O que são Cookies?</h4>
                    <p className="leading-relaxed text-foreground">
                      Cookies são pequenos arquivos de texto armazenados em seu navegador que ajudam a melhorar sua
                      experiência de navegação. Eles permitem que o site se lembre de suas preferências e atividades.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">2. Tipos de Cookies Utilizados</h4>
                    <div className="space-y-3">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="font-semibold text-foreground mb-2">Cookies Essenciais</p>
                        <p className="text-sm text-foreground">
                          Necessários para o funcionamento básico do site e segurança.
                        </p>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="font-semibold text-foreground mb-2">Cookies Analíticos</p>
                        <p className="text-sm text-foreground">
                          Usados para entender como você interage com nosso site e melhorar a experiência.
                        </p>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="font-semibold text-foreground mb-2">Cookies de Preferência</p>
                        <p className="text-sm text-foreground">
                          Armazenam suas preferências de tema e configurações personalizadas.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">3. Controle de Cookies</h4>
                    <p className="leading-relaxed text-foreground">
                      Você pode controlar os cookies através das configurações do seu navegador. A maioria dos
                      navegadores permite que você recuse cookies ou receba um alerta quando um cookie está sendo
                      enviado. Desabilitar cookies pode afetar a funcionalidade do site.
                    </p>
                  </section>

                  <section>
                    <h4 className="font-serif text-xl font-bold text-primary mb-3">4. Consentimento</h4>
                    <p className="leading-relaxed text-foreground">
                      Ao continuar navegando em nosso site após visualizar este aviso, você concorda com o uso de
                      cookies conforme descrito nesta política. Você pode retirar seu consentimento a qualquer momento.
                    </p>
                  </section>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-primary/20 px-8 py-6 flex justify-end bg-background">
              <button
                onClick={closeModal}
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
