import { Code, Palette, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive and performant web applications using modern technologies.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Building cross-platform mobile applications with native performance.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user interfaces and experiences.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Helping businesses grow their digital presence and reach.",
  },
];

const AboutSection = () => {
  return (
    <section className="animate-fade-in">
      <h2 className="section-title">About Me</h2>
      <div className="section-underline" />

      <p className="text-muted-foreground mb-8 leading-relaxed">
        I'm a passionate Software Developer with expertise in creating modern web and mobile applications. 
        With years of experience in the industry, I've helped numerous clients bring their ideas to life 
        through clean code and intuitive design. I believe in continuous learning and staying up-to-date 
        with the latest technologies.
      </p>

      <h3 className="text-xl font-semibold mb-6">What I Do</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div 
            key={service.title}
            className="p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
