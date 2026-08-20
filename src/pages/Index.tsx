import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // ajuste o caminho conforme seu projeto
import logo from "@/assets/logo.png"; // ajuste o caminho conforme seu projeto
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGES, buildWhatsappUrl } from "@/config/contact";

const Index = () => {
  const handleWhatsClick = (origin: string, message: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: origin,
        content_category: "Atendimento",
      });
    }
    window.open(
      buildWhatsappUrl(WHATSAPP_NUMBER, message),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-coral/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-soft-light"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Botão flutuante WhatsApp (desktop e tablet — no mobile a barra fixa já cumpre esse papel) */}
      <button
        onClick={() => handleWhatsClick("Botão Flutuante", WHATSAPP_MESSAGES.floating)}
        aria-label="Atendimento privado no WhatsApp"
        title="Atendimento privado no WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all animate-pulse items-center justify-center border-none"
      >
        <MessageCircle size={30} />
      </button>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Cheiro de Rosa"
              className="h-16 md:h-28 w-auto drop-shadow-2xl"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent opacity-60" />

          {/* Headline */}
          <header className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              Ouse Descobrir <br />
              <span className="text-coral drop-shadow-sm">Novas Sensações</span>
            </h1>

            {/* Subtítulo desktop */}
            <p className="hidden md:block font-body text-lg text-coral-light/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Curadoria premium de bem-estar íntimo, com embalagem 100% discreta
              e entrega em até 1h30 na Grande Florianópolis.
            </p>

            {/* Subtítulo mobile — direto ao ponto, já entrega a promessa central */}
            <p className="md:hidden font-body text-sm text-coral-light/90 font-medium max-w-sm mx-auto leading-relaxed">
              Entrega 100% discreta em até 1h30, hoje mesmo em Floripa.
            </p>
          </header>

          {/* Barra de confiança — CNPJ, prêmios, nota Google */}
          <TrustBar />

          {/* Benefícios */}
          <section className="w-full">
            <FeatureCards />
          </section>

          {/* Prova social */}
          <section className="w-full py-4 border-y border-coral/10 bg-white/5 backdrop-blur-sm rounded-2xl">
            <Testimonials />
          </section>

          {/* Micro prova social mobile — reforço rápido antes do scroll acabar.
              Usando o dado real (nota + nº de avaliações no Google) em vez de
              um número de clientes não verificável. */}
          <div className="md:hidden flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="text-emerald-500">★★★★★</span>
            <span>Nota 5/5 em mais de 70 avaliações no Google</span>
          </div>

          {/* CTA principal desktop */}
          <div className="hidden md:flex flex-col items-center gap-4 w-full max-w-md">
            <div className="w-full transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
              {/*
                NOTA IMPORTANTE:
                O onClick foi movido para o próprio WhatsAppButton (via prop),
                em vez de embrulhar o componente num <div onClick>. Isso corrige
                um problema de acessibilidade: um <div> não é focável nem
                acionável via teclado, e leitores de tela podem não anunciá-lo
                como interativo.

                Isso exige que o componente WhatsAppButton aceite uma prop
                `onClick` e a aplique ao elemento <button> ou <a> que ele
                renderiza internamente. Se ele já constrói o link do WhatsApp
                sozinho a partir de phoneNumber, ajuste-o para:
                  1. chamar onClick (se fornecido) para o tracking, e
                  2. em seguida abrir o link normalmente.
                Se preferir não alterar o componente agora, me envie o código
                dele que eu adapto os dois juntos.
              */}
              <WhatsAppButton
                phoneNumber={WHATSAPP_NUMBER}
                label="QUERO ATENDIMENTO 100% DISCRETO"
                onClick={() => handleWhatsClick("CTA Principal Desktop", WHATSAPP_MESSAGES.ctaMain)}
              />
            </div>

            <div className="flex items-center justify-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-xs md:text-sm font-semibold tracking-wide uppercase">
                Pedido feito agora chega em até 1h30
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-80">
                Entrega em até 1h30 • Embalagem neutra
              </p>
              <p className="text-[10px] text-muted-foreground/60 italic">
                Sua privacidade é nossa prioridade absoluta.
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Sem compromisso • Atendimento humano e discreto
            </p>
          </div>

          {/* Espaço reservado para a barra fixa mobile não cobrir o final do conteúdo */}
          <div className="md:hidden h-20" />
        </div>
      </main>

      {/* CTA fixo mobile — a maior parte do tráfego provavelmente é mobile,
          então este é o botão que mais importa */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-coral/20 p-3">
        <WhatsAppButton
          phoneNumber={WHATSAPP_NUMBER}
          label="QUERO ATENDIMENTO 100% DISCRETO"
          onClick={() => handleWhatsClick("CTA Mobile Fixo", WHATSAPP_MESSAGES.mobileFixed)}
        />
        <p className="text-[11px] text-muted-foreground text-center mt-1">
          Entrega em até 1h30 • Sem compromisso • Resposta rápida
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
