import { useState } from "react";
import { Container } from "react-bootstrap";
import Intro from "./components/IntroComponent/Intro";
import NavBar from "./components/NavBarComponent/NavBar";
import "./style.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="main-container">
      <NavBar />
      {/* Section Intro */}
      <Intro />
    </Container>
  );
}

export default App;
