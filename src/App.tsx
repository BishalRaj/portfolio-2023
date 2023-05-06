import { Container } from "react-bootstrap";
import About from "./components/AboutComponent/About";
import Intro from "./components/IntroComponent/Intro";
import NavBar from "./components/NavBarComponent/NavBar";
import SideFloatingLeft from "./components/SideFloatingComponent/SideFloatingLeft";
import "./style.scss";
import Work from "./components/WorkComponent/Work";
import PersonalProjects from "./components/PersonalProjectComponent/PersonalProjects";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";

function App() {
  return (
    <Container fluid className="main-container">
      {/* Floating Nav Left */}
      <SideFloatingLeft />

      {/* Section NavBar */}
      <NavBar />

      {/* Section Intro */}
      <Intro />

      {/* <div className="w-100 bg-white">.</div> */}

      {/* Section About */}
      <About />

      {/* <div className="w-100 bg-white">.</div> */}

      {/* Work History */}

      <Work />

      <PersonalProjects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
