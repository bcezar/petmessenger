import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
          <p className="text-muted-foreground mb-8">Última atualização: Janeiro de 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Informações que Coletamos</h2>
            <p className="text-muted-foreground mb-4">
              O PetMessenger coleta informações necessárias para fornecer nossos serviços de agendamento automatizado:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Dados de identificação do pet shop (nome, CNPJ, endereço)</li>
              <li>Informações de contato (e-mail, telefone)</li>
              <li>Dados dos clientes finais necessários para agendamento (nome, telefone)</li>
              <li>Informações dos pets (nome, raça, porte)</li>
              <li>Histórico de agendamentos e serviços</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Como Utilizamos suas Informações</h2>
            <p className="text-muted-foreground mb-4">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Processar e gerenciar agendamentos</li>
              <li>Enviar lembretes e confirmações via WhatsApp</li>
              <li>Melhorar nossos serviços e experiência do usuário</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. 
              Podemos compartilhar dados apenas com provedores de serviços essenciais para operação da plataforma, 
              sempre sob acordos de confidencialidade.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Segurança dos Dados</h2>
            <p className="text-muted-foreground">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra 
              acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados, 
              controle de acesso e monitoramento contínuo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Seus Direitos (LGPD)</h2>
            <p className="text-muted-foreground mb-4">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar anonimização ou eliminação de dados</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Retenção de Dados</h2>
            <p className="text-muted-foreground">
              Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. 
              Após o encerramento da conta, os dados serão mantidos por até 5 anos para fins fiscais e legais, 
              sendo posteriormente anonimizados ou excluídos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Contato</h2>
            <p className="text-muted-foreground">
              Para exercer seus direitos ou tirar dúvidas sobre nossa política de privacidade, entre em contato:
            </p>
            <p className="text-muted-foreground mt-4">
              <strong className="text-foreground">E-mail:</strong> privacidade@petmessenger.com.br<br />
              <strong className="text-foreground">Encarregado de Dados (DPO):</strong> dpo@petmessenger.com.br
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Privacy;
