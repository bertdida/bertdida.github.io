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
        <p>
          Currently, most of these side-projects are using Heroku free-tier as a
          hosting service. It might take some time to load when you visit its
          page.
        </p>

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

      {title}
      <HorizontalList items={tags} />

      {description}
      <div className="project__divider" />
      <HorizontalList items={links} />
    </div>
  );
}

function HorizontalList({ items }) {
  return (
    <ul className="horizontalList">
      {items.map((item, index) => (
        <li className="horizontalList__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
