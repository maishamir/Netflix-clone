import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png"
        alt="netflix logo"
        class="nav__logo"
      />

      <img
        src="https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
        alt="netflix avatar"
        class="nav__avatar"
      />
    </div>
  );
}

export default Nav;
