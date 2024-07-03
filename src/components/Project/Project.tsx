import { IProject } from "../../types/IProject";
import { Link } from "react-router-dom";
import "./Project.scss";

type Props = {
  item: IProject;
};

export default function Project({ item }: Props) {
  return (
    <>
      <div className="project">
        <img src={item.cover} alt={item.title} />
        <div className="project__container">
          <a href={item.githubUrl} target="blank" className="link">
            <img src={item.githubIcon} alt="icon" />
          </a>
          {item.websiteUrl ? (
            <a href={item.websiteUrl} target="blank" className="project__title">
              {item.title}
            </a>
          ) : (
            <h2 className="project__title"> {item.title}</h2>
          )}
          <p className="project__description">{item.shortDescription}</p>
          <ul className="project__tech">
            {item.skillIcons.map((tech) => (
              <li key={tech.id}>
                <img src={tech.icon} alt={tech.name} />
              </li>
            ))}
          </ul>
          <Link to={`/projects/${item.id}`} className="project__link">
            Подробнее о проекте &#8594;
          </Link>
        </div>
      </div>
    </>
  );
}
