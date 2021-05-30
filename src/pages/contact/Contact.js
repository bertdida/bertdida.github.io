import { Helmet } from "react-helmet-async";

import { Link } from "components/Link";
import { useToast } from "hooks/useToast";
import "./Contact.scss";

const emojis = ["🤘", "🚀", "🙌", "👍", "🦄", "📋", "🍻", "🍕", "✅", "🍩"];
let emojiIndex = 0;

export function Contact() {
  const { toasts, addToast } = useToast();

  function onClickEmail(event) {
    event.preventDefault();
    if (toasts.length) return;

    navigator.clipboard.writeText(event.target.textContent);

    emojiIndex = emojiIndex >= emojis.length ? 0 : emojiIndex;
    addToast(`${emojis[emojiIndex]} Email copied to clipboard!`);
    emojiIndex++;
  }

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
          >
            LinkedIn
          </Link>
          .
        </p>
      </section>
    </>
  );
}
