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
          I am open to engaging in exciting freelance opportunities and
          projects. If you are interested in working with me, the most efficient
          way to reach me is by sending an email to&nbsp;
          <Link
            isExternal
            to="mailto:bertdida@gmail.com"
            onClick={onClickEmail}
          >
            bertdida@gmail.com
          </Link>
          .
        </p>

        <p>I look forward to hearing from you.</p>
      </section>
    </>
  );
}
