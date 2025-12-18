import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">PetBot</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
              Recursos
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
              Preços
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Entrar</Button>
            <Button variant="default">Começar Agora</Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col p-4 gap-4">
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Como Funciona
            </a>
            <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Recursos
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              Preços
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors py-2">
              FAQ
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">Entrar</Button>
              <Button variant="default" className="w-full">Começar Agora</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
