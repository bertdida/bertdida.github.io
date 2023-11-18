import { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import { ToastProvider, useToast } from "./hooks/useToast";
import "./App.scss";

function App() {
  return (
    <main className="main">
      <HelmetProvider>
        <ToastProvider>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </ToastProvider>
      </HelmetProvider>
    </main>
  );
}

const StorageKey = {
  Theme: "bd.theme",
  IsSchemeToastShown: "bd.isSchemeToastShown",
};

// This has value when the user clicks the toggle button.
const userTheme = localStorage.getItem(StorageKey.Theme);

let isDarkSchemeDetected =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userTheme === "light") {
  isDarkSchemeDetected = false;
}

function Main() {
  const { addToast } = useToast();
  const [isDarkScheme, setIsDarkScheme] = useState(isDarkSchemeDetected);

  const onChangeSystemTheme = useCallback((event) => {
    setIsDarkScheme(event.matches);
  }, []);

  useEffect(() => {
    if (userTheme === null) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", onChangeSystemTheme);
    }

    return function cleanUp() {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", onChangeSystemTheme);
    };
  }, [onChangeSystemTheme]);

  useEffect(() => {
    document.body.dataset.scheme = isDarkScheme ? "dark" : "light";

    if (!isDarkScheme) {
      localStorage.removeItem(StorageKey.IsSchemeToastShown);
      return;
    }

    if (localStorage.getItem(StorageKey.IsSchemeToastShown) === null) {
      addToast("🐺 Okay, so you prefer dark mode.");
      localStorage.setItem(StorageKey.IsSchemeToastShown, new Date().getTime());
    }
  }, [isDarkScheme, addToast]);

  function toggleTheme() {
    setIsDarkScheme((prevState) => {
      const nextState = !prevState;
      localStorage.setItem(StorageKey.Theme, nextState ? "dark" : "light");
      return nextState;
    });
  }

  return (
    <main className="main">
      <Header toggleTheme={toggleTheme} isDarkScheme={isDarkScheme} />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </main>
  );
}

export default App;
