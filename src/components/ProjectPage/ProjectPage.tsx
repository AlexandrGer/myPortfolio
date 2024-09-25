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
        <div className="projectPage">
          <h1 className="title">{activeProject.title}</h1>
          {activeProject.imageList ? (
            <div>
              {activeProject.imageList.length ? (
                activeProject.imageList.length > 1 ? (
                  <AlbumPhotos
                    items={activeProject.imageList.map((el) => el.imageName)}
                  />
                ) : (
                  <img
                    src={activeProject.imageList[0].imageName}
                    alt=""
                    className="img"
                  />
                )
              ) : (
                ""
              )}
            </div>
          ) : (
            false
          )}
          <p
            className="text"
            dangerouslySetInnerHTML={{
              __html: prepareToHtml(activeProject.description),
            }}
          ></p>
          <p className="links">
            Хочешь взгялнуть на код? Не проблема, нажми{" "}
            <a href={activeProject.githubUrl} target="blank">
              тут
            </a>{" "}
            и попадешь на страницу GitHub'a где можешь ознакомиться с кодом
            поближе. А если ты хочешь посмотреть на страницу в действии, то
            переходи вот по этой{" "}
            <a href={activeProject.websiteUrl} target="blank">
              ссылке.{" "}
            </a>
          </p>
        </div>
      )}
    </>
  );
}
