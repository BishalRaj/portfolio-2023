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
import NavRef from "./ref/NavRef";
import { useRef } from "react";
function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const onNavClick = (stateRef: any) => {
    window.scrollTo({
      top: stateRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Container fluid className="main-container">
      {/* Floating Nav Left */}
      <SideFloatingLeft />
      {/* Section NavBar */}
      <NavBar
        onNavClick={onNavClick}
        navRef={{ about, experience, work, contact }}
      />
      {/* Section Intro */}
      <section>
        <Intro />
      </section>

      {/* Section About */}
      <section ref={about}>
        <About />
      </section>

      {/* Work History */}
      <section ref={experience}>
        <Work />
      </section>
      <section ref={work}>
        <PersonalProjects />
      </section>
      <section ref={contact}>
        <Contact />
      </section>

      <Footer />
    </Container>
  );
}

export default App;
