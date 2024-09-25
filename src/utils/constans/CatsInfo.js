import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";
import JavaScript from "../../images/skills/JavaScript.svg";
import React from "../../images/skills/React.svg";
import Redux from "../../images/skills/Redux.svg";

// Обложка и доп.фото проекта
import cover from "../../images/projects/CatsInfo/cover.png";
import img1 from "../../images/projects/CatsInfo/img-1.png";
import img2 from "../../images/projects/CatsInfo/img-2.png";
import img3 from "../../images/projects/CatsInfo/img-3.png";
import img4 from "../../images/projects/CatsInfo/img-4.png";

export const CatsInfo = {
  id: 5,
  cover: cover,
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
