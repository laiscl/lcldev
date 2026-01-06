import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import avatarImg from "@/assets/avatar.png";

const Index = () => {
  const [activeSection, setActiveSection] = useState("Portfolio");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />;
      case "Resume":
        return <ResumeSection />;
      case "Portfolio":
        return <PortfolioSection />;
      case "Blog":
        return <BlogSection />;
      case "Contact":
        return <ContactSection />;
      default:
        return <PortfolioSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Sidebar
          name="Seu Nome"
          role="Software Developer"
          email="seuemail@email.com"
          phone="+55 11 99999-9999"
          location="São Paulo, Brasil"
          avatarUrl={avatarImg}
        />

        {/* Main Content */}
        <main className="flex-1 content-card animate-fade-in">
          {/* Navigation */}
          <div className="flex justify-end mb-8">
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
          </div>

          {/* Content */}
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;
