import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { BarChart3, Clock3, IdCard, Smartphone, Package, Network } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Analytics",
    category: "Applications",
    description:
      "Plataforma de dashboard com visualizacao estrategica de dados. Exibe KPIs, graficos de desempenho, metricas operacionais e indicadores financeiros em tempo real. Foco em tomada de decisao baseada em dados.",
    icon: BarChart3,
    bgColor: "bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700",
    logoColor: "bg-white/15 text-blue-100",
    filter: "Applications",
  },
  {
    id: 2,
    title: "Timetrack",
    category: "Applications",
    description:
      "Sistema de controle de atividades e monitoramento de colaboradores, com foco em tempo de atendimento e cumprimento de SLA. Permite identificar atrasos, produtividade e performance da equipe em tempo real.",
    icon: Clock3,
    bgColor: "bg-gradient-to-br from-slate-800 to-blue-900",
    logoColor: "bg-orange-500/20 text-orange-100",
    filter: "Applications",
  },
  {
    id: 3,
    title: "Intro Card Creator",
    category: "Applications",
    description:
      "Ferramenta para criacao automatizada de cartoes de clientes seguindo templates padronizados. Permite geracao individual ou em massa (via upload de dados), ideal para eventos corporativos.",
    icon: IdCard,
    bgColor: "bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-500",
    logoColor: "bg-white/20 text-indigo-50",
    filter: "Applications",
  },
  {
    id: 4,
    title: "Canton Fair App",
    category: "Applications",
    description:
      "Aplicativo mobile de suporte para clientes durante a Canton Fair. Oferece agenda, mapa do evento, organizacao de contatos, notificacoes e informacoes logisticas.",
    icon: Smartphone,
    bgColor: "bg-gradient-to-br from-red-700 via-red-600 to-rose-600",
    logoColor: "bg-white/15 text-red-50",
    filter: "Applications",
  },
  {
    id: 5,
    title: "Reports",
    category: "Applications",
    description:
      "Sistema de acompanhamento de importacoes em tempo real. Exibe status logistico, timeline de processos, rastreamento de containers e atualizacoes operacionais.",
    icon: Package,
    bgColor: "bg-gradient-to-br from-slate-700 to-teal-800",
    logoColor: "bg-cyan-300/20 text-cyan-100",
    filter: "Applications",
  },
  {
    id: 6,
    title: "Prometheus",
    category: "Applications",
    description:
      "Hub central que concentra todos os dados do cliente em um unico ambiente. Integra informacoes financeiras, logisticas, operacionais e analiticas, funcionando como portal principal da empresa.",
    icon: Network,
    bgColor: "bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900",
    logoColor: "bg-violet-300/15 text-violet-100",
    filter: "Applications",
  },
];

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { key: "All", label: t.portfolio.all },
    { key: "Applications", label: t.portfolio.applications },
    { key: "Web development", label: t.portfolio.webDev },
    { key: "UI/UX", label: t.portfolio.uiux },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">{t.portfolio.title}</h2>
      <div className="section-underline" />

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setActiveFilter(filter.key)}
            className={`filter-tab ${
              activeFilter === filter.key ? "filter-tab-active" : ""
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            icon={project.icon}
            bgColor={project.bgColor}
            logoColor={project.logoColor}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
