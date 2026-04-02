const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground tracking-wide">
        © {new Date().getFullYear()} Restaurante O Amoroso
      </p>
      <p className="text-[11px] text-muted-foreground/60 tracking-wide">
        Website por{" "}
        <a
          href="https://digitalsanity.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-muted-foreground transition-colors duration-300 underline-offset-4 hover:underline"
        >
          digitalsanity.pt
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
