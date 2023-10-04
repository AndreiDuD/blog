import reactLogo from "../assets/react.svg";
import nextJsLogo from "../assets/next-js.svg";
import viteJsLogo from "../assets/vitejs.svg";
import tailwindCssLogo from "../assets/tailwind-css.svg";
import pythonLogo from "../assets/python.svg";
import javaScript from "../assets/logo-javascript.svg";
import blog from "../assets/Blog.png";

export const servicesList = [
  {
    id: 1,
    title: "React",
    logo: reactLogo,
  },
  {
    id: 2,
    title: "Next.js",
    logo: nextJsLogo,
  },
  {
    id: 3,
    title: "Vite",
    logo: viteJsLogo,
  },
  {
    id: 4,
    title: "Tailwind.css",
    logo: tailwindCssLogo,
  },
  {
    id: 5,
    title: "Python",
    logo: pythonLogo,
  },
  {
    id: 6,
    title: "Javascript",
    logo: javaScript,
  },
];

export const projects = [
  {
    id: 1,
    src: blog,
    demoLink: "",
    codeLink: "",
    tags: [
      {
        name: "react",
        color: "react-gradient",
      },
      {
        name: "javascript",
        color: "javascript-gradient",
      },
      {
        name: "python",
        color: "python-gradient",
      },
    ],
  },
  {
    id: 2,
    src: blog,
    demoLink: "",
    codeLink: "",
    tags: [
      {
        name: "react",
        color: "react-gradient",
      },
      {
        name: "vite",
        color: "vitejs-gradient",
      },
      {
        name: "tailwindcss",
        color: "tailwindcss-gradient",
      },
    ],
  },
  {
    id: 3,
    src: blog,
    demoLink: "",
    codeLink: "",
    tags: [
      {
        name: "react",
        color: "react-gradient",
      },
      {
        name: "vite",
        color: "vitejs-gradient",
      },
      {
        name: "tailwindcss",
        color: "tailwindcss-gradient",
      },
    ],
  },
];
