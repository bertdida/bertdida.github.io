import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Toast.scss";

let counter = 0;
export const ToastContext = React.createContext();
export const useToast = () => React.useContext(ToastContext);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((message) => {
    const id = counter++;
    const newToast = {
      id,
      message,
      remove: () => {
        setToasts((prevToasts) =>
          prevToasts.filter(({ id }) => id !== newToast.id)
        );
      },
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }, []);

  const value = React.useMemo(() => ({ addToast, toasts }), [addToast, toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </ToastContainer>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

function ToastContainer({ children }) {
  return <div className="toastContainer">{children}</div>;
}

function Toast({ message, remove }) {
  const [isShown, setIsShown] = React.useState(false);
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    // Without this animation onenter does not work :/
    const timeoutId = setTimeout(() => setIsShown(true), 1);
    return function cleanUp() {
      clearInterval(timeoutId);
    };
  }, []);

  React.useEffect(() => {
    if (!isShown) return;
    const timeoutId = setTimeout(() => setIsShown(false), 1500);
    return function cleanUp() {
      clearInterval(timeoutId);
    };
  }, [isShown]);

  return (
    <CSSTransition
      in={isShown}
      timeout={300}
      classNames="toast"
      unmountOnExit
      onExited={remove}
      /**
       * Fixes Warning: findDOMNode is deprecated in StrictMode issue
       * https://github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879
       */
      nodeRef={rootRef}
    >
      <div ref={rootRef} className="toast">
        <div className="toast__content">{message}</div>
      </div>
    </CSSTransition>
  );
}
