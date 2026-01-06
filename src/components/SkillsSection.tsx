import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "from-blue-400/20 to-blue-600/20",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    color: "from-purple-500/20 to-violet-600/20",
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="mt-10 animate-fade-in">
      <h3 className="text-xl font-semibold mb-6 text-primary">{t.skillsSection.title}</h3>
      
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group relative w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} border border-border/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-primary/50 cursor-pointer`}
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
