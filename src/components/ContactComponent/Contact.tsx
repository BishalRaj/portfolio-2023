import "./style.scss";
const Contact = () => {
  return (
    <div
      className="contact text-center d-flex align-items-center justify-content-center flex-column"
      id="contact"
    >
      <h1 className="color-custom-green">What's Next?</h1>

      <h2 className="my-3 color-slate-lightest">Get In Touch</h2>

      <p className="mx-auto">
        I’m actively looking for a new opportunity, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>

      <a
        href="mailto:shakya.bishalraj@gmail.com"
        className="glow-button px-4 py-3 my-5"
      >
        Say Hello
      </a>
    </div>
  );
};

export default Contact;
