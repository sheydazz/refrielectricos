"use client"

import { Button } from "./ui/button"
import { Snowflake, Zap } from "lucide-react"
import Link from "next/link"
export function Hero() {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground min-h-screen flex items-center">
      {/* Imagen de fondo usando elemento img */}
      <img 
        src="/assets/abstract-technical-pattern.jpg" 
        alt="Patrón técnico de fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-10"
      />
      
      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-primary/20 z-20" />
      
      {/* Elementos decorativos adicionales */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl opacity-30 z-15" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-20 z-15" />

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 animate-fade-in">
            <Snowflake className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 animate-pulse" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-accent block sm:inline bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                REFIRELECTRICOS
              </span>
            </h1>
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 animate-pulse" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-balance leading-tight px-2 animate-slide-up">
            Servicios Profesionales a la Puerta de tu Casa
          </p>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed px-4 animate-slide-up">
            Instalación, mantenimiento y reparación de sistemas de refrigeración y electricidad. Expertos en aires
            acondicionados, sistemas eléctricos y más.
          </p>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-foreground/10 rounded-full text-xs sm:text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:w-4 sm:h-4"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="hidden xs:inline">Barranquilla, Colombia</span>
            <span className="xs:hidden">Barranquilla</span>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 animate-slide-up">
            <Button
              size="lg"
              onClick={scrollToServices}
              className="gradient-accent hover:shadow-elegant-lg text-accent-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl w-full xs:w-auto transition-all duration-300 hover:scale-105 pulse-glow"
            >
              Ver Servicios
            </Button>
            <Link href="#contacto" className="w-full xs:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full xs:w-auto hover:shadow-elegant-lg transition-all duration-300 hover:scale-105"
              >
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
