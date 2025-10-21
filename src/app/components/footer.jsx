import { Snowflake, Zap, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <Snowflake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold text-center">
              <span className="text-accent">REFRIELECTRICOS</span>
            </h3>
            <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0" />
          </div>

          <p className="text-center text-primary-foreground/80 max-w-lg text-pretty text-sm sm:text-base px-4">
            Servicios profesionales de refrigeración y electricidad en todo el Atlántico
          </p>

          <div className="flex items-center gap-2 text-primary-foreground/90 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-medium">
              <span className="hidden xs:inline">Atlántico, Colombia</span>
              <span className="xs:hidden">Atlántico</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <span>Instalación</span>
            <span className="text-primary-foreground/60">•</span>
            <span>Mantenimiento</span>
            <span className="text-primary-foreground/60">•</span>
            <span>Reparación</span>
          </div>

          <div className="pt-4 sm:pt-6 border-t border-primary-foreground/20 w-full text-center text-xs sm:text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Refrielectricos. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
