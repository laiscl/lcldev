import { Briefcase, GraduationCap, Languages, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ResumeSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      period: `06/2025 - ${t.resume.present}`,
      title: "Front-End Developer",
      company: "China Link",
      description:
        "Desenvolvimento e evolucao de interfaces web com foco em experiencia do usuario, usabilidade e performance.",
    },
    {
      period: "10/2024 - 06/2025",
      title: "DevOps",
      company: "China Link",
      description:
        "Apoio em automacao, organizacao de processos e integracao entre desenvolvimento e operacoes.",
    },
    {
      period: "06/2024 - 10/2024",
      title: "TI",
      company: "China Link",
      description:
        "Suporte tecnico, organizacao de demandas internas e apoio a infraestrutura de tecnologia.",
    },
    {
      period: "2013 - 2024",
      title: "Consultora Comercial de Seguros",
      company: "Corretora de Seguros",
      description:
        "Atendimento consultivo, relacionamento com clientes e apoio na escolha das melhores solucoes de seguro.",
    },
  ];

  const education = [
    {
      period: "2014 - 2018",
      title: "Bacharel em Sistemas de Informacao",
      institution: "Universidade Santa Cecilia",
      description:
        "Formacao voltada para tecnologia, desenvolvimento de software e gestao de sistemas de informacao.",
    },
    {
      period: "Certificacao",
      title: "Green Belt Six Sigma",
      institution: "Six Sigma",
      description:
        "Formacao em melhoria continua, analise de processos e resolucao estruturada de problemas.",
    },
  ];

  const skills = ["React", "TypeScript", "HTML/CSS", "C#"];

  const languages = [
    { name: "Ingles", level: "Avancado" },
    { name: "Japones", level: "Intermediario" },
    { name: "Espanhol", level: "Basico" },
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

          <div className="flex items-center gap-3 mt-10 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Languages className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Idiomas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <span
                key={language.name}
                className="text-sm px-3 py-1.5 rounded-lg border border-border bg-background text-foreground"
              >
                {language.name} - {language.level}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="flex items-center gap-3 mt-10 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{t.resume.skills}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1.5 rounded-lg border border-border bg-background text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ResumeSection;
