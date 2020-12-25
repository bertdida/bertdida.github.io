import { useEffect, useRef, useState } from "react";

import "./Image.scss";

export function Image({ size, alt, ...rest }) {
  const root = useRef();
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

  useEffect(() => {
    root.current.style.setProperty("--size", `${size}px`);
  }, [size]);

  return (
    <div className={`image ${isLoading ? "image--isLoading" : ""}`} ref={root}>
      <img className="image__preview" alt={alt} onLoad={onLoad} {...rest} />
    </div>
  );
}
