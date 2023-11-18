import { useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import { Menu, Item } from "components/Menu";
import { Container } from "components/Container";
import "./Header.scss";

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkScheme: PropTypes.bool,
};

export function Header(props) {
  const ButtonIcon = props.isDarkScheme ? IoSunnySharp : IoMoonSharp;

  return (
    <header className="header">
      <Container className="header__inner">
        <Title />
        <Menu>
          <MenuItem to="/">About</MenuItem>
          <MenuItem to="/projects">Projects</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
          <Item
            as="button"
            className="menu__button"
            onClick={props.toggleTheme}
            title="Toggle theme"
          >
            <ButtonIcon size={18} style={{ color: "var(--color-fg)" }} />
          </Item>
        </Menu>
      </Container>
    </header>
  );
}

function Title() {
  const title = useRef();

  function onHover() {
    const { current } = title;
    current.dataset.content = current.textContent;
    current.textContent = "herbert verdida";
  }

  function onHoverOut() {
    const { current } = title;
    current.textContent = current.dataset.content;
  }

  return (
    <Link
      to="/"
      className="title"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <h1 ref={title}>bertdida</h1>
    </Link>
  );
}

function MenuItem({ children, to }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Item as={Link} to={to} active={isActive}>
      {children}
    </Item>
  );
}
