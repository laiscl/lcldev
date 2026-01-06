import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ResumeSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: `2022 - ${t.resume.present}`,
      title: "Senior Software Developer",
      company: "Tech Company",
      description: "Leading development of enterprise web applications using React and Node.js.",
    },
    {
      period: "2020 - 2022",
      title: "Full Stack Developer",
      company: "Startup Inc",
      description: "Built and maintained multiple client projects from concept to deployment.",
    },
    {
      period: "2018 - 2020",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Started career developing responsive websites and learning best practices.",
    },
  ];

  const education = [
    {
      period: "2014 - 2018",
      title: "Bachelor in Computer Science",
      institution: "University of Technology",
      description: "Graduated with honors. Specialized in software engineering and web technologies.",
    },
  ];

  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "C#", level: 80 },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">{t.resume.title}</h2>
      <div className="section-underline" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t.resume.experience}</h3>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1" />
                <span className="text-sm text-primary">{exp.period}</span>
                <h4 className="font-semibold mt-1">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t.resume.education}</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-border">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1" />
                <span className="text-sm text-primary">{edu.period}</span>
                <h4 className="font-semibold mt-1">{edu.title}</h4>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-xl font-semibold mb-6">{t.resume.skills}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
