import { 
  Clock, 
  Database, 
  Zap, 
  BarChart3, 
  Shield, 
  Smartphone,
  Sparkles,
  RefreshCw
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Nunca perca um cliente. O bot atende a qualquer hora, inclusive fins de semana e feriados.",
  },
  {
    icon: Database,
    title: "Histórico Centralizado",
    description: "Banco de dados completo com histórico de cada pet, permitindo ofertas personalizadas.",
  },
  {
    icon: Zap,
    title: "Integração Fácil",
    description: "API flexível para integrar com seu sistema de gestão, PDV e controle de estoque.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Dashboard com métricas de agendamentos, taxa de conversão e análise de recorrência.",
  },
  {
    icon: Sparkles,
    title: "Upsell Automático",
    description: "Sugere serviços adicionais como hidratação, desembaraço e transporte de forma natural.",
  },
  {
    icon: RefreshCw,
    title: "Lembretes Automáticos",
    description: "Reduz no-shows com lembretes 24h antes e mensagens de acompanhamento pós-serviço.",
  },
  {
    icon: Shield,
    title: "Dados Protegidos",
    description: "Conformidade com LGPD. Dados dos clientes criptografados e protegidos.",
  },
  {
    icon: Smartphone,
    title: "Multi-Dispositivo",
    description: "Gerencie tudo pelo celular ou computador. Painel responsivo e intuitivo.",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos que <span className="text-gradient">Transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa para automatizar e escalar seu pet shop, em uma única plataforma.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
