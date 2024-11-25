import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";
import JavaScript from "../../images/skills/JavaScript.svg";
import React from "../../images/skills/React.svg";

// Обложка и доп.фото проекта
import cover from "../../images/projects/AviaSerch/cover.png";
import img1 from "../../images/projects/AviaSerch/img-1.png";
import img2 from "../../images/projects/AviaSerch/img-2.png";
import img3 from "../../images/projects/AviaSerch/img-3.png";

export const AviaSerch = {
  id: 6,
  cover: cover,
  title: "Avia Serch",
  shortDescription: "Не Авиасейлс, но тоже можно найти дешевый авиабилет",
  projectPage: false,
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
  ],
};
