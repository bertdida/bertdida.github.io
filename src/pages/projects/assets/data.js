import { ExternalLink } from "../ExternalLink";
import {
  DevJobsPhIcon,
  DeclareThatColorIcon,
  PurplerRoofIcon,
  PoshSidekickIcon,
  TheRisingNFTIcon,
  LeadKlozerIcon,
} from "./icons";

export const projects = [
  {
    title: (
      <ExternalLink to="https://purpleroof.com/">
        <h3>Purple Roof</h3>
      </ExternalLink>
    ),
    logo: <PurplerRoofIcon style={{ "--width": "35px" }} />,
    description: (
      <>
        <p>
          Purple Roof is a real estate firm specializing in property listing and
          mortgage loan processing.
        </p>
        <p>
          As the Lead Full-stack Developer, I was responsible for the complete
          development of the application, from technical planning to final
          deployment — key technologies employed include NextJS, MySQL,
          Puppeteer, AWS S3, and Sendgrid.
        </p>
      </>
    ),
    tags: ["Next.js", "React", "Tailwind CSS", "AWS S3", "API Development"],
    links: [],
  },
  {
    title: (
      <ExternalLink to="https://poshsidekick.com/">
        <h3>Posh Sidekick</h3>
      </ExternalLink>
    ),
    logo: <PoshSidekickIcon style={{ "--width": "33px" }} />,
    description: (
      <>
        <p>
          Posh Sidekick streamlines{" "}
          <ExternalLink to="https://poshmark.com/">Poshmark</ExternalLink>{" "}
          selling with automated sharing, following, and sending out offers,
          ensuring continuous operation 24/7 without manual intervention.
        </p>
        <p>
          Hired as a Mobile Developer and Automation Specialist, I developed an
          <ExternalLink to="https://www.youtube.com/watch?v=ZccWRa4jLoQ">
            automated live selling
          </ExternalLink>{" "}
          feature that was instrumental in increasing our customer base to over
          500 in just a week after its launch.
        </p>
      </>
    ),
    tags: [
      "React Native",
      "Redux",
      "Express.js",
      "Puppeteer",
      "Web Socket",
      "Mobile Development",
    ],
    links: [
      <ExternalLink to="https://play.google.com/store/apps/details?id=com.ppt.poshsidekick&hl=en&gl=US">
        Google Play
      </ExternalLink>,
      <ExternalLink to="https://apps.apple.com/us/app/posh-sidekick/id1589949924">
        App Store
      </ExternalLink>,
    ],
  },
  {
    title: (
      <ExternalLink to="https://therisingnft.com">
        <h3>The Rising NFT</h3>
      </ExternalLink>
    ),
    logo: <TheRisingNFTIcon />,
    description: (
      <>
        <p>
          Rising NFT is a collection of 1,120 unique digital artworks based on{" "}
          <ExternalLink to="https://www.justinhammerart.com/">
            Justin Hammer
          </ExternalLink>
          's popular painting named "Rising".
        </p>
        <p>
          This project marked my introduction to web3 development. In my role, I
          handled a range of responsibilities such as deploying a smart
          contract, integrating the MetaMask wallet, interacting with the smart
          contract, and transforming wireframes into a React app.
        </p>
      </>
    ),
    tags: ["React", "Web3", "Metamask", "AWS CDK", "AWS Lambda"],
    links: [],
  },
  {
    title: (
      <ExternalLink to="https://www.leadklozer.com/">
        <h3>LeadKlozer</h3>
      </ExternalLink>
    ),
    logo: <LeadKlozerIcon />,
    description: (
      <>
        <p>
          LeadKlozer is a social media management tool that helps businesses
          track and engage with their leads on Facebook.
        </p>
        <p>
          As a Full-stack Developer, I was in charge of adding key features to
          the application. This included integrating Stripe for payments and
          developing a feature that filters Facebook post engagement in real
          time.
        </p>
      </>
    ),
    tags: [
      "React",
      "Laravel",
      "Stripe",
      "Facebook Graph API",
      "API Development",
    ],
    links: [],
  },
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
    tags: ["MERN Stack", "React", "CRON", "Web Scraping", "API Development"],
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
          , and currently has 200+ installations on packagecontrol.io.
        </p>
      </>
    ),
    tags: ["Python", "Regex", "Plugin Development"],
    links: [
      <ExternalLink to="https://github.com/bertdida/declare-that-color-st3">
        GitHub
      </ExternalLink>,
    ],
  },
];
