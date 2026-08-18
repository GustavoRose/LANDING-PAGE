// Dados de contato centralizados da Cheiro de Rosa.
// Mantenha este arquivo como fonte única da verdade: se o número mudar,
// atualiza aqui e reflete em todas as páginas que o importam.

export const WHATSAPP_NUMBER = "5548988048880";

export const WHATSAPP_MESSAGES = {
  floating: "Olá! Vim pela página e quero saber mais sobre os produtos.",
  ctaMain:
    "Oi! Quero ajuda pra escolher o produto ideal pra mim, pode me orientar?",
  mobileFixed:
    "Oi! Vim pelo site, pode me ajudar a escolher algo com entrega hoje?",
} as const;

export function buildWhatsappUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
