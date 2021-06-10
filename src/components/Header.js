import React from "react";
import "../css/header.css";
import tea from "../images/tea.png";
function Header() {
  return (
    <section data-scroll-section id="header" id="header">
      <div className="header">
        <div>
          <h1 data-scroll data-scroll-speed="1" className="header__heading">
            chai pe <span>charcha</span>
          </h1>
        </div>
        <div>
          <img
            data-scroll
            data-scroll-speed="2"
            src={tea}
            style={{
              height: "25%",
              margin: "auto 130px",
            }}
            alt="tea-cup-png"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
