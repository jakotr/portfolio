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
    title: 'Contact.',
    subTitle: 'Leave a message',
  }
};
