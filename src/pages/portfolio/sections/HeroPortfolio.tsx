import { useLanguage } from "@/lib/language";
import portfolioVideo from "@/assets/images/Projects/portfolio/log_anim.mp4";

export default function HeroPortfolio() {
  const { language } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src={portfolioVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-x-0 bottom-12 md:bottom-16 px-6 md:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-3">
          {language === "fr" ? "Portfolio Personnel · V1" : "Personal Portfolio · V1"}
        </p>
        <h1
          className="text-white leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 700 }}
        >
          {language === "fr" ? "Du Figma au site web" : "From Figma to Website"}
        </h1>
      </div>
    </section>
  );
}
