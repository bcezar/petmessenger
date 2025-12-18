import { Button } from "@/components/ui/button";
import { MessageCircle, Target, Heart, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Simplificar a gestão de pet shops através da tecnologia, permitindo que você foque no que realmente importa: cuidar dos pets."
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Compromisso com a excelência, inovação constante e paixão por ajudar negócios pet a crescerem."
    },
    {
      icon: Zap,
      title: "Visão",
      description: "Ser a principal plataforma de automação para pet shops no Brasil, conectando tutores e estabelecimentos de forma inteligente."
    }
  ];

  const team = [
    { name: "Ana Silva", role: "CEO & Fundadora", image: "👩‍💼" },
    { name: "Carlos Santos", role: "CTO", image: "👨‍💻" },
    { name: "Maria Oliveira", role: "Head de Produto", image: "👩‍🔬" },
    { name: "Pedro Costa", role: "Head de Vendas", image: "👨‍💼" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PetMessenger</span>
          </Link>
          <Link to="/">
            <Button variant="outline">Voltar ao Início</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre o PetMessenger
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nascemos da necessidade de modernizar o atendimento em pet shops. 
              Nossa missão é tornar o agendamento de banho e tosa tão simples quanto 
              enviar uma mensagem no WhatsApp.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      O PetMessenger nasceu em 2023, quando nossa fundadora percebeu 
                      que pet shops perdiam clientes por não conseguirem atender 
                      fora do horário comercial.
                    </p>
                    <p>
                      Com experiência em tecnologia e amor por animais, desenvolvemos 
                      um bot inteligente que atende 24 horas por dia, 7 dias por semana, 
                      pelo canal que os brasileiros mais usam: o WhatsApp.
                    </p>
                    <p>
                      Hoje, mais de 500 pet shops confiam no PetMessenger para 
                      automatizar seus agendamentos e melhorar a experiência de seus clientes.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                  <div className="text-center space-y-6">
                    <Users className="w-16 h-16 mx-auto opacity-90" />
                    <div>
                      <div className="text-5xl font-bold">500+</div>
                      <div className="text-lg opacity-90">Pet Shops Ativos</div>
                    </div>
                    <div>
                      <div className="text-5xl font-bold">50k+</div>
                      <div className="text-lg opacity-90">Agendamentos por Mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Pilares</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.image}
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Faça Parte da Nossa História
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Junte-se aos centenas de pet shops que já transformaram seu atendimento com o PetMessenger.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Falar Conosco
                </Button>
              </Link>
              <Link to="/#pricing">
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Ver Planos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
