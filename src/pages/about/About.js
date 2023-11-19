import { Helmet } from "react-helmet-async";

import { Link } from "components/Link";
import profilePicture from "./assets/bertdida.jpg";
import "./About.scss";

export function About() {
  return (
    <>
      <Helmet>
        <title>bertdida | about</title>
      </Helmet>

      <section className="about">
        <img width="100" height="100" src={profilePicture} alt="bertdida" />

        <div className="about__text">
          <h2 className="about__intro">
            Kumusta! I'm Herbert Verdida, a Software Developer based in the
            Philippines.
          </h2>

          <p>
            I am an expert in using JavaScript and TypeScript for implementing
            server-side logic and user-interactive visual elements within
            applications.
          </p>

          <p>
            My skillset also includes extensive experience with PHP, Python, and
            SQL databases.
          </p>

          <p>
            Interested in working together? Let's&nbsp;
            <Link to="/contact">connect</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
