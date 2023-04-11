import {
  logoFree,
  logoID,
  html,
  css,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  git,
  vue,
  jquery,
  next,
  bootstrap,
  sass,
  carrent,
} from "../assets";

export default {
  intro: {
    name: "Jakub Otręba",
    position: "Front-End Developer",
  },
  about: `Frontend Developer w firmie Image Design w Opolu -
  posiadam doświadczenie komercyjne w technologii
  JavaScript, Jquery. Rozwijam się również w bibliotkach:
  React,, Typescript, Vue oraz NextJS - podczas
  tworzenia stron oraz sklepów intenetowych. Ponadto,
  ukończyłem studia inżynierskie na kierunku Informatyka
  na Politechnice Opolskiej.`,
  experience: {
    title: "Doświadczenie zawodowe.",
    subTitle: "Gdzie pracowałem dotychczas",
    companies: [
      {
        title: "Web Developer",
        company_name: "Freelancer",
        icon: logoFree,
        iconBg: "#383E56",
        date: "Lis 2019 - Lip 2020",
        points: [
          "Stworzenie platformy wirtualnych targów na platfromie Wordpress",
          "Tworzenie stron opartych o Wordpress oraz Prestashop",
          "Tworzenie animacji przy użyciu Canvas",
          "Wykorzystane technologie: Wordpress, Prestashop, HTML, CSS, JavaScript",
        ],
      },
      {
        title: "Front-end Developer",
        company_name: "Image Design",
        icon: logoID,
        iconBg: "#E6DEDD",
        date: "Lis 2020 - Obecnie",
        points: [
          "Kodowanie szablonów graficznych sklepów Internetowych",
          "Tworzenie stron typu landing page i one page",
          "Obsługa platformy ecommerce Atomstore",
          "Dbanie o pozycjonowanie stron w oparciu o Core Web Vitals",
          "Pisanie dedykowanych skryptów pod potrzeby klientów",
          "Współpraca z zespołem przy planowaniu projektów",
          "Wykorzystane technologie: HTML, LESS, CSS, JAVASCRIPT, JQUERY, CAKEPHP",
        ],
      },
    ],
  },
  tech: {
    title: "Technologie.",
    subTitle: "Czego się nauczyłem",
    technologies: [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "vue",
        icon: vue,
      },
      {
        name: "jquery",
        icon: jquery,
      },
      {
        name: "next",
        icon: next,
      },
      {
        name: "bootstrap",
        icon: bootstrap,
      },
      {
        name: "sass",
        icon: sass,
      },
    ],
  },
  projects: {
    title: "Projekty.",
    subTitle: "Co zrobiłem",
    list: [
      {
        name: "Car Rent",
        description:
          "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: carrent,
        git_link: "https://github.com/",
      },
    ],
  },
  contact: {
    title: "Kontakt.",
    subTitle: "Oddezwij się",
  },
};
