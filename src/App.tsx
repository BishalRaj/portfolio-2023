import { useState } from "react";
import { Container } from "react-bootstrap";
import Intro from "./components/IntroComponent/Intro";
import NavBar from "./components/NavBarComponent/NavBar";
import SideFloatingLeft from "./components/SideFloatingComponent/SideFloatingLeft";
import "./style.scss";

function App() {
  return (
    <Container fluid className="main-container">
      {/* Floating Nav Left */}
      <SideFloatingLeft />

      {/* Section NavBar */}
      <NavBar />

      {/* Section Intro */}
      <Intro />
    </Container>
  );
}

export default App;
