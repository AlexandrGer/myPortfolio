import vkontakte from "../../images/social/vk.svg";
import telegram from "../../images/social/telegram.svg";
import github from "../../images/social/github.svg";
import codewars from "../../images/social/codewars.svg";
import "./Social.scss";

export default function Social() {
  return (
    <div className="social">
      <ul className="social__items">
        <li>
          <a href="https://t.me/A1exandrGer" target="blank">
            <img src={telegram} alt="telegram" className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://vk.com/id68199797" target="blank">
            <img src={vkontakte} alt="vkontakte" className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/AlexandrGer" target="blank">
            <img src={github} alt="github" className="social__icon" />
          </a>
        </li>
        <li>
          <a href="https://www.codewars.com/users/AlexandrGer" target="blank">
            <img src={codewars} alt="codewars" className="social__icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
