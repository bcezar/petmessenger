import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
          <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar ou usar o PetMessenger, você concorda em ficar vinculado a estes Termos de Uso. 
              Se você não concordar com qualquer parte destes termos, não poderá acessar ou usar nossos serviços.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
            <p className="text-muted-foreground">
              O PetMessenger é uma plataforma SaaS que oferece automação de agendamentos para pet shops 
              através de inteligência artificial via WhatsApp. Nossos serviços incluem:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Bot de atendimento automatizado 24/7</li>
              <li>Gestão de agendamentos</li>
              <li>Envio de lembretes automáticos</li>
              <li>Painel de controle para o pet shop</li>
              <li>Relatórios e análises</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Conta</h2>
            <p className="text-muted-foreground">
              Para usar nossos serviços, você deve criar uma conta fornecendo informações precisas e completas. 
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as 
              atividades realizadas em sua conta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Planos e Pagamento</h2>
            <p className="text-muted-foreground mb-4">
              Oferecemos diferentes planos de assinatura com funcionalidades variadas:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Os valores são cobrados mensalmente de forma antecipada</li>
              <li>Reajustes podem ocorrer com aviso prévio de 30 dias</li>
              <li>O cancelamento pode ser feito a qualquer momento, com efeito ao final do período pago</li>
              <li>Não há reembolso por períodos parciais não utilizados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Uso Aceitável</h2>
            <p className="text-muted-foreground mb-4">Você concorda em não usar nossos serviços para:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Violar leis ou regulamentos aplicáveis</li>
              <li>Enviar spam ou mensagens não solicitadas</li>
              <li>Interferir na operação normal da plataforma</li>
              <li>Tentar acessar dados de outros usuários sem autorização</li>
              <li>Revender ou sublicenciar o serviço sem autorização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
            <p className="text-muted-foreground">
              Todo o conteúdo, funcionalidades e tecnologia do PetMessenger são de propriedade exclusiva 
              da empresa ou de seus licenciadores. Você não adquire nenhum direito de propriedade sobre 
              nosso software, marcas ou conteúdo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              O PetMessenger é fornecido "como está". Não garantimos que o serviço será ininterrupto ou 
              livre de erros. Nossa responsabilidade total está limitada ao valor pago pelo serviço nos 
              últimos 12 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Disponibilidade do Serviço</h2>
            <p className="text-muted-foreground">
              Nos esforçamos para manter o serviço disponível 24/7, mas podem ocorrer interrupções para 
              manutenção ou por fatores fora do nosso controle. Avisaremos sobre manutenções programadas 
              com antecedência quando possível.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações nos Termos</h2>
            <p className="text-muted-foreground">
              Podemos atualizar estes termos periodicamente. Mudanças significativas serão comunicadas 
              por e-mail ou através da plataforma. O uso continuado após alterações constitui aceitação 
              dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Foro e Lei Aplicável</h2>
            <p className="text-muted-foreground">
              Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de São Paulo/SP 
              para dirimir quaisquer controvérsias decorrentes destes termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Contato</h2>
            <p className="text-muted-foreground">
              Dúvidas sobre estes Termos de Uso podem ser enviadas para:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong className="text-foreground">E-mail:</strong> juridico@petmessenger.com.br
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;
