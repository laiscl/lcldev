import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import LanguageSelector from "@/components/LanguageSelector";
import { LanguageProvider } from "@/contexts/LanguageContext";
import avatarImg from "@/assets/avatar.png";

const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState("About");

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />;
      case "Resume":
        return <ResumeSection />;
      case "Portfolio":
        return <PortfolioSection />;
      case "Contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Sidebar
          name="Laís Costa"
          role="Front-End Developer"
          email="lais.cl@outlook.com"
          phone="+55 13 99153-8050"
          location="Santos, Brasil"
          avatarUrl={avatarImg}
        />

        {/* Main Content */}
        <main className="flex-1 content-card animate-fade-in">
          {/* Header with Navigation and Language Selector */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="order-2 sm:order-1">
              <Navigation 
                activeSection={activeSection} 
                onSectionChange={setActiveSection} 
              />
            </div>
            <div className="order-1 sm:order-2">
              <LanguageSelector />
            </div>
          </div>

          {/* Content */}
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
};

export default Index;
