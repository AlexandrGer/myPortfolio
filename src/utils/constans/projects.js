import gitHubIcon from "../../images/github-90.png";

// Превью проекта
import HowToLearn from "../../images/projects/how-to-learn.png";
import RussianTravel from "../../images/projects/RussianTravel.png";
import Mesto from "../../images/projects/Mesto.png";
import CatsInfo from "../../images/projects/CatsInfo.png";
import AviaSerch from "../../images/projects/AviaSerch.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";
import JavaScript from "../../images/skills/JavaScript.svg";
import React from "../../images/skills/React.svg";
import NodeJS from "../../images/skills/Node.js.svg";
import Express from "../../images/skills/Express.svg";
import MongoDB from "../../images/skills/MongoDB.png";
import Redux from "../../images/skills/Redux.svg";

export const projects = [
  {
    id: 1,
    cover: HowToLearn,
    title: "How to Learn",
    shortDescription: "Статичный сайт. Подсказки по эффективному обучению.",
    description: "",
    websiteUrl: "https://alexandrger.github.io/how-to-learn/",
    githubUrl: "https://github.com/AlexandrGer/how-to-learn",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
    ],
  },
  {
    id: 2,
    cover: RussianTravel,
    title: "Russian Travel",
    shortDescription:
      "Отзывчиво-адаптивный одностраничный сайт на тему наиболее интересных мест в России для путешествий.",
    description: "",
    websiteUrl: "https://alexandrger.github.io/russian-travel/",
    githubUrl: "https://github.com/AlexandrGer/russian-travel",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
    ],
  },
  {
    id: 3,
    cover: Mesto,
    title: "Mesto",
    shortDescription:
      "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.",
    description: "",
    websiteUrl: "https://alexandrger.github.io/react-mesto-auth",
    githubUrl: "https://github.com/AlexandrGer/react-mesto-auth",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
      { id: 3, name: "JavaScript", icon: JavaScript },
      { id: 4, name: "React", icon: React },
    ],
  },
  {
    id: 4,
    cover: Mesto,
    title: "Movies Exsplorer",
    shortDescription:
      "Регистрируйтесь, ищите фильмы и сохраняйте их в избранное.",
    description: "",
    websiteUrl: "",
    githubUrl: "https://github.com/AlexandrGer/movies-explorer-frontend",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
      { id: 3, name: "JavaScript", icon: JavaScript },
      { id: 4, name: "React", icon: React },
      { id: 5, name: "Node", icon: NodeJS },
      { id: 6, name: "Express", icon: Express },
      { id: 7, name: "Mongo", icon: MongoDB },
    ],
  },
  {
    id: 5,
    cover: CatsInfo,
    title: "Cats Info",
    shortDescription:
      "Случайные картинки и факты о кошках. Понравился факт сохраняйте карточку в избранное.",
    description: "",
    websiteUrl: "https://alexandrger.github.io/cats-info/",
    githubUrl: "https://github.com/AlexandrGer/cats-info",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
      { id: 3, name: "JavaScript", icon: JavaScript },
      { id: 4, name: "React", icon: React },
      { id: 5, name: "Redux", icon: Redux },
    ],
  },
  {
    id: 6,
    cover: AviaSerch,
    title: "Avia Serch",
    shortDescription: "Не Авиасейлс, но тоже можно найти дешевый авиабилет",
    description: "",
    websiteUrl: "https://alexandrger.github.io/avia-search/",
    githubUrl: "https://github.com/AlexandrGer/avia-search",
    githubIcon: gitHubIcon,
    skillIcons: [
      { id: 1, name: "HTML", icon: HTML },
      { id: 2, name: "CSS", icon: CSS },
      { id: 3, name: "JavaScript", icon: JavaScript },
      { id: 4, name: "React", icon: React },
    ],
  },
];
