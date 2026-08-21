import { Flame, Gift, Sparkles } from "lucide-react";

const KIT_ITEMS = [
  {
    icon: Sparkles,
    title: "Lingerie",
    description: "Diversos modelos e cores",
  },
  {
    icon: Flame,
    title: "Brinquedos íntimos",
    description: "Pra apimentar do seu jeito",
  },
  {
    icon: Gift,
    title: "Cosméticos e géis",
    description: "Lubrificantes, aromas e mais",
  },
] as const;

const CustomKitSection = () => {
  return (
    <section className="w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-secondary/70 to-secondary/40 border border-coral/20 p-5 md:p-10 text-center space-y-5 md:space-y-6">
      <div className="space-y-2">
        <span className="inline-flex items-center gap-1.5 text-coral text-xs md:text-sm font-semibold uppercase tracking-widest">
          <Flame size={16} className="shrink-0" aria-hidden="true" />
          Monte na hora
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-semibold text-foreground leading-tight">
          Seu Kit Perfeito, do Seu Jeito
        </h2>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Nada de kit fechado: nossa equipe monta com você, na hora, pelo
          WhatsApp — escolhendo lingerie, brinquedos e cosméticos que combinam
          com o que você quer apimentar hoje.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
        {KIT_ITEMS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-row sm:flex-col items-center gap-3 sm:gap-2 p-3 md:p-4 rounded-xl bg-background/40 border border-border/30"
          >
            <div className="p-2 rounded-full bg-primary/20 shrink-0">
              <Icon className="w-5 h-5 text-coral" aria-hidden="true" />
            </div>
            <div className="text-left sm:text-center">
              <p className="text-sm md:text-base font-semibold text-foreground">
                {title}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs md:text-sm text-muted-foreground/80 italic">
        Fale com a gente no botão abaixo e monte o seu ↓
      </p>
    </section>
  );
};

export default CustomKitSection;


