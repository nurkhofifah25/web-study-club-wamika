import "./topbar.scss";
import { Email, GitHub, Person } from "@material-ui/icons";

export const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logo/wamika-dev.png" alt="" />
            <h1>Wamika Dev</h1>
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>(+62) 878 4478 1xxx</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>wamika@akakom.ac.id</span>
          </div>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a href="https://github.com/WAMIKA-Dev">
              <GitHub className="icon" />
            </a>
          </div>
          <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
