import topRic from "@/assets/images/Projects/ricmaa/top_ric.png";
import ricmaaBg from "@/assets/images/Projects/ricmaa/background.png";

export default function HeroRicmaa() {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden"
      style={{ backgroundImage: `url(${ricmaaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <img
        src={topRic}
        alt="Portfolio Ricmaa Custom"
        className="relative z-10 w-full h-full object-contain mx-auto scale-125"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />
    </section>
  );
}
