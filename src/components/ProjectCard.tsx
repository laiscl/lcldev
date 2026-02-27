import { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  bgColor?: string;
  logoColor?: string;
}

const ProjectCard = ({
  title,
  category,
  description,
  icon: Icon,
  bgColor = "bg-card",
  logoColor = "bg-primary/20 text-primary",
}: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div className={`aspect-[4/3] flex items-center justify-center ${bgColor}`}>
        <div
          className={`w-24 h-24 rounded-2xl border border-white/20 shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${logoColor}`}
        >
          <Icon className="w-12 h-12" aria-hidden="true" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
