// Dados de contato centralizados da Cheiro de Rosa.
// Mantenha este arquivo como fonte única da verdade: se o número mudar,
// atualiza aqui e reflete em todas as páginas que o importam.

export const WHATSAPP_NUMBER = "5548988048880";

export const WHATSAPP_MESSAGES = {
  floating: "Olá! Vi o anúncio e quero montar um kit personalizado.",
  ctaMain:
    "Oi! Quero montar um kit personalizado comigo, pode me ajudar a escolher?",
  mobileFixed:
    "Oi! Vim pelo site e quero montar um kit personalizado com entrega hoje.",
} as const;

export function buildWhatsappUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
