import { Code, Palette, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import SkillsSection from "./SkillsSection";

const AboutSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t.about.webDev,
      description: t.about.webDevDesc,
    },
    {
      icon: Smartphone,
      title: t.about.appDev,
      description: t.about.appDevDesc,
    },
    {
      icon: Palette,
      title: t.about.uiux,
      description: t.about.uiuxDesc,
    },
    {
      icon: Globe,
      title: t.about.digital,
      description: t.about.digitalDesc,
    },
  ];

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="section-underline" />

      <p className="text-muted-foreground mb-8 leading-relaxed">
        {t.about.description}
      </p>

      <h3 className="text-xl font-semibold mb-6">{t.about.whatIDo}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div 
            key={service.title}
            className="p-6 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <SkillsSection />
    </section>
  );
};

export default AboutSection;
