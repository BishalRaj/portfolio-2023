import React from "react";
import { Container } from "react-bootstrap";
import { lazy, useEffect, useRef, useState } from "react";
import "./style.scss";
const Intro = lazy(() => import("./components/IntroComponent/Intro"));
const About = lazy(() => import("./components/AboutComponent/About"));
const Contact = lazy(() => import("./components/ContactComponent/Contact"));
const PersonalProjects = lazy(
  () => import("./components/PersonalProjectComponent/PersonalProjects")
);
const Work = lazy(() => import("./components/WorkComponent/Work"));
import NavBar from "./components/NavBarComponent/NavBar";
import SideFloatingLeft from "./components/SideFloatingComponent/SideFloatingLeft";
// import NavRef from "./ref/NavRef";
import FeaturedProject from "./components/FeaturedProjectComponent/FeaturedProject";
import Footer from "./components/FooterComponent/Footer";

function App() {
  // const [loading, setLoading] = useState(true);
  const intro = useRef(null);
  const about = useRef(null);
  const experience = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);

  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

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
      {screenSize > 428 ? <SideFloatingLeft /> : ""}
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

      <section ref={work}>
        <React.Suspense fallback={<>hello</>}>
          <FeaturedProject screenSize={screenSize} />
        </React.Suspense>
      </section>

      <section>
        <PersonalProjects screenSize={screenSize} />
      </section>
      <section ref={contact}>
        <Contact />
      </section>

      <Footer screenSize={screenSize} />
    </Container>
  );
}

export default App;
