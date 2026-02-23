import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const { t } = useLanguage();
  
  const sections = [
    { key: "About", label: t.nav.about },
    { key: "Resume", label: t.nav.resume },
    { key: "Portfolio", label: t.nav.portfolio },
    { key: "Contact", label: t.nav.contact },
  ];

  return (
    <nav className="flex flex-wrap gap-1 sm:gap-2">
      {sections.map((section) => (
        <button
          key={section.key}
          onClick={() => onSectionChange(section.key)}
          className={`nav-link text-xs sm:text-sm px-2 sm:px-4 py-1.5 sm:py-2 ${
            activeSection === section.key ? "nav-link-active" : ""
          }`}
        >
          {section.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
