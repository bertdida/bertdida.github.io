import { Link as RouterLink } from "react-router-dom";

import "./Link.scss";

export function Link({ children, isExternal = false, ...rest }) {
  if (isExternal) {
    return <ExternalLink children={children} {...rest} />;
  }

  return (
    <RouterLink className="link" {...rest}>
      <span className="link__children">{children}</span>
    </RouterLink>
  );
}

function ExternalLink({ children, to, ...rest }) {
  return (
    <a className="link" href={to} {...rest}>
      <span className="link__children">{children}</span>
    </a>
  );
}
