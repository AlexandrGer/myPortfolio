import { NavLink } from "react-router-dom";
import resume from "../../images/Резюме.pdf";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Проекты</NavLink>
        </li>
        <li>
          <a href={resume} target="blank">
            Резюме
          </a>
        </li>
      </ul>
    </nav>
  );
}
