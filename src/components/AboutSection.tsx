import { UtensilsCrossed, Wine, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: UtensilsCrossed,
    title: "Cozinha Caseira",
    description: "Pratos tradicionais preparados com receitas transmitidas de geração em geração.",
  },
  {
    icon: Wine,
    title: "Vinhos Selecionados",
    description: "Uma carta de vinhos cuidadosamente selecionada das melhores regiões portuguesas.",
  },
  {
    icon: Heart,
    title: "Ambiente Familiar",
    description: "Um espaço acolhedor onde cada refeição se transforma num momento especial.",
  },
];

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          A Nossa História
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-8">
          Tradição à Mesa
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-8" />
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-light">
          No coração da tradição portuguesa, o Restaurante O Amoroso é um verdadeiro reflexo de
          uma casa de família, onde cada detalhe conta uma história passada de geração em geração.
          Gerido com dedicação por uma família que valoriza as suas raízes, este espaço convida a
          momentos de partilha à mesa, tal como antigamente. Cada prato é preparado com amor e
          saber, recriando os sabores autênticos que trazem à memória o conforto de uma boa
          refeição caseira, feita com tempo, cuidado e tradição.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 border border-border rounded-full flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-500">
              <Icon size={22} strokeWidth={1.2} />
            </div>
            <h3 className="font-display text-lg font-medium mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
