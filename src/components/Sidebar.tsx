import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SidebarProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  avatarUrl: string;
}

const Sidebar = ({ name, role, email, phone, location, avatarUrl }: SidebarProps) => {
  const { t } = useLanguage();

  return (
    <aside className="sidebar-card w-full lg:w-80 lg:sticky lg:top-8 h-fit animate-fade-in">
      {/* Avatar Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-muted to-secondary">
            <img 
              src={avatarUrl} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="status-dot" />
        </div>
        <h1 className="text-xl font-bold text-foreground">{name}</h1>
        <span className="mt-2 px-4 py-1.5 bg-secondary rounded-lg text-sm text-muted-foreground">
          {role}
        </span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border my-6" />

      {/* Contact Info */}
      <div className="space-y-1">
        <div className="contact-item">
          <div className="contact-icon">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.sidebar.email}</p>
            <p className="text-sm text-foreground truncate">{email}</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.sidebar.phone}</p>
            <p className="text-sm text-foreground">{phone}</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.sidebar.location}</p>
            <p className="text-sm text-foreground">{location}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border my-6" />

      {/* Social Links */}
      <div className="flex justify-center gap-3">
        <a href="#" className="social-icon" aria-label="LinkedIn">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="#" className="social-icon" aria-label="GitHub">
          <Github className="w-4 h-4" />
        </a>
        <a href="#" className="social-icon" aria-label="Twitter">
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
