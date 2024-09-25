import gitHubIcon from "../../images/github-90.png";

// Технологии задействованные в проекте
import HTML from "../../images/skills/HTML.svg";
import CSS from "../../images/skills/CSS.svg";
import JavaScript from "../../images/skills/JavaScript.svg";
import React from "../../images/skills/React.svg";

// Обложка и доп.фото проекта
import cover from "../../images/projects/Mesto/cover.png";
import img1 from "../../images/projects/Mesto/img-1.png";
import img2 from "../../images/projects/Mesto/img-2.png";
import img3 from "../../images/projects/Mesto/img-3.png";
import img4 from "../../images/projects/Mesto/img-4.png";

export const Mesto = {
  id: 3,
  cover: cover,
  title: "Mesto",
  shortDescription:
    "Регистрируйтесь, делитесь фото в общей ленте вместе с друзьями. Ставьте лайки.",
  description: `Данный проект был сделан в рамках образовательной программы Яндекс.Практикума.\r\n
   Проект представляет собой продолжение портирования на "React" адаптивного приложения (SPA) с профилем пользователя и фотокарточками, изначально написанного на нативных технологиях: HTML5, CSS3 и JavaScript. В данном проекте добавлен функционал регистрации и авторизации пользователей на сайте.\r\n
   Работа была выполнена в 3 глобальных этапа.\r\n
   Первый этап: \r\n
   &#8226; Верстка, реализация открытия и закрытия модального окна с возможностью редактирования данных профиля\r\n
   &#8226; Добавлено новое модальное окно с добавление карточки на страницу. Интерактивные элементы страницы: добавление и удаление карточки, лайки, открытие фотографии карточки в отдельном модальном окне, плавное открытие и закрытие попапов\r\n
   &#8226; Валидация форм, закрытие модальных кликом по оверлею и нажатием на клавишу "Escape"\r\n
   &#8226; Начало рефакторинга (переход к классам): добавление компонентов Card и FormValidator, разбиение на модули, директивы import & export\r\n
   &#8226; Завершение рефакторинга: структуризация проекта, переписывание функций под 5 новых классов (Section, Popup, PopupWithImage, PopupWithForm, UserInfo), сборка проекта Вебпаком\r\n
   &#8226; Подключение к серверу: загрузка информации о пользователе, обновление аватара, загрузка карточек (добавление и удаление), счетчик лайков, улучшение UX всех форм\r\n
   Второй этап: \r\n
   &#8226; Портирование HTML-разметки, CSS-стилей, реализация открытия и закрытия 4 модальных окон (EditProfilePopup, EditAvatarPopup, AddPlacePopup, ImagePopup), загрузка данных с сервера\r\n
   &#8226; Написание функционала с передачей данных на сервер\r\n
   Третий этап:\r\n
   &#8226; Верстка дополнительных компонентов (стартовых окон с формами регистрации и авторизации пользователей) и элемента кнопки выхода из личного кабинета, написание функционала`,
  websiteUrl: "https://alexandrger.github.io/react-mesto-auth",
  githubUrl: "https://github.com/AlexandrGer/react-mesto-auth",
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
    {
      imageId: 5,
      imageName: img4,
    },
  ],
};
