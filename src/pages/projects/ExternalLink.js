import { Link } from "components/Link";

export function ExternalLink(props) {
  return <Link target="_blank" rel="noreferrer" isExternal {...props} />;
}
