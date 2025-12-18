import { Check, CheckCheck } from "lucide-react";

const ChatMockup = () => {
  const messages = [
    { type: "bot", text: "Olá! 🐾 Bem-vindo ao Pet Shop Amor Animal! Como posso ajudar?", time: "10:30" },
    { type: "user", text: "Quero agendar um banho", time: "10:31" },
    { type: "bot", text: "Ótimo! Qual o nome e a raça do seu pet? 🐕", time: "10:31" },
    { type: "user", text: "Thor, Golden Retriever", time: "10:32" },
    { type: "bot", text: "Thor é um nome lindo! 💛 Qual serviço você prefere?\n\n1️⃣ Banho Simples\n2️⃣ Banho + Tosa Higiênica\n3️⃣ Banho + Tosa Completa", time: "10:32" },
    { type: "user", text: "2", time: "10:33" },
    { type: "bot", text: "Perfeito! 📅 Temos horários disponíveis:\n\n• Amanhã 14:00\n• Amanhã 16:00\n• Sexta 10:00\n\nQual prefere?", time: "10:33" },
  ];

  return (
    <div className="relative bg-card rounded-3xl shadow-card overflow-hidden border border-border max-w-md mx-auto animate-float">
      {/* Header */}
      <div className="bg-whatsapp px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-whatsapp-foreground/20 flex items-center justify-center">
          <span className="text-lg">🐾</span>
        </div>
        <div>
          <div className="text-whatsapp-foreground font-semibold text-sm">Pet Shop Amor Animal</div>
          <div className="text-whatsapp-foreground/70 text-xs">online</div>
        </div>
      </div>
      
      {/* Chat */}
      <div className="p-4 space-y-3 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0icmdiYSgwLDAsMCwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] bg-muted/30 min-h-[380px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm relative ${
                msg.type === "user"
                  ? "bg-whatsapp/90 text-whatsapp-foreground rounded-br-sm"
                  : "bg-card text-card-foreground shadow-soft rounded-bl-sm"
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
              <div className={`flex items-center gap-1 justify-end mt-1 ${
                msg.type === "user" ? "text-whatsapp-foreground/70" : "text-muted-foreground"
              }`}>
                <span className="text-[10px]">{msg.time}</span>
                {msg.type === "user" && <CheckCheck className="w-3 h-3" />}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="px-3 py-2 bg-card border-t border-border flex items-center gap-2">
        <div className="flex-1 bg-muted rounded-full px-4 py-2 text-sm text-muted-foreground">
          Digite uma mensagem...
        </div>
        <div className="w-10 h-10 rounded-full bg-whatsapp flex items-center justify-center">
          <svg className="w-5 h-5 text-whatsapp-foreground" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatMockup;
