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
        <p>
          DevJobsPh consolidates Software Development jobs from multiple job
          posting sites in the Philippines.
        </p>
        <p>
          It does this by utilizing axios, cheerio, Puppeteer, and MongoDB to
          gather and store data — which are then served by Express.js + React
          app.
        </p>
      </>
    ),
    tags: [
      "MERN Stack",
      "React Bootstrap",
      "CRON",
      "Web Scraping",
      "API Development",
    ],
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
        <p>
          Inspired by&nbsp;
          <ExternalLink to="https://chir.ag/projects/name-that-color">
            Chirag Mehta's name that color tool
          </ExternalLink>
          , DeclareThatColor is a Sublime Text 3 plugin that aims to help
          developers define CSS hex codes to their human-readable color names.
        </p>

        <p>
          It was mentioned in the CSS-Tricks article,&nbsp;
          <ExternalLink to="https://css-tricks.com/what-do-you-name-color-variables">
            What do you name color variables?
          </ExternalLink>
          , and currently has 150+ installations on packagecontrol.io.
        </p>
        <p>
          I also built a web app version of this project, using Flask and React
          — check it live&nbsp;
          <ExternalLink to="https://declarethatcolor.herokuapp.com">
            here
          </ExternalLink>
          .
        </p>
      </>
    ),
    tags: ["Regex", "Plugin Development", "Flask", "React"],
    links: [
      <ExternalLink to="https://github.com/bertdida/declare-that-color-st3">
        GitHub - ST3
      </ExternalLink>,
      <ExternalLink to="https://github.com/bertdida/declare-that-color-web">
        GitHub - web
      </ExternalLink>,
    ],
  },
  {
    title: (
      <ExternalLink to="https://devquotes-react.vercel.app">
        <h3>DevQuotes</h3>
      </ExternalLink>
    ),
    logo: <DevQuotesIcon />,
    description: (
      <>
        <p>
          DevQuotes is a random quote generator built specifically for Software
          Developers — it's a follow-up to my&nbsp;
          <ExternalLink to="https://github.com/bertdida/twitter-quote-scraper">
            TwitterQuoteScraper
          </ExternalLink>
          &nbsp;project.
        </p>
        <p>
          This project allowed me to explore technologies such as Progressive
          Web Apps, Firebase authentication, JSON Web Token, and Amazon
          Elasticsearch Service.
        </p>
      </>
    ),
    tags: [
      "Flask",
      "PostgreSQL",
      "React",
      "Material-Ui",
      "Firebase",
      "PWA",
      "API Development",
    ],
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
