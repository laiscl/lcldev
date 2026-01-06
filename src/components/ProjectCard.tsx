interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  bgColor?: string;
}

const ProjectCard = ({ title, category, imageUrl, bgColor = "bg-card" }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      <div 
        className={`aspect-[4/3] flex items-center justify-center ${bgColor}`}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="max-w-[60%] max-h-[60%] object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
