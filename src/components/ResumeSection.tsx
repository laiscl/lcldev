import { useState } from "react";
import { Briefcase, GraduationCap, Languages, Code2 } from "lucide-react";
import { Language, useLanguage } from "@/contexts/LanguageContext";

type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  location?: string;
  responsibilities: string[];
};

type EducationItem = {
  period: string;
  title: string;
  institution: string;
  description: string;
};

type ResumeLocalizedContent = {
  compactLabel: string;
  completeLabel: string;
  moreItemsText: (count: number) => string;
  languagesTitle: string;
  skills: string[];
  languages: Array<{ name: string; level: string }>;
  experiences: ExperienceItem[];
  education: EducationItem[];
};

const ResumeSection = () => {
  const { t, language } = useLanguage();
  const [cvView, setCvView] = useState<"compact" | "complete">("compact");

  const localizedResume: Record<Language, ResumeLocalizedContent> = {
    pt: {
      compactLabel: "Comprimida",
      completeLabel: "Completa",
      moreItemsText: (count) => `+${count} itens na versao completa`,
      languagesTitle: "Idiomas",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap", "C#"],
      languages: [
        { name: "Ingles", level: "Avancado" },
        { name: "Japones", level: "Intermediario" },
        { name: "Espanhol", level: "Basico" },
      ],
      experiences: [
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
      ],
      education: [
        {
          period: "2014 - 2018",
          title: "Bacharel em Sistemas de Informacao",
          institution: "Universidade Santa Cecilia",
          description: "Formacao voltada para tecnologia, desenvolvimento de software e gestao de sistemas de informacao.",
        },
        {
          period: "Certificacao",
          title: "Green Belt Six Sigma",
          institution: "Six Sigma",
          description: "Formacao em melhoria continua, analise de processos e resolucao estruturada de problemas.",
        },
      ],
    },
    en: {
      compactLabel: "Compact",
      completeLabel: "Complete",
      moreItemsText: (count) => `+${count} more items in complete view`,
      languagesTitle: "Languages",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap", "C#"],
      languages: [
        { name: "English", level: "Advanced" },
        { name: "Japanese", level: "Intermediate" },
        { name: "Spanish", level: "Basic" },
      ],
      experiences: [
        {
          period: `Jun/2025 - ${t.resume.present}`,
          title: "Front-End Developer",
          company: "China Link Trading",
          responsibilities: [
            "Development of responsive web and mobile applications for iOS and Android using React, TypeScript, and Tailwind.",
            "Creation of systems from scratch, acting in a full-stack role from concept to production implementation.",
            "Active participation and technical leadership in new projects, contributing to architecture and solution design.",
            "Development of dashboards and internal systems integrated with internal and external APIs.",
            "Git/GitHub versioning setup and collaboration with backend teams in CI/CD environments.",
            "Requirements gathering with business areas.",
            "Interface construction focused on usability, performance, and scalability.",
            "Technical documentation and post-release follow-up for continuous product evolution.",
          ],
        },
        {
          period: "10/2024 - 06/2025",
          title: "DevOps",
          company: "China Link",
          responsibilities: [
            "Planning and implementation of automations integrating internal and external systems using Zapier and Make.",
            "Replacement of manual flows with automated integrations, improving operational efficiency and process reliability.",
            "Process mapping, analysis, and redesign with a focus on continuous improvement.",
            "Root cause analysis (RCA) and stabilization of automated processes.",
            "Demand structuring and organization with Notion, TeamWork, and Jira.",
            "Practical application of agile methodologies (Scrum and Kanban).",
            "Creation of dashboards and reports for tracking internal indicators.",
            "Acting as a bridge between technical and operational teams.",
          ],
        },
        {
          period: "Jun/2024 - Oct/2024",
          title: "IT Assistant",
          company: "China Link Trading",
          responsibilities: [
            "Optimization of internal processes through automation, focused on operational efficiency.",
            "Leadership in infrastructure and technical support activities, ensuring stability and proactive incident resolution.",
            "Management of IT accounts, access, and assets, ensuring organization and traceability.",
            "Technical documentation structuring and standardization.",
            "Development of reports and dashboards to support decision-making.",
          ],
        },
        {
          period: "Jan/2013 - Jun/2024",
          title: "Corporate Benefits Specialist (Health and Life)",
          company: "Toledo Corretora de Seguros LTDA",
          responsibilities: [
            "Strategic management of B2B and B2C health and life benefits portfolios, focused on retention, expansion, and long-term relationships.",
            "Primary point of contact for strategic clients and resolution of complex cases with insurance providers.",
            "Technical negotiations involving adjustments, registration updates, authorizations, and contractual demands.",
            "Structuring and implementation of corporate benefits, supporting companies in plan and coverage decisions.",
            "Internal technical reference for critical demands, ensuring service quality and portfolio loyalty.",
            "Training and technical support for the commercial team.",
            "Development of strategic reports and indicators to support leadership.",
          ],
        },
        {
          period: "Aug/2010 - Oct/2012",
          title: "Administrative Assistant",
          company: "Itamaraty Logistica",
          location: "Santos - SP",
          responsibilities: [
            "Administrative support in import and export processes.",
            "Document release for B/L and line-up follow-up.",
            "Interface with regulatory bodies and banking institutions.",
            "Control and organization of logistics documentation.",
            "Support for clients, agents, and shipowners.",
          ],
        },
      ],
      education: [
        {
          period: "2014 - 2018",
          title: "Bachelor in Information Systems",
          institution: "Universidade Santa Cecilia",
          description: "Education focused on technology, software development, and information systems management.",
        },
        {
          period: "Certification",
          title: "Green Belt Six Sigma",
          institution: "Six Sigma",
          description: "Training in continuous improvement, process analysis, and structured problem-solving.",
        },
      ],
    },
    es: {
      compactLabel: "Comprimida",
      completeLabel: "Completa",
      moreItemsText: (count) => `+${count} elementos en la version completa`,
      languagesTitle: "Idiomas",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap", "C#"],
      languages: [
        { name: "Ingles", level: "Avanzado" },
        { name: "Japones", level: "Intermedio" },
        { name: "Espanol", level: "Basico" },
      ],
      experiences: [
        {
          period: `Jun/2025 - ${t.resume.present}`,
          title: "Front-End Developer",
          company: "China Link Trading",
          responsibilities: [
            "Desarrollo de aplicaciones web y mobile responsivas para iOS y Android utilizando React, TypeScript y Tailwind.",
            "Creacion de sistemas desde cero, actuando de forma full-stack desde la concepcion hasta la implementacion en produccion.",
            "Participacion activa y liderazgo tecnico en nuevos proyectos, contribuyendo en la definicion de arquitectura y soluciones.",
            "Desarrollo de dashboards y sistemas internos integrados con APIs internas y externas.",
            "Estructuracion de versionado con Git/GitHub y colaboracion con backend en entornos CI/CD.",
            "Levantamiento de requisitos junto a las areas de negocio.",
            "Construccion de interfaces con foco en usabilidad, performance y escalabilidad.",
            "Documentacion tecnica y seguimiento post-release para evolucion continua de productos.",
          ],
        },
        {
          period: "10/2024 - 06/2025",
          title: "DevOps",
          company: "China Link",
          responsibilities: [
            "Planificacion e implementacion de automatizaciones integrando sistemas internos y externos con Zapier y Make.",
            "Sustitucion de flujos manuales por integraciones automatizadas, aumentando eficiencia operativa y confiabilidad de procesos.",
            "Mapeo, analisis y rediseno de flujos con foco en mejora continua.",
            "Analisis de causa raiz (RCA) y estabilizacion de procesos automatizados.",
            "Estructuracion y organizacion de demandas con Notion, TeamWork y Jira.",
            "Aplicacion practica de metodologias agiles (Scrum y Kanban).",
            "Creacion de dashboards e informes para seguimiento de indicadores internos.",
            "Actuacion como puente entre areas tecnicas y operativas.",
          ],
        },
        {
          period: "Jun/2024 - Oct/2024",
          title: "Asistente de TI",
          company: "China Link Trading",
          responsibilities: [
            "Optimizacion de procesos internos mediante automatizacion, con foco en eficiencia operativa.",
            "Liderazgo de actividades de infraestructura y soporte tecnico, garantizando estabilidad y resolucion proactiva de incidentes.",
            "Gestion de cuentas, accesos y activos de TI, asegurando organizacion y trazabilidad.",
            "Estructuracion y estandarizacion de documentacion tecnica.",
            "Desarrollo de reportes y dashboards para apoyo a la toma de decisiones.",
          ],
        },
        {
          period: "Ene/2013 - Jun/2024",
          title: "Especialista en Beneficios Corporativos (Salud y Vida)",
          company: "Toledo Corretora de Seguros LTDA",
          responsibilities: [
            "Gestion estrategica de cartera B2B y B2C de beneficios de salud y vida, con foco en retencion, expansion y relacion de largo plazo.",
            "Punto de contacto principal para clientes estrategicos y resolucion de casos complejos con aseguradoras.",
            "Negociaciones tecnicas de reajustes, movimientos de registro, autorizaciones y demandas contractuales.",
            "Estructuracion e implementacion de beneficios corporativos, apoyando decisiones sobre planes y coberturas.",
            "Referencia tecnica interna en demandas criticas, garantizando calidad y fidelizacion de cartera.",
            "Capacitacion y soporte tecnico al equipo comercial.",
            "Desarrollo de informes estrategicos e indicadores para apoyo directivo.",
          ],
        },
        {
          period: "Ago/2010 - Oct/2012",
          title: "Asistente Administrativo",
          company: "Itamaraty Logistica",
          location: "Santos - SP",
          responsibilities: [
            "Soporte administrativo en procesos de importacion y exportacion.",
            "Liberacion documental de B/L y seguimiento de line-up.",
            "Interfaz con organismos reguladores e instituciones bancarias.",
            "Control y organizacion de documentacion logistica.",
            "Atencion a clientes, agentes y armadores.",
          ],
        },
      ],
      education: [
        {
          period: "2014 - 2018",
          title: "Licenciatura en Sistemas de Informacion",
          institution: "Universidade Santa Cecilia",
          description: "Formacion orientada a tecnologia, desarrollo de software y gestion de sistemas de informacion.",
        },
        {
          period: "Certificacion",
          title: "Green Belt Six Sigma",
          institution: "Six Sigma",
          description: "Formacion en mejora continua, analisis de procesos y resolucion estructurada de problemas.",
        },
      ],
    },
    ja: {
      compactLabel: "簡易",
      completeLabel: "完全",
      moreItemsText: (count) => `完全表示であと${count}項目`,
      languagesTitle: "言語",
      skills: ["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap", "C#"],
      languages: [
        { name: "英語", level: "上級" },
        { name: "日本語", level: "中級" },
        { name: "スペイン語", level: "初級" },
      ],
      experiences: [
        {
          period: `Jun/2025 - ${t.resume.present}`,
          title: "Front-End Developer",
          company: "China Link Trading",
          responsibilities: [
            "React、TypeScript、Tailwindを使用し、iOS/Android向けのレスポンシブなWeb・モバイルアプリを開発。",
            "構想から本番導入まで、フルスタックでゼロからシステムを構築。",
            "新規プロジェクトで技術リードを担い、アーキテクチャ設計とソリューション定義に貢献。",
            "社内外APIと連携したダッシュボードおよび社内システムを開発。",
            "Git/GitHubの運用を整備し、CI/CD環境でバックエンドと連携。",
            "事業部門との要件定義を実施。",
            "ユーザビリティ・性能・拡張性を重視したUIを構築。",
            "技術ドキュメント作成とリリース後の継続改善を実施。",
          ],
        },
        {
          period: "10/2024 - 06/2025",
          title: "DevOps",
          company: "China Link",
          responsibilities: [
            "ZapierとMakeを活用し、社内外システムを連携する自動化を計画・実装。",
            "手作業フローを自動連携に置き換え、運用効率と信頼性を向上。",
            "継続改善を目的に業務フローを可視化・分析・再設計。",
            "根本原因分析（RCA）を行い、自動化プロセスを安定化。",
            "Notion、TeamWork、Jiraでタスクを構造化・管理。",
            "Scrum/Kanbanのアジャイル手法を実務適用。",
            "社内KPI管理のためのダッシュボードとレポートを作成。",
            "技術部門と運用部門の橋渡し役として活動。",
          ],
        },
        {
          period: "Jun/2024 - Oct/2024",
          title: "ITアシスタント",
          company: "China Link Trading",
          responsibilities: [
            "自動化を通じて社内プロセスを最適化し、業務効率を向上。",
            "インフラと技術サポートを主導し、安定運用と障害の予防対応を実施。",
            "ITアカウント・権限・資産を管理し、可視性と追跡性を確保。",
            "技術ドキュメントを整備・標準化。",
            "意思決定支援のためのレポートとダッシュボードを作成。",
          ],
        },
        {
          period: "Jan/2013 - Jun/2024",
          title: "法人福利厚生スペシャリスト（医療・生命）",
          company: "Toledo Corretora de Seguros LTDA",
          responsibilities: [
            "B2B/B2C向け医療・生命保険ポートフォリオを戦略的に管理し、維持・拡大・長期関係を推進。",
            "重要顧客の主要窓口として、保険会社との複雑案件を解決。",
            "改定、登録変更、承認、契約要件に関する技術交渉を実施。",
            "法人福利厚生の設計・導入を行い、プラン・補償選定を支援。",
            "重要案件の社内技術リファレンスとして品質と顧客維持を担保。",
            "営業チームへの教育と技術支援を実施。",
            "経営判断を支援する戦略レポートと指標を作成。",
          ],
        },
        {
          period: "Aug/2010 - Oct/2012",
          title: "事務アシスタント",
          company: "Itamaraty Logistica",
          location: "Santos - SP",
          responsibilities: [
            "輸出入プロセスにおける事務サポートを担当。",
            "B/L書類のリリース対応とラインナップの進捗管理。",
            "規制機関および銀行機関との連携窓口を担当。",
            "物流ドキュメントの管理・整理を実施。",
            "顧客・代理店・船会社への対応を実施。",
          ],
        },
      ],
      education: [
        {
          period: "2014 - 2018",
          title: "情報システム学 学士",
          institution: "Universidade Santa Cecilia",
          description: "テクノロジー、ソフトウェア開発、情報システム管理を中心とした教育課程。",
        },
        {
          period: "認定",
          title: "Green Belt Six Sigma",
          institution: "Six Sigma",
          description: "継続的改善、プロセス分析、構造化された課題解決に関するトレーニング。",
        },
      ],
    },
  };

  const content = localizedResume[language];
  const experiences = content.experiences;
  const education = content.education;
  const skills = content.skills;
  const languages = content.languages;

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
            {content.compactLabel}
          </button>
          <button
            type="button"
            onClick={() => setCvView("complete")}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
              cvView === "complete" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            {content.completeLabel}
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
                    {content.moreItemsText(exp.responsibilities.length - 2)}
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
            <h3 className="text-xl font-semibold">{content.languagesTitle}</h3>
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
