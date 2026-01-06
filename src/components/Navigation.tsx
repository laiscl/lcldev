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
    { key: "Blog", label: t.nav.blog },
    { key: "Contact", label: t.nav.contact },
  ];

  return (
    <nav className="flex gap-2">
      {sections.map((section) => (
        <button
          key={section.key}
          onClick={() => onSectionChange(section.key)}
          className={`nav-link ${
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
