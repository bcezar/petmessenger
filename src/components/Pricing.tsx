import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "199",
    description: "Ideal para pet shops iniciantes",
    features: [
      "Até 100 agendamentos/mês",
      "1 número de WhatsApp",
      "Bot de agendamento básico",
      "Lembretes automáticos",
      "Suporte por email",
    ],
    popular: false,
  },
  {
    name: "Profissional",
    price: "399",
    description: "Para pet shops em crescimento",
    features: [
      "Até 500 agendamentos/mês",
      "2 números de WhatsApp",
      "Bot com upsell automático",
      "Relatórios avançados",
      "Integração com sistemas",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "799",
    description: "Para redes e franquias",
    features: [
      "Agendamentos ilimitados",
      "Múltiplas unidades",
      "Personalização completa",
      "API dedicada",
      "Gerente de conta",
      "SLA garantido",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="precos" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos que <span className="text-gradient">Cabem no Bolso</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha o plano ideal para o tamanho do seu negócio. Cancele quando quiser.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 shadow-soft border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? "border-primary shadow-glow" 
                  : "border-border/50 hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
