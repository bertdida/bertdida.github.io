import "./Container.scss";

export function Container({ children, className = null }) {
  return (
    <div className={`container ${className ? className : ""}`}>{children}</div>
  );
}
