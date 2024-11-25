import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../utils/constans/projects";
import { IProject } from "../../types/IProject";
import AlbumPhotos from "../../ui/AlbumPhotos/AlbumPhotos";
import "./ProjectPage.scss";

export default function ProjectPage() {
  const { id } = useParams();
  const [activeProject, setActiveProject] = useState<IProject>();

  useEffect(() => {
    if (id) {
      setActiveProject(projects.find((e) => e.id === +id));
    }
  }, [id]);

  const prepareToHtml = (text: string) => {
    return text.replaceAll("\r\n", "<br />");
  };

  return (
    <>
      {activeProject && (
        <div className="project-page">
          <h1 className="title">{activeProject.title}</h1>
          {activeProject.imageList && (
            <>
              {activeProject.imageList && activeProject.imageList.length > 1 ? (
                <AlbumPhotos
                  items={activeProject.imageList.map((el) => el.imageName)}
                />
              ) : (
                <div className="wrapper">
                  <img
                    src={activeProject.imageList[0].imageName}
                    alt={activeProject.imageList[0].imageName}
                    className="img"
                  />
                </div>
              )}
            </>
          )}
          {activeProject.description && (
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: prepareToHtml(activeProject.description),
              }}
            ></p>
          )}
          <p className="links">
            Хочешь взгялнуть на код?
            <br /> Не проблема, нажми&nbsp;
            <a href={activeProject.githubUrl} target="blank">
              тут
            </a>
            &nbsp;и попадешь на страницу GitHub'a, где можешь ознакомиться с
            кодом поближе.
            <br /> А если ты хочешь посмотреть на страницу в действии, то
            переходи вот по этой&nbsp;
            <a href={activeProject.websiteUrl} target="blank">
              ссылке.
            </a>
          </p>
        </div>
      )}
    </>
  );
}
