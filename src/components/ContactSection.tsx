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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formsubmit.co/ajax/lais.cl@outlook.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Nova mensagem do portfolio",
          _captcha: "false",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro no envio");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? "Enviando..." : t.contact.send}
          </button>
          {submitStatus === "success" && (
            <p className="text-sm text-primary">
              Mensagem enviada com sucesso. Vou receber no e-mail lais.cl@outlook.com.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-sm text-destructive">
              Nao foi possivel enviar agora. Tente novamente em instantes.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
