import { Container } from "react-bootstrap";
import About from "./components/AboutComponent/About";
import Contact from "./components/ContactComponent/Contact";
import Footer from "./components/FooterComponent/Footer";
import Intro from "./components/IntroComponent/Intro";
import NavBar from "./components/NavBarComponent/NavBar";
import PersonalProjects from "./components/PersonalProjectComponent/PersonalProjects";
import SideFloatingLeft from "./components/SideFloatingComponent/SideFloatingLeft";
import Work from "./components/WorkComponent/Work";
import "./style.scss";
// import NavRef from "./ref/NavRef";
import { useEffect, useRef, useState } from "react";
import FeaturedProject from "./components/FeaturedProjectComponent/FeaturedProject";

function App() {
  const intro = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        navRef={{ intro, about, experience, work, contact }}
        screenSize={screenSize}
      />
      {/* Section Intro */}
      <section ref={intro}>
        <Intro />
      </section>

      {/* Section About */}
      <section ref={about}>
        <About />
      </section>

      {/* Work History */}
      <section ref={experience}>
        <Work screenSize={screenSize} />
      </section>

      <section ref={experience}>
        <FeaturedProject screenSize={screenSize} />
      </section>

      <section ref={work}>
        <PersonalProjects screenSize={screenSize} />
      </section>
      <section ref={contact}>
        <Contact screenSize={screenSize} />
      </section>

      <Footer />
    </Container>
  );
}

export default App;
