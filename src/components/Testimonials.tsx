import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Chegou em menos de 1h30, embalagem totalmente discreta. Meu marido nem percebeu! Já indiquei pra três amigas. 💜",
    author: "Ana R. — Palhoça",
  },
  {
    text: "Atendimento nota 10, sem julgamento nenhum. Me ajudaram a escolher o kit perfeito. Produto de qualidade e chegou super rápido!",
    author: "Camila S. — São José",
  },
  {
    text: "Nunca pensei que seria tão fácil e discreto. Comprei pelo WhatsApp, paguei no Pix e em 1h30 estava na minha porta. Recomendo demais!",
    author: "Júlia M. — Florianópolis",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 md:py-12">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="font-display text-xl sm:text-2xl md:text-4xl font-semibold text-foreground mb-2 md:mb-3">
          O Que Nossas Clientes Dizem
        </h2>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-coral text-coral" />
          ))}
        </div>
        <p className="text-muted-foreground font-body text-xs md:text-base">
          +1.000 clientes atendidas com discrição em toda Grande Florianópolis
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/60 backdrop-blur-sm 
                       border border-border/30 transition-all duration-300
                       hover:bg-secondary/70 hover:border-coral/30
                       hover:shadow-[0_0_30px_hsl(14_90%_58%/0.15)]"
          >
            <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 text-coral/20" />
            <p className="font-body text-sm md:text-base text-foreground mb-3 md:mb-4 relative z-10 pr-6">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-coral/20 flex items-center justify-center">
                <span className="text-coral text-xs md:text-sm font-semibold">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <span className="text-xs md:text-sm text-muted-foreground font-body">
                {testimonial.author}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
