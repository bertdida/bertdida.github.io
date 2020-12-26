import { Helmet } from "react-helmet";

import { Image } from "./Image";
import { Link } from "components/Link";
import profilePicture from "./assets/bertdida.jpeg";
import "./About.scss";

export function About() {
  return (
    <>
      <Helmet>
        <title>bertdida | about</title>
      </Helmet>

      <section className="about">
        <Image size={100} src={profilePicture} alt="bertdida" />

        <div className="about__text">
          <h2 className="about__intro">
            Kamusta! I'm Herbert Verdida, a Software Developer from the
            Philippines.
          </h2>

          <p>
            I primarily use PHP, Python, and JavaScript in implementing
            server-side logic and visual elements that users interact with
            within the application.
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
