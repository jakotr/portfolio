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

export default <TranslationType> {
  intro: {
    name: "Jakub Otręba",
    position: "Front-End Developer",
  },
  about: `Frontend Developer at Image Design in Opole - I have
  commercial experience in JavaScript, Jquery
  technology. I also develop in libraries: React,
  Typescript, Vue and NextJS - while developing
  websites and intenet stores. In addition, I graduated
  from the Opole University of Technology with an
  engineering degree in Computer Science.
  `,
  experience: {
    title: "Work Experience.",
    subTitle: "What have I done so far",
    companies: [
      {
        title: "Web Developer",
        company_name: "Freelancer",
        icon: logoFree,
        iconBg: "#383E56",
        date: "Nov 2019 - Jul 2020",
        points: [
          "Creation of a virtual trade fair platform on Wordpress platfrom",
          "Creating sites based on Wordpress and Prestashop",
          "Animations using canvas",
          "Technologies used: Wordpress, Prestashop, HTML, CSS, JavaScrip",
        ],
      },
      {
        title: "Front-end Developer",
        company_name: "Image Design",
        icon: logoID,
        iconBg: "#E6DEDD",
        date: "Nov 2020 - Present",
        points: [
          "Coding graphic templates for online stores",
          "Support of the Atomstore ecommerce platform",
          "Taking care of SEO based on Core Web Vitals",
          "Writing dedicated scripts for clients needs",
          "Collaborate with the team in project planning",
          "Technologies used: HTML, LESS, CSS, JAVASCRIPT, JQUERY, CAKEPHP"
        ],
      },
    ],
  },
  tech: {
    title: "Technologies.",
    subTitle: "What have I learned",
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
    title: "Projects.",
    subTitle: "What have I done so far",
    list: [
      {
        name: "Sheep Jump",
        description:
          "This is a web game built using JavaScript, HTML and CSS. The game is inspired by the popular mobile game Flappy Bird, but with a farming twist. The player controls a sheep flying through a farm, avoiding obstacles. The game is designed to be simple but challenging, with increasing difficulty as the player progresses.",
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
          "It is a web-based drawing application built using JavaScript, HTML and CSS. The application is inspired by the classic Windows Paint program, but using modern web technologies. The user can choose different drawing tools. The application also allows the user to choose different colors and sizes for their tools. The application is designed to be intuitive and easy to use, with a user-friendly interface that allows users to create and save their drawings. Users can also share their drawings with others by exporting them as image files.",
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
          "This is a web application built using React, React Router and SASS. The app is designed for users to search for recipes based on keywords and ingredients. Users can enter their query and the app will return a list of relevant recipes, along with their ingredients, cooking times and serving sizes.",
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
          "This is an application built using React library and ThreeJS. The main goal of the project is to learn ThreeJS library and its capabilities. The app is a simple Minecraft-like demo, where users can move around and build basic blocks. The application is currently under development and more features will be added in the future.",
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
    title: 'Contact.',
    subTitle: 'Leave a message',
  }
};
