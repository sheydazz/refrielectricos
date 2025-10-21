import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
