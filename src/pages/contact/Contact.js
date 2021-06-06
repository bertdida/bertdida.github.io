import { Helmet } from "react-helmet-async";

import { Link } from "components/Link";
import { useOnClickEmail } from "hooks/useOnClickEmail";
import "./Contact.scss";

export function Contact() {
  const onClickEmail = useOnClickEmail();

  return (
    <>
      <Helmet>
        <title>bertdida | contact</title>
      </Helmet>

      <section className="contact">
        <h2 className="contact__title">Let's work together.</h2>

        <p>
          I'm available for interesting freelance work or projects. The best way
          to contact me is to shoot me an email at&nbsp;
          <Link
            isExternal
            to="mailto:bertdida@gmail.com"
            onClick={onClickEmail}
          >
            bertdida@gmail.com
          </Link>
          &nbsp;or DM me on&nbsp;
          <Link
            to="https://www.linkedin.com/in/bertdida"
            target="_blank"
            rel="noreferrer"
            isExternal
            onClick={onClickEmail}
          >
            LinkedIn
          </Link>
          .
        </p>
      </section>
    </>
  );
}
