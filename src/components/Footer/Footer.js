import { AiFillMail } from "react-icons/ai";
import { ImStackoverflow, ImGithub } from "react-icons/im";
import { GrLinkedin, GrSkype } from "react-icons/gr";
import { FiCodepen } from "react-icons/fi";

import { Menu, Item as MenuItem } from "components/Menu";
import { Container } from "components/Container";
import { useOnClickEmail } from "hooks/useOnClickEmail";
import "./Footer.scss";

export function Footer() {
  const onClickEmail = useOnClickEmail();

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <Menu>
          <MenuItem
            href="mailto:bertdida@gmail.com"
            aria-label="gmail.com"
            title="gmail.com"
            onClick={onClickEmail}
            active
          >
            <AiFillMail />
          </MenuItem>

          <MenuItem
            href="https://join.skype.com/invite/d7hlrQjyie0P"
            target="_blank"
            rel="noreferrer"
            aria-label="skype.com"
            title="skype.com"
          >
            <GrSkype />
          </MenuItem>

          <MenuItem
            href="https://www.linkedin.com/in/bertdida/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin.com"
            title="linkedin.com"
          >
            <GrLinkedin />
          </MenuItem>

          <MenuItem
            href="https://github.com/bertdida"
            target="_blank"
            rel="noreferrer"
            aria-label="github.com"
            title="github.com"
          >
            <ImGithub />
          </MenuItem>

          <MenuItem
            href="https://codepen.io/bertdida"
            target="_blank"
            rel="noreferrer"
            aria-label="codepen.io"
            title="codepen.io"
          >
            <FiCodepen />
          </MenuItem>

          <MenuItem
            href="https://stackoverflow.com/users/8062659/bertdida?tab=profile"
            target="_blank"
            rel="noreferrer"
            aria-label="stackoverflow.com"
            title="stackoverflow.com"
          >
            <ImStackoverflow />
          </MenuItem>
        </Menu>
      </Container>
    </footer>
  );
}
