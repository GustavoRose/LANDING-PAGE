import { Lock, Truck, Smile, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Entrega no Mesmo Dia",
    description: "Palhoça, São José, Floripa e toda Grande Florianópolis.",
  },
  {
    icon: Clock,
    title: "Em até 1h30 na sua porta",
    description: "Motoboy saindo agora. A entrega mais rápida da região.",
  },
  {
    icon: Lock,
    title: "100% Sigiloso",
    description: "Embalagem sem identificação. Ninguém sabe o que tem dentro.",
  },
  {
    icon: Smile,
    title: "Sem Julgamentos",
    description: "Atendimento acolhedor e especializado. Você escolhe com tranquilidade.",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group flex flex-row items-center p-4 md:p-5 rounded-xl md:rounded-2xl
                     bg-secondary/60 backdrop-blur-sm border border-border/30
                     transition-all duration-300 hover:bg-secondary/70 hover:border-coral/30
                     hover:shadow-[0_0_30px_hsl(14_90%_58%/0.15)]"
        >
          <div className="p-2 md:p-3 rounded-full bg-primary/20 mr-4 shrink-0
                          transition-all duration-300 group-hover:bg-primary/30">
            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-coral" />
          </div>
          <div className="text-left">
            <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-0.5">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm font-body leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
