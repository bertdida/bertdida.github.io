import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import "./App.scss";

function App() {
  return (
    <main className="main">
      <HelmetProvider>
        <BrowserRouter>
          <Header />
          <Container>
            <Routes />
          </Container>
          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </main>
  );
}

export default App;
