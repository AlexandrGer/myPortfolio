import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";
import JavaScript from "../../images/skills/JavaScript.svg";
import React from "../../images/skills/React.svg";
import NodeJS from "../../images/skills/Node.js.svg";
import Express from "../../images/skills/Express.svg";
import MongoDB from "../../images/skills/MongoDB.png";

// Обложка и доп.фото проекта
import cover from "../../images/projects/RussianTravel/cover.png";
import img1 from "../../images/projects/RussianTravel/img-1.png";
import img2 from "../../images/projects/RussianTravel/img-2.png";
import img3 from "../../images/projects/RussianTravel/img-3.png";
import img4 from "../../images/projects/RussianTravel/img-4.png";

export const MoviesExsplorer = {
  id: 4,
  cover: cover,
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
  imageList: [
    {
      imageId: 1,
      imageName: cover,
    },
    {
      imageId: 2,
      imageName: img1,
    },
    {
      imageId: 3,
      imageName: img2,
    },
    {
      imageId: 4,
      imageName: img3,
    },
    {
      imageId: 5,
      imageName: img4,
    },
  ],
};
