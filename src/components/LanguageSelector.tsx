import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português (BR)", flag: "🇧🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors">
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium">
          {languages.find((l) => l.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 py-2 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[140px] z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-secondary transition-colors ${
              language === lang.code ? "text-primary" : "text-foreground"
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
