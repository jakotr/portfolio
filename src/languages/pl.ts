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
  paint,
  recipe,
  sheep,
} from "../assets";

import { TranslationType } from "../types";

export default <TranslationType>{
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
        name: "Sheep Jump",
        description:
          "Jest to gra internetowa zbudowana przy użyciu JavaScript, HTML i CSS. Gra jest zainspirowana popularną grą mobilną Flappy Bird, ale z rolniczym twistem. Gracz kontroluje owcę lecącą przez farmę, unikając przeszkód. Gra została zaprojektowana jako prosta, ale wymagająca, z rosnącym poziomem trudności w miarę postępów gracza.",
        tags: [
          {
            name: "JavaScript",
          },
          {
            name: "HTML",
          },
          {
            name: "CSS",
          },
        ],
        image: sheep,
        git_link: "https://github.com/jakotr/sheep-jump",
        demo_link: "https://jakotr.github.io/sheep-jump/",
      },
      {
        name: "Paint App",
        description:
          "Jest to internetowa aplikacja do rysowania zbudowana przy użyciu JavaScript, HTML i CSS. Aplikacja jest inspirowana klasycznym programem Windows Paint, ale z wykorzystaniem nowoczesnych technologii internetowych. Użytkownik może wybrać różne narzędzia do rysowania. Aplikacja pozwala również użytkownikowi wybrać różne kolory i rozmiary dla swoich narzędzi.. Aplikacja została zaprojektowana jako intuicyjna i łatwa w użyciu, z przyjaznym interfejsem, który pozwala użytkownikom tworzyć i zapisywać swoje rysunki. Użytkownicy mogą również udostępniać swoje rysunki innym osobom, eksportując je jako pliki graficzne.",
        tags: [
          {
            name: "JavaScript",
          },
          {
            name: "HTML",
          },
          {
            name: "CSS",
          },
        ],
        image: paint,
        git_link: "https://github.com/jakotr/paint-app",
        demo_link: "https://jakotr.github.io/paint-app/",
      },
      {
        name: "Recipe App",
        description:
          "Jest to aplikacja internetowa zbudowana przy użyciu React, React Router i SASS. Aplikacja jest przeznaczona dla użytkowników do wyszukiwania przepisów na podstawie słów kluczowych i składników. Użytkownik może wprowadzić swoje zapytanie, a aplikacja zwróci listę odpowiednich przepisów, wraz z ich składnikami, czasem gotowania i wielkością porcji.",
        tags: [
          {
            name: "React",
          },
          {
            name: "JavaScript",
          },
          {
            name: "Sass",
          },
        ],
        image: recipe,
        git_link: "https://github.com/jakotr/recipe-app",
        demo_link: "https://jakotr.github.io/recipe-app/",
      },
      {
        name: "Minecraft Clone",
        description:
          "Aplikacja imitująca grę 'Minecraft', zbudowana przy użyciu biblioteki React oraz ThreeJS. Głównym celem projektu jest poznanie biblioteki ThreeJS i jej możliwości. Aplikacja jest prostym demo podobnym do Minecrafta, gdzie użytkownicy mogą się poruszać i budować podstawowe bloki. Aplikacja jest obecnie w trakcie rozwoju i w przyszłości zostanie dodanych więcej funkcji.",
        tags: [
          {
            name: "React",
          },
          {
            name: "Typescript",
          },
          {
            name: "ThreeJS",
          },
        ],
        image: recipe,
        git_link: "https://github.com/jakotr/minecraft-demo",
        demo_link: "https://jakotr.github.io/minecraft-demo/",
      },
    ],
  },
  contact: {
    title: "Kontakt.",
    subTitle: "Oddezwij się",
  },
} ;
