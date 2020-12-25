import { ExternalLink } from "../ExternalLink";
import { DevJobsPhIcon, DeclareThatColorIcon, DevQuotesIcon } from "./icons";

export const projects = [
  {
    title: (
      <ExternalLink to="http://devjobsph.herokuapp.com">
        <h3>DevJobsPh</h3>
      </ExternalLink>
    ),
    logo: <DevJobsPhIcon />,
    description: (
      <>
        <p>A job aggregator for Filipino developers.</p>
        <p>
          Built with the MERN stack, this project aims to help developers save
          time finding a remote job in the industry.
        </p>
      </>
    ),
    tags: ["Express", "MongoDB", "React", "Scraping"],
    links: [
      <ExternalLink to="https://github.com/bertdida/devjobsph">
        GitHub
      </ExternalLink>,
    ],
  },
  {
    title: (
      <ExternalLink to="https://packagecontrol.io/packages/DeclareThatColor">
        <h3>DeclareThatColor</h3>
      </ExternalLink>
    ),
    logo: <DeclareThatColorIcon />,
    description: (
      <>
        <p>A tool that gives CSS hex codes an awesome name.</p>
        <p>
          Inspired by&nbsp;
          <ExternalLink to="https://chir.ag/projects/name-that-color">
            Chirag Mehta's name that color tool
          </ExternalLink>
          , I built a Sublime Text 3 plugin that helps developers convert CSS
          hex codes to their human-readable names. This idea became a&nbsp;
          <ExternalLink to="http://declarethatcolor.herokuapp.com">
            web app
          </ExternalLink>
          &nbsp;also built on Flask and React.
        </p>
      </>
    ),
    tags: ["Flask", "React", "Regex"],
    links: [
      <ExternalLink to="https://github.com/bertdida/declare-that-color-st3">
        GitHub - ST3
      </ExternalLink>,
      <ExternalLink to="https://github.com/bertdida/declare-that-color-web">
        GitHub - web app
      </ExternalLink>,
    ],
  },
  {
    title: (
      <ExternalLink to="http://devquotes.netlify.com">
        <h3>DevQuotes</h3>
      </ExternalLink>
    ),
    logo: <DevQuotesIcon />,
    description: (
      <>
        <p>
          Using&nbsp;
          <ExternalLink to="https://github.com/bertdida/twitter-quote-scraper">
            TwitterQuoteScraper
          </ExternalLink>
          , I was able to gather 800+ quotations, and I thought it would be a
          good idea to use these data for my next side-project.
        </p>
        <p>
          This project allowed me to explore technologies such as Progressive
          Web Apps, Firebase authentication, and Amazon Elasticsearch Service. A
          fun and challenging learning experience.
        </p>
      </>
    ),
    tags: ["Flask", "PostgreSQL", "React", "Material-Ui", "Firebase", "PWA"],
    links: [
      <ExternalLink to="https://github.com/bertdida/devquotes-react">
        GitHub - frontend
      </ExternalLink>,
      <ExternalLink to="https://github.com/bertdida/devquotes-flask">
        GitHub - backend
      </ExternalLink>,
    ],
  },
];
