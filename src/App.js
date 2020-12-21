import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "./components/Container";
import { Routes } from "./Routes";
import "./App.scss";

function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes />
        </Container>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
