import { Helmet } from "react-helmet";

import { Link } from "../../components/Link";
import profilePicture from "../../assets/bertdida.jpeg";
import "./About.scss";

export function About() {
  return (
    <>
      <Helmet>
        <title>bertdida | about</title>
      </Helmet>

      <section className="about">
        <img className="about__profile" src={profilePicture} alt="bertdida" />
        <div className="spacer" />
        <div className="about__text">
          <h2 className="about__title">
            Kamusta! I'm Herbert Verdida, a Software Developer based in the
            Philippines.
          </h2>
          <div className="spacer" />
          <p className="about__description">
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
