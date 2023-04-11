//translations
export type TranslationType = {
  intro: {
    name: string;
    position: string;
  };
  about: string;
  experience: {
    title: string;
    subTitle: string;
    companies: {
      title: string;
      company_name: string;
      icon: string;
      iconBg: string;
      date: string;
      points: string[];
    }[];
  };
  tech: {
    title: string;
    subTitle: string;
    technologies: {
      name: string;
      icon: string;
    }[];
  };
  projects: {
    title: string;
    subTitle: string;
    list: {
      name: string;
      description: string;
      tags: {
        name: string;
        color: string;
      }[];
      image: string;
      git_link: string;
      demo_link?: string;
    }[];
  };
  contact: {
    title: string;
    subTitle: string;
  };
};

export type LanguageType = {
  pl: TranslationType;
  en: TranslationType;
};
