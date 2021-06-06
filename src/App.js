import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import { ToastProvider, useToast } from "./hooks/useToast";
import "./App.scss";

const isPrefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (isPrefersDarkMode) {
  document.body.dataset.scheme = "dark";
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    document.body.dataset.scheme = event.matches ? "dark" : "light";
  });

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

function Main() {
  const { addToast } = useToast();

  useEffect(() => {
    if (isPrefersDarkMode) {
      addToast("🐺 Okay, so you prefer dark mode.");
    }
  }, [addToast]);

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
