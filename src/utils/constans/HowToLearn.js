import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";

// Обложка и доп.фото проекта
import cover from "../../images/projects/HowToLearn/cover.png";
import img1 from "../../images/projects/HowToLearn/img-1.png";
import img2 from "../../images/projects/HowToLearn/img-2.png";
import img3 from "../../images/projects/HowToLearn/img-3.png";
import img4 from "../../images/projects/HowToLearn/img-4.png";

export const HowToLearn = {
  id: 1,
  cover: cover,
  title: "How to Learn",
  shortDescription: "Статичный сайт. Подсказки по эффективному обучению.",
  description: `Данный проект был сделан в рамках образовательной программы Яндекс.Практикума.\r\n
	Проект представляет собой простой одностраничный сайт на тему современных и эффективных методов обучения.\r\n
	Работа была выполнена в 2 этапа. В ней реализованы знания, навыки и техники, изученные за первый месяц обучения профессии веб-разработчика.\r\n
	На первом этапе было сверстано 6 блоков с использованием следующих технологий: флексбокс-верстки и позиционирования элементов, структура классов выстроена в соответствии с методологией БЭМ, применены семантические теги.\r\n
	На втором этапе было добавлено 5 блоков с подключением анимаций и трансформации к элементам (через кейфреймы и псевдоклассы), введены iframe. В проекте переработан способ организации файлов и кода, согласно структуре Nested по методологии БЭМ - изначально файлы группировались по своим типам.`,
  websiteUrl: "https://alexandrger.github.io/how-to-learn/",
  githubUrl: "https://github.com/AlexandrGer/how-to-learn",
  githubIcon: gitHubIcon,
  skillIcons: [
    { id: 1, name: "HTML", icon: HTML },
    { id: 2, name: "CSS", icon: CSS },
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
