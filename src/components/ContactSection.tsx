import { useState } from "react";
import { Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="animate-fade-in">
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="section-underline" />

      <div className="max-w-xl">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder={t.contact.name}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder={t.contact.email}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          <div>
            <textarea
              placeholder={t.contact.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
