import { Link, useLocation } from "react-router-dom";

import { Menu, Item } from "../Menu";
import { Container } from "../Container";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <Container className="header__inner">
        <Link to="/" className="title">
          <h1>
            <span className="title--short">bertdida</span>
            <span className="title--long">herbert verdida</span>
          </h1>
        </Link>
        <Menu>
          <MenuItem to="/">About</MenuItem>
          <MenuItem to="/projects">Projects</MenuItem>
          <MenuItem to="/contact">Contact</MenuItem>
        </Menu>
      </Container>
    </header>
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
