import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import { ToastProvider } from "./hooks/useToast";
import "./App.scss";

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
