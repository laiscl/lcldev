import { useState } from "react";
import { Briefcase, GraduationCap, Languages, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ResumeSection = () => {
  const { t } = useLanguage();
  const [cvView, setCvView] = useState<"compact" | "complete">("compact");

  const experiences = [
    {
      period: `Jun/2025 - ${t.resume.present}`,
      title: "Front-End Developer",
      company: "China Link Trading",
      responsibilities: [
        "Desenvolvimento de aplicacoes web e mobile responsivas para iOS e Android utilizando React, TypeScript e Tailwind.",
        "Criacao de sistemas do zero, atuando de forma fullstack desde a concepcao ate a implementacao em producao.",
        "Participacao ativa e lideranca tecnica em novos projetos, contribuindo na definicao de arquitetura e solucoes.",
        "Desenvolvimento de dashboards e sistemas internos integrados a APIs internas e externas.",
        "Estruturacao de versionamento com Git/GitHub e colaboracao com backend em ambientes com CI/CD.",
        "Levantamento de requisitos junto as areas de negocio.",
        "Construcao de interfaces com foco em usabilidade, performance e escalabilidade.",
        "Documentacao tecnica e acompanhamento pos-release para evolucao continua dos produtos.",
      ],
    },
    {
      period: "10/2024 - 06/2025",
      title: "DevOps",
      company: "China Link",
      responsibilities: [
        "Planejamento e implementacao de automacoes integrando sistemas internos e externos utilizando Zapier e Make.",
        "Substituicao de fluxos manuais por integracoes automatizadas, aumentando eficiencia operacional e confiabilidade dos processos.",
        "Mapeamento, analise e redesenho de fluxos com foco em melhoria continua.",
        "Analise de causa raiz (RCA) e estabilizacao de processos automatizados.",
        "Estruturacao e organizacao de demandas com Notion, TeamWork e Jira.",
        "Aplicacao pratica de metodologias ageis (Scrum e Kanban).",
        "Criacao de dashboards e relatorios para acompanhamento de indicadores internos.",
        "Atuacao como ponte entre areas tecnicas e operacionais.",
      ],
    },
    {
      period: "Jun/2024 - Out/2024",
      title: "Auxiliar de TI",
      company: "China Link Trading",
      responsibilities: [
        "Otimizacao de processos internos por meio de automacao, com foco em eficiencia operacional.",
        "Lideranca das atividades de infraestrutura e suporte tecnico, garantindo estabilidade e resolucao proativa de incidentes.",
        "Gestao de contas, acessos e ativos de TI, assegurando organizacao e rastreabilidade.",
        "Estruturacao e padronizacao da documentacao tecnica.",
        "Desenvolvimento de relatorios e dashboards para apoio a tomada de decisao.",
      ],
    },
    {
      period: "Jan/2013 - Jun/2024",
      title: "Especialista em Beneficios Corporativos (Saude e Vida)",
      company: "Toledo Corretora de Seguros LTDA",
      responsibilities: [
        "Gestao estrategica de carteira B2B e B2C de beneficios saude e vida, com foco em retencao, expansao e relacionamento de longo prazo.",
        "Atuacao como principal ponto de contato para clientes estrategicos e resolucao de casos complexos junto a operadoras.",
        "Conducao de negociacoes tecnicas envolvendo reajustes, movimentacoes cadastrais, autorizacoes e demandas contratuais.",
        "Estruturacao e implantacao de beneficios corporativos, apoiando empresas na tomada de decisao sobre planos e coberturas.",
        "Referencia tecnica interna para demandas criticas, garantindo qualidade no atendimento e fidelizacao da carteira.",
        "Treinamento e suporte tecnico a equipe comercial.",
        "Desenvolvimento de relatorios estrategicos e indicadores para apoio a diretoria.",
      ],
    },
    {
      period: "Ago/2010 - Out/2012",
      title: "Assistente Administrativo",
      company: "Itamaraty Logistica",
      location: "Santos - SP",
      responsibilities: [
        "Suporte administrativo em processos de importacao e exportacao.",
        "Liberacao documental de B/L e acompanhamento de line-up.",
        "Interface com orgaos reguladores e instituicoes bancarias.",
        "Controle e organizacao de documentacao logistica.",
        "Atendimento a clientes, agentes e armadores.",
      ],
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

  const skills = ["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap", "C#"];

  const languages = [
    { name: "Ingles", level: "Avancado" },
    { name: "Japones", level: "Intermediario" },
    { name: "Espanhol", level: "Basico" },
  ];

  return (
    <section className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="section-title">{t.resume.title}</h2>
          <div className="section-underline" />
        </div>
        <div className="inline-flex rounded-lg border border-border bg-secondary p-1">
          <button
            type="button"
            onClick={() => setCvView("compact")}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              cvView === "compact" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Comprimida
          </button>
          <button
            type="button"
            onClick={() => setCvView("complete")}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              cvView === "complete" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Completa
          </button>
        </div>
      </div>

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
                <span className="text-sm text-primary font-bold">{exp.period}</span>
                <h4 className="font-semibold mt-1">{exp.title}</h4>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                <ul className="text-sm text-muted-foreground mt-2 list-disc pl-5 space-y-1">
                  {(cvView === "compact" ? exp.responsibilities.slice(0, 2) : exp.responsibilities).map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                {cvView === "compact" && exp.responsibilities.length > 2 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    +{exp.responsibilities.length - 2} itens na versao completa
                  </p>
                )}
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
                <span className="text-sm text-primary font-bold">{edu.period}</span>
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
