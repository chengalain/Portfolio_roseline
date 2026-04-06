import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/language";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  return (
      <button
        onClick={toggleTheme}
      aria-label={language === "fr" ? "Changer le thème" : "Toggle theme"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border
                 bg-card/50 text-muted-foreground transition-all hover:border-accent/50 hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
