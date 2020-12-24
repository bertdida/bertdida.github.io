import { Helmet } from "react-helmet";

import { Link } from "../../components/Link";
import "./Contact.scss";

export function Contact() {
  return (
    <>
      <Helmet>
        <title>bertdida | contact</title>
      </Helmet>

      <section className="contact">
        <h2 className="contact__title">Let's work together.</h2>

        <p>
          I'm available for interesting freelance work or projects. Big or
          small. The best way to contact me is to shoot me an email at&nbsp;
          <Link to="mailto:bertdida@gmail.com" isExternal>
            bertdida@gmail.com
          </Link>
          &nbsp;or DM me on&nbsp;
          <Link
            to="https://www.linkedin.com/in/bertdida"
            target="_blank"
            rel="noreferrer"
            isExternal
          >
            LinkedIn
          </Link>
          .
        </p>
      </section>
    </>
  );
}
