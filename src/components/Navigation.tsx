interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = ["About", "Resume", "Portfolio", "Blog", "Contact"];

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="flex gap-2">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onSectionChange(section)}
          className={`nav-link ${
            activeSection === section ? "nav-link-active" : ""
          }`}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
