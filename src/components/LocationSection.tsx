import { MapPin, Clock, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface InfoItem {
  icon: LucideIcon;
  title: string;
  content: React.ReactNode;
}

const INFO_ITEMS: InfoItem[] = [
  {
    icon: MapPin,
    title: "Morada",
    content: (
      <>
        R. Salvador Allende 4, São João da Talha
        <br />
        Lisboa, Portugal
      </>
    ),
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Quarta a Segunda: 12h00 – 23h00",
  },
  {
    icon: Phone,
    title: "Contacto",
    content: (
      <a href="tel:+351219941210" className="hover:text-foreground transition-colors">
        +351 21 994 12 10
      </a>
    ),
  },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.5!2d-9.0856!3d38.8365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331c8b5a2f3d%3A0x0!2sR.+Salvador+Allende+4%2C+S%C3%A3o+Jo%C3%A3o+da+Talha!5e0!3m2!1sen!2spt!4v1700000000000";

const LocationSection = () => (
  <section id="localizacao" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Visite-nos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">Localização</h2>
        <div className="w-16 h-px bg-accent mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <div className="space-y-10">
          {INFO_ITEMS.map(({ icon: Icon, title, content }) => (
            <div key={title} className="flex gap-5">
              <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Icon size={16} strokeWidth={1.2} />
              </div>
              <div>
                <h3 className="font-display text-base font-medium mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="aspect-square lg:aspect-auto lg:min-h-[400px] border border-border overflow-hidden">
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Restaurante O Amoroso"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
