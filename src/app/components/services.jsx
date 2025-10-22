"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { AirVent, Wrench, Wind, Cable, Lightbulb, ShieldCheck, Blinds, Tv, Armchair, Check } from "lucide-react"

const services = [
  {
    id: "instalacion-ac",
    category: "Refrigeración",
    title: "Instalación de Aires Acondicionado",
    description: "Instalación profesional de sistemas de aire acondicionado residencial y comercial",
    icon: <AirVent className="w-8 h-8" />,
  },
  {
    id: "mantenimiento",
    category: "Refrigeración",
    title: "Mantenimiento Preventivo y Correctivo",
    description: "Servicio completo de mantenimiento para prolongar la vida útil de su equipo",
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: "fugas-gas",
    category: "Refrigeración",
    title: "Fugas, Inyección de Gas, Ducterías",
    description: "Detección y reparación de fugas, recarga de gas refrigerante y mantenimiento de ductos",
    icon: <Wind className="w-8 h-8" />,
  },
  {
    id: "tableros",
    category: "Electricidad",
    title: "Instalación de Tableros Eléctricos",
    description: "Tableros monofásicos, bifásicos y trifásicos para uso residencial y comercial",
    icon: <Cable className="w-8 h-8" />,
  },
  {
    id: "puesta-tierra",
    category: "Electricidad",
    title: "Sistema Puesta a Tierra",
    description: "Instalación de sistemas de puesta a tierra para protección eléctrica",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: "circuitos",
    category: "Electricidad",
    title: "Instalación de Circuitos Eléctricos",
    description: "Diseño e instalación de circuitos eléctricos seguros y eficientes",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: "persianas",
    category: "Instalación Varia",
    title: "Instalación de Persianas",
    description: "Instalación profesional de persianas y cortinas para su hogar u oficina",
    icon: <Blinds className="w-8 h-8" />,
  },
  {
    id: "bases-tv",
    category: "Instalación Varia",
    title: "Instalación de Bases para Televisor",
    description: "Montaje seguro de soportes y bases para televisores en pared",
    icon: <Tv className="w-8 h-8" />,
  },
  {
    id: "muebles",
    category: "Instalación Varia",
    title: "Instalación de Todo Tipo de Muebles",
    description: "Armado e instalación de muebles y repisas para su espacio",
    icon: <Armchair className="w-8 h-8" />,
  },
]

export function Services() {
  const [selectedServices, setSelectedServices] = useState([])
  const [filter, setFilter] = useState("Todos")
  const [isInContactSection, setIsInContactSection] = useState(false)

  const categories = ["Todos", "Refrigeración", "Electricidad", "Instalación Varia"]

  const filteredServices = filter === "Todos" ? services : services.filter((s) => s.category === filter)

  // Detectar cuando el usuario está en la sección de contacto
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contacto')
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setIsInContactSection(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar estado inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleRequestServices = () => {
    if (selectedServices.length === 0) {
      alert("Por favor selecciona al menos un servicio")
      return
    }

    const selectedServiceNames = services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.title)
      .join("\n• ")

    // Crear mensaje personalizado para WhatsApp
    const message = `¡Hola! Me interesan los siguientes servicios:\n\n• ${selectedServiceNames}\n\nPor favor, contáctame para más información.`
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message)
    
    // Número de WhatsApp: 57 312 2140141
    const whatsappNumber = "573122140141"
    
    // Crear URL de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestros Servicios Profesionales
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-2">
            <span className="font-semibold text-primary">Haz clic en los servicios</span> que necesitas y te contactaremos de inmediato
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Los servicios son seleccionables
          </div>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8 px-2 animate-slide-up">
          {categories.map((category, index) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 hover:scale-105 ${
                filter === category 
                  ? "gradient-accent text-white shadow-elegant hover:shadow-elegant-lg pulse-glow" 
                  : "bg-white/80 backdrop-blur-sm border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-primary/30 hover:text-primary shadow-elegant hover:shadow-elegant-lg"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {filteredServices.map((service, index) => {
            const isSelected = selectedServices.includes(service.id)

            return (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover-lift hover-glow group relative overflow-hidden ${
                  isSelected 
                    ? "ring-2 ring-primary shadow-elegant-lg bg-gradient-to-br from-primary/5 to-accent/5" 
                    : "shadow-elegant bg-white/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 hover:ring-1 hover:ring-primary/30"
                }`}
                onClick={() => toggleService(service.id)}
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationName: 'slideUp',
                  animationDuration: '0.4s',
                  animationTimingFunction: 'ease-out',
                  animationFillMode: 'forwards'
                }}
              >
                {/* Efecto de brillo en hover - optimizado para móviles */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2.5 sm:p-3 rounded-lg transition-all duration-300 ${
                      isSelected 
                        ? "gradient-primary text-white shadow-elegant" 
                        : "bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/10 group-hover:to-accent/10"
                    }`}>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                    </div>
                    {isSelected ? (
                      <div className="gradient-accent text-white rounded-full p-1 shadow-elegant animate-fade-in">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-primary/30 group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-300 flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary/40 rounded-full group-hover:bg-primary/60 transition-colors duration-300"></div>
                      </div>
                    )}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`w-fit mb-2 text-xs transition-all duration-300 ${
                      isSelected 
                        ? "bg-primary/20 text-primary border-primary/30" 
                        : "bg-muted/50 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30"
                    }`}
                  >
                    {service.category}
                  </Badge>
                  <CardTitle className="text-lg sm:text-xl text-balance leading-tight transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-sm sm:text-base text-pretty leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedServices.length === 0 && (
          <div className="text-center py-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Haz clic en cualquier servicio para seleccionarlo
            </div>
          </div>
        )}

        {selectedServices.length > 0 && !isInContactSection && (
          <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 right-4 sm:right-auto z-40 animate-fade-in">
            <Card className="shadow-elegant-lg border-2 border-primary/20 bg-white/95 backdrop-blur-sm hover:shadow-elegant-lg transition-all duration-300">
              <CardContent className="p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                  <div className="text-xs sm:text-sm font-medium text-center sm:text-left bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {selectedServices.length}{" "}
                    {selectedServices.length === 1 ? "servicio seleccionado" : "servicios seleccionados"}
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button 
                      onClick={handleRequestServices} 
                      className="gradient-accent hover:shadow-elegant-lg text-accent-foreground text-xs sm:text-sm px-3 sm:px-4 py-2 flex-1 sm:flex-none transition-all duration-300 hover:scale-105"
                    >
                      Solicitar Servicios
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedServices([])}
                      className="text-xs sm:text-sm px-3 sm:px-4 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      Limpiar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
