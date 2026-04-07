import { useLanguage } from "@/lib/language";
import { useTheme } from "@/lib/theme";
import videoDark from "@/assets/images/Projects/portfolio/log_anim.mp4";
import videoLight from "@/assets/images/Projects/portfolio/logo_anim_blanc.mp4";

export default function HeroPortfolio() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        key={theme}
        className="h-full w-full object-cover"
        src={theme === "light" ? videoLight : videoDark}
        autoPlay
        muted
        loop
        playsInline
      />
      {theme === "dark" && <div className="absolute inset-0 bg-black/30" />}
      <div className="absolute inset-x-0 bottom-12 md:bottom-16 px-6 md:px-12">
        <p className={`text-xs uppercase tracking-[0.35em] mb-3 ${theme === "light" ? "text-black/70" : "text-white/70"}`}>
          {language === "fr" ? "Portfolio Personnel · V1" : "Personal Portfolio · V1"}
        </p>
        <h1
          className={`leading-tight ${theme === "light" ? "text-black" : "text-white"}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 6vw, 4.5rem)", fontWeight: 700 }}
        >
          {language === "fr" ? "Du Figma au site web" : "From Figma to Website"}
        </h1>
      </div>
    </section>
  );
}
