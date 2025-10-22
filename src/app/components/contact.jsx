import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-15" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-balance leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-2">
              Estamos disponibles para atender tus necesidades
            </p>
            <div className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="hidden xs:inline">Atlántico, Colombia</span>
              <span className="xs:hidden">Atlántico</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <Card className="hover-lift hover-glow group relative overflow-hidden shadow-elegant bg-white/80 backdrop-blur-sm animate-slide-in-left">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">Brayan Merlano</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 relative z-10">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  312 2140141
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button className="w-full gradient-accent hover:shadow-elegant-lg text-accent-foreground text-sm sm:text-base transition-all duration-300 hover:scale-105" asChild>
                    <a href="tel:3122140141">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar Ahora
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-sm sm:text-base transition-all duration-300" asChild>
                    <a href="https://api.whatsapp.com/send?phone=573122140141" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift hover-glow group relative overflow-hidden shadow-elegant bg-white/80 backdrop-blur-sm animate-slide-in-right">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              <CardHeader className="pb-3 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">Brandon Aponte</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 relative z-10">
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  310 8219095
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button variant="outline" className="w-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-sm sm:text-base transition-all duration-300" asChild>
                    <a href="https://api.whatsapp.com/send?phone=573108219095" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-4 sm:mt-6 bg-gradient-to-r from-muted/60 to-muted/40 backdrop-blur-sm shadow-elegant hover:shadow-elegant-lg transition-all duration-300 animate-slide-up">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Email</span>
              </div>
              <a 
                href="mailto:refrielectricosbarranquila@gmail.com" 
                className="text-base sm:text-lg text-primary hover:text-accent transition-colors duration-300 break-all hover:underline"
              >
             refrielectricosbarranquila@gmail.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
