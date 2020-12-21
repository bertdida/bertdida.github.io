import { Link as RouterLink } from "react-router-dom";

import "./Link.scss";

export function Link({ children, ...rest }) {
  return (
    <RouterLink className="link" {...rest}>
      <span className="link__children">{children}</span>
    </RouterLink>
  );
}
