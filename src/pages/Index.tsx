import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import WhatsAppButton from "@/components/WhatsAppButton";
import FeatureCards from "@/components/FeatureCards";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const Index = () => {
  // Número oficial Cheiro de Rosa com código de país
  const myPhoneNumber = "5548988048880"; 
  
  // Mensagem personalizada mais direta e instigante
  const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=Olá!%20Vim%20pela%20página%20Boutique%20Floripa%20e%20quero%20conhecer%20os%20kits%20exclusivos.`;

  const handleFloatingClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact', { 
        content_name: 'Botão Flutuante WhatsApp',
        content_category: 'Atendimento'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background relative selection:bg-coral/30">
      
      {/* Background - Opacidade ajustada para profundidade visual */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40 mix-blend-soft-light" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Botão Flutuante de Alta Conversão */}
      <a 
        href={whatsappUrl}
        onClick={handleFloatingClick}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all animate-bounce-slow flex items-center justify-center border-none"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      <main className="flex-1 relative z-10 flex flex-col items-center px-4 py-10 md:py-20">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 md:space-y-12">
          
          {/* Logo com animação suave */}
          <div className="animate-float">
            <img 
              src={logo} 
              alt="Boutique Floripa" 
              className="h-16 md:h-28 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="w-16 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-coral to-transparent opacity-60" />

          {/* Header com Copy Ousada e Direta */}
          <header className="space-y-4">
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
              Ouse Descobrir <br />
              <span className="text-coral drop-shadow-sm">Novas Sensações</span>
            </h1>
            <p className="font-body text-base md:text-xl text-coral-light/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Curadoria premium de bem-estar íntimo na Grande Florianópolis. <br className="hidden sm:block" />
              Kits exclusivos desenvolvidos para quem não aceita o comum.
            </p>
          </header>

          {/* Seção de Benefícios */}
          <section className="w-full">
            <FeatureCards />
          </section>

          {/* Prova Social */}
          <section className="w-full py-4 border-y border-coral/10 bg-white/5 backdrop-blur-sm rounded-2xl">
            <Testimonials />
          </section>

          {/* Call to Action Principal */}
          <div className="flex flex-col items-center gap-5 w-full max-w-md">
            <div className="w-full transform transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <WhatsAppButton 
                phoneNumber={myPhoneNumber} 
                label="QUERO MEU KIT EXCLUSIVO" 
              />
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-500 text-xs md:text-sm font-semibold tracking-wide uppercase">
                Consultoria Privada Disponível agora
              </span>
            </div>

            {/* Micro-copy de segurança e urgência */}
            <div className="space-y-1">
              <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-80">
                Entrega discreta e imediata • Embalagem neutra
              </p>
              <p className="text-[10px] text-muted-foreground/60 italic">
                Sua privacidade é nossa prioridade absoluta.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
