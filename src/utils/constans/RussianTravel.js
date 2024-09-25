import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";

// Обложка и доп.фото проекта
import cover from "../../images/projects/RussianTravel/cover.png";
import img1 from "../../images/projects/RussianTravel/img-1.png";
import img2 from "../../images/projects/RussianTravel/img-2.png";
import img3 from "../../images/projects/RussianTravel/img-3.png";
import img4 from "../../images/projects/RussianTravel/img-4.png";

export const RussianTravel = {
  id: 2,
  cover: cover,
  title: "Russian Travel",
  shortDescription:
    "Отзывчиво-адаптивный одностраничный сайт на тему наиболее интересных мест в России для путешествий.",
  description: `Данный проект был сделан в рамках образовательной программы Яндекс.Практикума.\r\n 
  Проект представляет собой создание отзывчиво-адаптивного одностраничного сайта на тему наиболее интересных мест в России для путешествий. Он корректно отображается на различных устройствах, будь то настольный компьютер, ноутбук, планшет, телефон.\r\n
  Работа была выполнена в 1 этап.\r\n
  В ней реализованы знания, навыки и техники, изученные за второй месяц обучения профессии веб-разработчика.\r\n
  В процессе работы над этим проектом, было сверстано 7 блоков по макету, представленному на популярном онлайн-сервисе "Figma". Были использованы в качестве инструментов как технологии, изученные на первом месяце обучения (флекс-бокс верстка, позиционирование элементов), так и новые, освоенные на третьем курсе программы (Grid Layout).\r\n
  Наиболее сложной частью проекта, реализация которой заняла довольно много времени, можно считать оптимизацию сайта для корректного отображения информации на экранах устройств шириной от 320 до 1280 пикселей включительно и выше. Для решения поставленной задачи были введены брейкпоинты для экранов наиболее широко распространенных размеров (320, 768, 1024 и 1280 пикселей). Получившийся результат сверен с расширением Pixel Perfect. Код выстроен в соответствии с методологией БЭМ, все файлы сгруппированы исходя из структуры "Nested".`,
  websiteUrl: "https://alexandrger.github.io/russian-travel/",
  githubUrl: "https://github.com/AlexandrGer/russian-travel",
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
