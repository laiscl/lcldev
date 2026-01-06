import { useState } from "react";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Applications", "Web development", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "Finance App",
    category: "Applications",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png",
    bgColor: "bg-card",
    filter: "Applications",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web development",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    bgColor: "bg-gradient-to-br from-violet-600 to-purple-700",
    filter: "Web development",
  },
  {
    id: 3,
    title: "Social Connect",
    category: "Applications",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2504/2504903.png",
    bgColor: "bg-gradient-to-br from-pink-500 to-rose-600",
    filter: "Applications",
  },
  {
    id: 4,
    title: "Task Manager",
    category: "UI/UX",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2387/2387635.png",
    bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
    filter: "UI/UX",
  },
  {
    id: 5,
    title: "Food Delivery",
    category: "Applications",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3081/3081918.png",
    bgColor: "bg-gradient-to-br from-orange-500 to-red-600",
    filter: "Applications",
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    category: "Web development",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-600",
    filter: "Web development",
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">Portfolio</h2>
      <div className="section-underline" />

      {/* Filter Tabs */}
      <div className="flex gap-6 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`filter-tab ${
              activeFilter === filter ? "filter-tab-active" : ""
            }`}
          >
            {filter}
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
            imageUrl={project.imageUrl}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
