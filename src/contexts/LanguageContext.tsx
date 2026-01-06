import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en" | "es" | "ja";

interface Translations {
  nav: {
    about: string;
    resume: string;
    portfolio: string;
    blog: string;
    contact: string;
  };
  sidebar: {
    email: string;
    phone: string;
    location: string;
  };
  about: {
    title: string;
    description: string;
    whatIDo: string;
    webDev: string;
    webDevDesc: string;
    appDev: string;
    appDevDesc: string;
    uiux: string;
    uiuxDesc: string;
    digital: string;
    digitalDesc: string;
  };
  resume: {
    title: string;
    experience: string;
    education: string;
    skills: string;
    present: string;
  };
  portfolio: {
    title: string;
    all: string;
    applications: string;
    webDev: string;
    uiux: string;
  };
  blog: {
    title: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  skillsSection: {
    title: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      about: "Sobre",
      resume: "Currículo",
      portfolio: "Portfólio",
      blog: "Blog",
      contact: "Contato",
    },
    sidebar: {
      email: "Email",
      phone: "Telefone",
      location: "Localização",
    },
    about: {
      title: "Sobre Mim",
      description: "Sou uma desenvolvedora de software apaixonada, com experiência em criar aplicações web e mobile modernas. Ao longo dos anos, ajudei diversos clientes a transformar suas ideias em realidade através de código limpo e design intuitivo. Acredito no aprendizado contínuo e em me manter atualizada com as últimas tecnologias.",
      whatIDo: "O Que Eu Faço",
      webDev: "Desenvolvimento Web",
      webDevDesc: "Criando aplicações web responsivas e performáticas usando tecnologias modernas.",
      appDev: "Desenvolvimento de Apps",
      appDevDesc: "Construindo aplicações mobile multiplataforma com performance nativa.",
      uiux: "Design UI/UX",
      uiuxDesc: "Projetando interfaces de usuário intuitivas e bonitas.",
      digital: "Estratégia Digital",
      digitalDesc: "Ajudando empresas a crescer sua presença digital.",
    },
    resume: {
      title: "Currículo",
      experience: "Experiência",
      education: "Educação",
      skills: "Habilidades",
      present: "Presente",
    },
    portfolio: {
      title: "Portfólio",
      all: "Todos",
      applications: "Aplicações",
      webDev: "Desenvolvimento Web",
      uiux: "UI/UX",
    },
    blog: {
      title: "Blog",
    },
    contact: {
      title: "Contato",
      name: "Nome Completo",
      email: "Endereço de Email",
      message: "Sua Mensagem",
      send: "Enviar Mensagem",
    },
    skillsSection: {
      title: "Tecnologias",
    },
  },
  en: {
    nav: {
      about: "About",
      resume: "Resume",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
    },
    sidebar: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    about: {
      title: "About Me",
      description: "I'm a passionate software developer with expertise in creating modern web and mobile applications. With years of experience in the industry, I've helped numerous clients bring their ideas to life through clean code and intuitive design. I believe in continuous learning and staying up-to-date with the latest technologies.",
      whatIDo: "What I Do",
      webDev: "Web Development",
      webDevDesc: "Creating responsive and performant web applications using modern technologies.",
      appDev: "App Development",
      appDevDesc: "Building cross-platform mobile applications with native performance.",
      uiux: "UI/UX Design",
      uiuxDesc: "Designing intuitive and beautiful user interfaces and experiences.",
      digital: "Digital Strategy",
      digitalDesc: "Helping businesses grow their digital presence and reach.",
    },
    resume: {
      title: "Resume",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      present: "Present",
    },
    portfolio: {
      title: "Portfolio",
      all: "All",
      applications: "Applications",
      webDev: "Web Development",
      uiux: "UI/UX",
    },
    blog: {
      title: "Blog",
    },
    contact: {
      title: "Contact",
      name: "Full Name",
      email: "Email Address",
      message: "Your Message",
      send: "Send Message",
    },
    skillsSection: {
      title: "Technologies",
    },
  },
  es: {
    nav: {
      about: "Acerca",
      resume: "Currículum",
      portfolio: "Portafolio",
      blog: "Blog",
      contact: "Contacto",
    },
    sidebar: {
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
    },
    about: {
      title: "Sobre Mí",
      description: "Soy una desarrolladora de software apasionada con experiencia en la creación de aplicaciones web y móviles modernas. A lo largo de los años, he ayudado a numerosos clientes a dar vida a sus ideas a través de código limpio y diseño intuitivo. Creo en el aprendizaje continuo y en mantenerme actualizada con las últimas tecnologías.",
      whatIDo: "Lo Que Hago",
      webDev: "Desarrollo Web",
      webDevDesc: "Creando aplicaciones web responsivas y de alto rendimiento usando tecnologías modernas.",
      appDev: "Desarrollo de Apps",
      appDevDesc: "Construyendo aplicaciones móviles multiplataforma con rendimiento nativo.",
      uiux: "Diseño UI/UX",
      uiuxDesc: "Diseñando interfaces de usuario intuitivas y hermosas.",
      digital: "Estrategia Digital",
      digitalDesc: "Ayudando a empresas a crecer su presencia digital.",
    },
    resume: {
      title: "Currículum",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      present: "Presente",
    },
    portfolio: {
      title: "Portafolio",
      all: "Todos",
      applications: "Aplicaciones",
      webDev: "Desarrollo Web",
      uiux: "UI/UX",
    },
    blog: {
      title: "Blog",
    },
    contact: {
      title: "Contacto",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      message: "Tu Mensaje",
      send: "Enviar Mensaje",
    },
    skillsSection: {
      title: "Tecnologías",
    },
  },
  ja: {
    nav: {
      about: "自己紹介",
      resume: "履歴書",
      portfolio: "作品集",
      blog: "ブログ",
      contact: "お問い合わせ",
    },
    sidebar: {
      email: "メール",
      phone: "電話",
      location: "所在地",
    },
    about: {
      title: "自己紹介",
      description: "私はモダンなウェブとモバイルアプリケーションの作成を専門とする情熱的なソフトウェア開発者です。業界での長年の経験を通じて、クリーンなコードと直感的なデザインで多くのクライアントのアイデアを実現してきました。継続的な学習と最新技術への対応を信条としています。",
      whatIDo: "私の仕事",
      webDev: "ウェブ開発",
      webDevDesc: "モダンな技術を使用してレスポンシブで高性能なウェブアプリケーションを作成。",
      appDev: "アプリ開発",
      appDevDesc: "ネイティブパフォーマンスのクロスプラットフォームモバイルアプリケーションを構築。",
      uiux: "UI/UXデザイン",
      uiuxDesc: "直感的で美しいユーザーインターフェースをデザイン。",
      digital: "デジタル戦略",
      digitalDesc: "企業のデジタルプレゼンス向上を支援。",
    },
    resume: {
      title: "履歴書",
      experience: "経験",
      education: "学歴",
      skills: "スキル",
      present: "現在",
    },
    portfolio: {
      title: "作品集",
      all: "全て",
      applications: "アプリ",
      webDev: "ウェブ開発",
      uiux: "UI/UX",
    },
    blog: {
      title: "ブログ",
    },
    contact: {
      title: "お問い合わせ",
      name: "氏名",
      email: "メールアドレス",
      message: "メッセージ",
      send: "送信する",
    },
    skillsSection: {
      title: "技術スタック",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export type { Language };
