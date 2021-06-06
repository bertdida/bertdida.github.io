import { useEffect, useState } from "react";
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

const isDarkSchemeDetected =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function Main() {
  const { addToast } = useToast();
  const [isDarkScheme, setIsDarkScheme] = useState(isDarkSchemeDetected);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDarkScheme(event.matches);
      });
  }, []);

  useEffect(() => {
    const localStorageKey = "bd.isSchemeToastShown";
    document.body.dataset.scheme = isDarkScheme ? "dark" : "light";

    if (!isDarkScheme) {
      localStorage.removeItem(localStorageKey);
      return;
    }

    if (localStorage.getItem(localStorageKey) === null) {
      addToast("🐺 Okay, so you prefer dark mode.");
      localStorage.setItem(localStorageKey, new Date().getTime());
    }
  }, [isDarkScheme, addToast]);

  return (
    <main className="main">
      <Header />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </main>
  );
}

export default App;
