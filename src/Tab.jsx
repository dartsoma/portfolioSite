import "./assets/Tab.css";
import { useRef, useEffect } from "react";
import nameplate from "./assets/nameplate.png";

function Tab({ globalTab, globalPage }) {
  // The pages of each tab will be

  const home = [
    <>
      <div className="nameplate">
        <img src={nameplate} />
      </div>
      <h1 id="subtitle">Hello I'm</h1>
      <h1 id="name">Chad-soma Foster</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
    <>
      <h1> Content 3</h1>
    </>,
  ];

  const models = [
    <>
      <h1> Content 1</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
  ];

  const projects = [
    <>
      <h1> Content 1</h1>
    </>,
    <>
      <h1> Content 2</h1>
    </>,
  ];

  const contact = [
    <>
      <h1> Content 1</h1>
    </>,
  ];

  const faq = [
    <>
      <h1> Content 1</h1>
    </>,
  ];

  const pageRefs = useRef([]);

  useEffect(() => {
    pageRefs.current[globalPage]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [globalPage]);

  return (
    <>
      <div className="tabs">
        {globalTab === 0 && (
          <div className="home">
            {home.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className={`page ${i === globalPage ? "active" : ""}`}
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 1 && (
          <div className="models">
            {models.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className={`page ${i === globalPage ? "active" : ""}`}
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 2 && (
          <div className="projects">
            {projects.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className={`page ${i === globalPage ? "active" : ""}`}
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 4 && (
          <div className="contact">
            {contact.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className={`page ${i === globalPage ? "active" : ""}`}
              >
                {content}
              </div>
            ))}
          </div>
        )}
        {globalTab === 3 && (
          <div className="faq">
            {faq.map((content, i) => (
              <div
                key={i}
                ref={(el) => (pageRefs.current[i] = el)}
                className={`page ${i === globalPage ? "active" : ""}`}
              >
                {content}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Tab;
