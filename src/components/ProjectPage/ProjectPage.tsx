import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../utils/constans/projects";
import { IProject } from "../../types/IProject";
import "./ProjectPage.scss";

export default function ProjectPage() {
  const { id } = useParams();
  const [activeProject, setActiveProject] = useState<IProject>();

  useEffect(() => {
    if (id) {
      setActiveProject(projects.find((e) => e.id === +id));
    }
  }, [id]);

  return (
    <>
      {activeProject && (
        <div>
          <h1>{activeProject.title}</h1>
          <p>{activeProject.description}</p>
          <p>{activeProject.shortDescription}</p>
          <div></div>
        </div>
      )}
    </>
  );
}
