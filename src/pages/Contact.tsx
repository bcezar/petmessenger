import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petshopName: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", petshopName: "", message: "" });
  };

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

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quer saber mais sobre o PetMessenger? Preencha o formulário e nossa equipe entrará em contato.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <h2 className="text-2xl font-bold mb-6">Solicite uma Demonstração</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petshopName">Nome do Pet Shop</Label>
                    <Input
                      id="petshopName"
                      value={formData.petshopName}
                      onChange={(e) => setFormData({ ...formData, petshopName: e.target.value })}
                      placeholder="Seu pet shop"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Como podemos ajudar?"
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full group">
                  Enviar Mensagem
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Fale Conosco</h3>
                <p className="opacity-90 mb-6">
                  Nossa equipe está pronta para ajudar você a transformar o atendimento do seu pet shop.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">E-mail</div>
                      <div className="opacity-90">contato@petmessenger.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="opacity-90">(11) 4000-0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Localização</div>
                      <div className="opacity-90">São Paulo, SP - Brasil</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="text-foreground font-medium">9h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="text-foreground font-medium">9h - 13h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="text-foreground font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
