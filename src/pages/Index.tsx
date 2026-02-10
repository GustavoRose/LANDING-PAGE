import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  // Número oficial Cheiro de Rosa
  const myPhoneNumber = "5548988048880";

  // Mensagem de WhatsApp altamente conversiva
  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=Oi!%20Quero%20ajuda%20pra%20escolher%20um%20kit%20ideal%20pra%20mim,%20pode%20me%20orientar?`;

  const handleWhatsClick = (origin: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", {
        content_name: origin,
        device: "mobile",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-coral/30">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Botão flutuante WhatsApp */}
      <a
        href={whatsappUrl}
        onClick={() => handleWhatsClick("Botão Flutuante WhatsApp")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento privado no WhatsApp"
        title="Atendimento privado no WhatsApp"
        className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50
        bg-[#25D366] text-white p-4 rounded-full
        shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)]
        hover:scale-110 active:scale-95 transition-all
        animate-pulse flex items-center justify-center"
      >
        <MessageCircle size={30} />
      </a>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          {/* Logo */}
          <div className="animate-float">
            <img
              src={logo}
              alt="Boutique Floripa"
              className="h-16 md:h-28 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent opacity-60" />

          {/* Headline */}
          <header className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              Ouse Descobrir <br />
              <span className="text-coral">Novas Sensações</span>
            </h1>

            {/* Subtítulo desktop */}
            <p className="hidden md:block font-body text-lg text-coral-light/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Curadoria premium de bem-estar íntimo na Grande Florianópolis.
              Kits exclusivos para quem não aceita o comum.
            </p>

            {/* Subtítulo mobile */}
            <p className="md:hidden font-body text-sm text-coral-light/90 font-medium max-w-sm mx-auto leading-relaxed">
              Kits íntimos exclusivos com entrega discreta hoje em Floripa.
            </p>
          </header>

          {/* Benefícios */}
          <section className="w-full">
            <FeatureCards />
          </section>

          {/* Prova social */}
          <section className="w-full py-4 border-y border-coral/10 bg-white/5 backdrop-blur-sm rounded-2xl">
            <Testimonials />
          </section>

          {/* Micro prova social mobile */}
          <div className="md:hidden flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span className="text-emerald-500">★★★★★</span>
            <span>Mais de 1.000 clientes atendidas com discrição</span>
          </div>

          {/* CTA principal desktop */}
          <div className="hidden md:flex flex-col items-center gap-4 w-full max-w-md">
            <div
              className="w-full"
              onClick={() => handleWhatsClick("CTA Principal Desktop")}
            >
              <WhatsAppButton
                phoneNumber={myPhoneNumber}
                label="FALAR COM UMA CONSULTORA AGORA"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              Sem compromisso • Atendimento humano e discreto
            </p>
          </div>
        </div>
      </main>

      {/* CTA FIXO MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur border-t border-coral/20 p-3">
        <div onClick={() => handleWhatsClick("CTA Mobile Fixo")}>
          <WhatsAppButton
            phoneNumber={myPhoneNumber}
            label="FALAR COM UMA CONSULTORA AGORA"
          />
        </div>
        <p className="text-[11px] text-muted-foreground text-center mt-1">
          Atendimento discreto • Sem compromisso • Resposta rápida
        </p>
        <p className="text-[10px] text-muted-foreground italic text-center">
          Atendimento humano, sem julgamentos.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
