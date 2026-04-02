import logoBg from "@/assets/logo-bg.png";

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Decorative emblem */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img
        src={logoBg}
        alt=""
        aria-hidden="true"
        className="w-[500px] h-auto md:w-[700px] mix-blend-multiply"
      />
    </div>

    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
      <a
        href="#sobre"
        className="inline-block text-xs uppercase tracking-[0.25em] border border-foreground/30 px-8 py-4 hover:bg-foreground hover:text-background transition-all duration-500"
      >
        Descubra
      </a>
    </div>
  </section>
);

export default HeroSection;
