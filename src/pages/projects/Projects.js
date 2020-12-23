import { Helmet } from "react-helmet";

import { projects } from "./data";
import "./Projects.scss";

export function Projects() {
  return (
    <>
      <Helmet>
        <title>bertdida | projects</title>
      </Helmet>

      <section className="projects">
        <ul className="projects__list">
          {projects.map((project, index) => (
            <li className="projects__listItem" key={index}>
              <Project project={project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function Project({ project }) {
  const { title, logo, tags, description, links } = project;

  return (
    <div className="project">
      <div className="project__logo">{logo}</div>
      <div className="project__spacer project__spacer--sm" />

      {title}
      <div className="project__spacer project__spacer--sm" />

      <ProjectTags tags={tags} />
      <div className="project__spacer" />

      {description}
      <div className="project__divider" />

      <ProjectLinks links={links} />
    </div>
  );
}

function ProjectTags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag, index) => (
        <li className="tags__item" key={index}>
          {tag}
        </li>
      ))}
    </ul>
  );
}

function ProjectLinks({ links }) {
  return (
    <ul className="links">
      {links.map((link, index) => (
        <li className="links__item" key={index}>
          {link}
        </li>
      ))}
    </ul>
  );
}
