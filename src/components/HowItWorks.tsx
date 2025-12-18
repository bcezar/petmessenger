import { MessageCircle, Dog, Calendar, Bell } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Cliente Inicia a Conversa",
    description: "O cliente envia uma mensagem para o WhatsApp do seu pet shop. O bot responde instantaneamente, 24 horas por dia.",
    color: "bg-whatsapp",
  },
  {
    icon: Dog,
    title: "Coleta de Dados do Pet",
    description: "O bot coleta informações essenciais: raça, porte, nome do pet e dados do tutor de forma amigável e natural.",
    color: "bg-primary",
  },
  {
    icon: Calendar,
    title: "Escolha do Serviço e Horário",
    description: "Apresenta os serviços disponíveis e verifica a agenda em tempo real, sugerindo horários alternativos se necessário.",
    color: "bg-secondary",
  },
  {
    icon: Bell,
    title: "Confirmação e Lembrete",
    description: "Envia confirmação detalhada e lembrete automático 24h antes, reduzindo faltas e otimizando sua agenda.",
    color: "bg-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Processo simples e automatizado que transforma a experiência de agendamento do seu pet shop.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
              )}
              <div className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 group-hover:-translate-y-2 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-5xl font-bold text-muted/50">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
