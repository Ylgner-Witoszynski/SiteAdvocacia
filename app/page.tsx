import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import LawyersSection from "@/components/lawyers-section"
import PracticeAreas from "@/components/practice-areas"
import AboutSection from "@/components/about-section"
import Highlights from "@/components/highlights"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LawyersSection />
      <PracticeAreas />
      <AboutSection />
      <Highlights />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}
