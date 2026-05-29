export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <div className="seclabel reveal" style={{ justifyContent: "center" }}>
          <span className="num">04</span>
          <h2>Get in touch</h2>
        </div>
        <div className="big reveal">
          <a href="mailto:shadihamdan1997@gmail.com">Let's build something.</a>
        </div>
        <div className="clinks reveal">
          <a className="clink" href="mailto:shadihamdan1997@gmail.com">
            → Email
          </a>
          <a
            className="clink"
            href="https://www.linkedin.com/in/shadiyoussefnassar/"
            target="_blank"
            rel="noopener"
          >
            → LinkedIn
          </a>
          <a
            className="clink"
            href="https://github.com/shadiyoussef"
            target="_blank"
            rel="noopener"
          >
            → GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
