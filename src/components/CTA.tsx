import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">14 dias de teste grátis</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-background">
            Pronto para Automatizar
            <span className="block">seu Pet Shop?</span>
          </h2>
          
          <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
            Junte-se a mais de 500 pet shops que já economizam tempo e aumentam seus agendamentos com o PetBot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Começar Teste Gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="xl"
            >
              Falar com Vendas
            </Button>
          </div>
          
          <p className="text-background/50 text-sm mt-6">
            Sem cartão de crédito • Configuração em 30 minutos • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
