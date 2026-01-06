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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map placeholder */}
        <div className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-xl overflow-hidden bg-secondary">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.456!2d85.324!3d27.717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAxLjIiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>

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
