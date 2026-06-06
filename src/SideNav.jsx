import "./assets/SideNav.css";
import placeholder from "./assets/placeholdericon.png";
import sidebar from "./assets/sidebar.png";

function SideNav({ globalPage, setPageState, pageCount, tabNum }) {
  const home = ["Home", "About Me", "Resume"];

  return (
    <>
      <div className="side-nav">
        {Array.from({ length: pageCount }).map((_, i) => (
          <div className="nav-button-container">
            <img
              className="invisible-button"
              onClick={() => setPageState(i)}
              src={placeholder}
            />
            <img
              className={
                tabNum === 0
                  ? globalPage === i
                    ? "home-nav-active"
                    : "home-nav"
                  : globalPage === i
                    ? "nav-button-active"
                    : "nav-button"
              }
              src={sidebar}
            />
            <p className={globalPage === i ? "nav-text-active" : "nav-text"}>
              {tabNum === 0 ? home[i] : i + 1}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SideNav;
