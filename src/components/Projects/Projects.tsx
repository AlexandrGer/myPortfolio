import { projects } from "../../utils/constans/projects";
import Project from "../Project/Project";
import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects">
      <h1 className="projects__title">коллекция</h1>
      <ul className="projects__items">
        {projects
          .map((item) => (
            <li key={item.id}>
              <Project item={item} />
            </li>
          ))
          .reverse()}
      </ul>
    </section>
  );
}
