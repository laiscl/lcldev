import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-12 animate-fade-in">
      <h3 className="text-xl font-semibold mb-6">{t.skillsSection.title}</h3>
      
      <div className="flex flex-wrap gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative w-24 h-24 rounded-2xl bg-primary/10 border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/20 cursor-pointer"
          >
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded-md text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
      
      {/* Underline decoration */}
      <div className="mt-8 flex items-center gap-1">
        <div className="w-24 h-1 bg-primary rounded-full" />
        <div className="flex-1 h-1 bg-border rounded-full" />
      </div>
    </section>
  );
};

export default SkillsSection;
