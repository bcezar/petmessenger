import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o bot é integrado ao meu WhatsApp?",
    answer: "Utilizamos a API oficial do WhatsApp Business. Você cadastra seu número comercial em nossa plataforma e em poucos minutos o bot está ativo. Não é necessário conhecimento técnico.",
  },
  {
    question: "Posso personalizar as mensagens do bot?",
    answer: "Sim! Você pode personalizar todas as mensagens, desde a saudação inicial até as opções de serviços. O tom de voz do bot pode ser ajustado para refletir a identidade do seu pet shop.",
  },
  {
    question: "O bot funciona com outros sistemas de gestão?",
    answer: "Oferecemos integração via API com os principais sistemas de gestão de pet shops do mercado. Se seu sistema não estiver na lista, nossa equipe pode desenvolver a integração.",
  },
  {
    question: "E se o cliente tiver dúvidas que o bot não consegue responder?",
    answer: "O bot identifica quando não consegue resolver e transfere automaticamente para atendimento humano, notificando você pelo app ou email. Você nunca perde um cliente.",
  },
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A configuração básica leva cerca de 30 minutos. Se precisar de integrações com sistemas existentes, pode levar alguns dias. Nossa equipe te acompanha em todo o processo.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim! Oferecemos 14 dias de teste gratuito em todos os planos, sem necessidade de cartão de crédito. Experimente e veja os resultados antes de se comprometer.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre o PetBot e como ele pode ajudar seu negócio.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border border-border/50 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
