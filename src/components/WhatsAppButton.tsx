import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  label?: string;
  /**
   * Chamado antes de abrir o WhatsApp. Use para tracking (fbq, GA, etc.)
   * e/ou para sobrescrever a mensagem enviada por origem do clique.
   * Se não for passado, o componente usa o comportamento padrão abaixo
   * (mensagem genérica + tracking próprio).
   */
  onClick?: () => void;
}

const WhatsAppButton = ({
  phoneNumber,
  message = "Olá! Vim do Instagram e gostaria de saber mais sobre os produtos.",
  label = "Fale Conosco no WhatsApp",
  onClick,
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    // Se o componente pai controla tracking/mensagem (caso do Index.tsx,
    // que define uma mensagem diferente por origem do clique), delega a ele
    // e não abre o link duas vezes nem dispara tracking duplicado.
    if (onClick) {
      onClick();
      return;
    }

    // Comportamento padrão (fallback), usado apenas quando o componente
    // é utilizado sem a prop onClick.
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact");
    }
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="group relative inline-flex items-center gap-2.5 md:gap-3 px-6 py-5 md:px-10
                 text-base sm:text-lg font-semibold 
                 bg-[#25D366] text-white rounded-full
                 transition-all duration-300 ease-out
                 hover:scale-105 hover:bg-[#20bd5a]
                 animate-pulse-glow
                 shadow-[0_10px_40px_-10px_rgba(37,211,102,0.5)]
                 cursor-pointer border-none w-full justify-center text-center"
    >
      <MessageCircle className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      <span className="font-body tracking-wide leading-tight">{label}</span>
    </button>
  );
};

export default WhatsAppButton;
