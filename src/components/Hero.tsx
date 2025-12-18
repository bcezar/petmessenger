import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import ChatMockup from "./ChatMockup";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Automatize seu Pet Shop com IA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Agendamento Inteligente
              <span className="block text-gradient">via WhatsApp</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Transforme seu pet shop com nosso bot de IA que agenda banhos e tosas 24/7. 
              Seus clientes agendam pelo WhatsApp enquanto você foca no que importa: cuidar dos pets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                <MessageCircle className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Pet Shops Ativos</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">50k+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Agendamentos/Mês</div>
              </div>
              <div className="w-px h-10 sm:h-12 bg-border"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">98%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-50"></div>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
