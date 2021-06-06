import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import { ToastProvider } from "./hooks/useToast";
import "./App.scss";

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
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
            <Header />
            <Container>
              <Routes />
            </Container>
            <Footer />
          </BrowserRouter>
        </ToastProvider>
      </HelmetProvider>
    </main>
  );
}

export default App;
