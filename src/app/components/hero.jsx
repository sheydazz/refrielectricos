"use client"

import { Button } from "./ui/button"
import { Snowflake, Zap, Wrench, Shield, Clock, Phone, Armchair } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export function Hero() {
  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white min-h-screen flex items-center">
      {/* Imagen de fondo */}
      <img
        src="/assets/abstract-technical-pattern.jpg"
        alt="Patrón técnico de fondo"
        className="absolute inset-0 w-full h-full object-cover opacity-15 z-10"
      />

      {/* Overlay para mejorar contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-800/30 to-slate-900/50 z-20" />

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl opacity-40 z-15 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl opacity-30 z-15 animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl opacity-50 z-15 animate-bounce" />

      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Logo y título principal */}
          <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Logo */}
            <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-4 sm:p-6 border border-white/20">
                  <Image
                    src="/assets/logo.png"
                    alt="REFRIELECTRICOS Logo"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                  />
                </div>
              </div>
            </div>

            {/* Título con colores personalizados */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight animate-fade-in">
                <span className="block sm:inline">
                  <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                    REFRI
                  </span>
                  <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    ELECTRICOS
                  </span>
                </span>
              </h1>

              {/* Subtítulo con iconos */}
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl font-semibold animate-slide-up">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 animate-pulse" />
                  <span className="text-blue-300">Refrigeración</span>
                </div>
                <div className="hidden sm:block text-white/50">•</div>
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400 animate-pulse" />
                  <span className="text-orange-300">Electricidad</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Armchair className="w-6 h-6 sm:w-7 sm:h-7 text-green-400 animate-pulse" />
              <span className="text-green-300">Instalación Varia</span>
            </div>

            {/* Descripción principal */}
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 text-balance leading-tight px-2 animate-slide-up">
              Servicios profesionales a la puerta de su casa
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto text-pretty leading-relaxed px-4 animate-slide-up">
              Instalación, mantenimiento y reparación de sistemas de refrigeración y electricidad. Expertos en aires
              acondicionados, sistemas eléctricos y más en todo el Atlántico, Barranquilla, Soledad y sus alrededores.
            </p>

            {/* Ubicación */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm sm:text-base font-medium border border-white/20 animate-slide-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-white">Atlántico, Colombia</span>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-row gap-4 justify-center pt-6 sm:pt-8 px-4 animate-slide-up">
              <Button
                size="md"
                onClick={scrollToServices}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm px-6 py-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 border-0 flex items-center justify-center"
              >
                <Wrench className="w-4 h-4 mr-2" />
                Ver Servicios
              </Button>
              <Link href="#contacto">
                <Button
                  size="md"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-sm px-6 py-3 hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
