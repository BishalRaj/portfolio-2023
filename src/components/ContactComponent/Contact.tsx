import React from "react";
import { Col, Row } from "react-bootstrap";
import "./style.scss";
const Contact = () => {
  return (
    <section className="contact text-center d-flex align-items-center justify-content-center flex-column">
      <h1>What's Next?</h1>

      <h2 className="my-3">Get In Touch</h2>

      <p className="mx-auto" style={{ width: "35%" }}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <button className="glow-button px-4 py-3 my-5">Say Hello</button>
    </section>
  );
};

export default Contact;
