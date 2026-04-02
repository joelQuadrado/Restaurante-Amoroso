import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";

interface GalleryImage {
  src: string;
  alt: string;
  aspect: string;
}

const IMAGES: GalleryImage[] = [
  { src: gallery1, alt: "Peixe grelhado com batatas", aspect: "aspect-[4/3]" },
  { src: gallery2, alt: "Bacalhau desfiado", aspect: "aspect-square" },
  { src: gallery3, alt: "Cozido à portuguesa", aspect: "aspect-[3/4]" },
  { src: gallery4, alt: "Sapateira recheada", aspect: "aspect-[4/3]" },
  { src: gallery5, alt: "Carne grelhada", aspect: "aspect-[3/4]" },
  { src: gallery6, alt: "Caranguejo", aspect: "aspect-square" },
];

const GallerySection = () => (
  <section id="galeria" className="py-24 md:py-32 bg-card">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Momentos
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">Galeria</h2>
        <div className="w-16 h-px bg-accent mx-auto" />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
        {IMAGES.map(({ src, alt, aspect }) => (
          <div
            key={alt}
            className={`${aspect} mb-4 break-inside-avoid border border-border overflow-hidden group`}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
