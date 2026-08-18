import { Award, MapPin, ShieldCheck, Star } from "lucide-react";

// Dados reais da loja — mantenha sincronizado caso algum número mude
// (nova avaliação, novo prêmio etc).
const TRUST_ITEMS = [
  {
    icon: Star,
    label: "5/5 no Google",
    detail: "+70 avaliações",
  },
  {
    icon: Award,
    label: "2x Premiada",
    detail: "Melhor Lingerie e Sex Shop de Floripa",
  },
  {
    icon: ShieldCheck,
    label: "Desde 2020",
    detail: "Mesma equipe há 6 anos",
  },
  {
    icon: MapPin,
    label: "Loja física",
    detail: "Centro de Palhoça, SC",
  },
] as const;

const TrustBar = () => {
  return (
    <div
      role="group"
      aria-label="Selos de confiança da Cheiro de Rosa"
      className="w-full flex flex-wrap items-center justify-center gap-2 sm:gap-3"
    >
      {TRUST_ITEMS.map(({ icon: Icon, label, detail }) => (
        <div
          key={label}
          className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-coral/15 rounded-full px-3.5 py-2 sm:px-4"
        >
          <Icon size={16} className="text-coral shrink-0" aria-hidden="true" />
          <div className="flex flex-col items-start leading-tight text-left">
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {label}
            </span>
            <span className="text-[10px] sm:text-xs text-muted-foreground">
              {detail}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBar;
