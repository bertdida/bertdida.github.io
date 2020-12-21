import "./Menu.scss";

export function Menu({ children }) {
  return (
    <nav className="menu">
      <ul className="menu__list">{children}</ul>
    </nav>
  );
}

export function Item({ children, as = null, active = false, ...rest }) {
  const Component = as || "a";

  return (
    <li className={`menu__listItem ${active ? "menu__listItem--active" : ""}`}>
      <Component className="menu__link" {...rest}>
        {children}
      </Component>
    </li>
  );
}
