import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/heade-rlogo.png";
import { ChartSquare } from "iconsax-react";
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState(false);

  function handleHoevr() {
    setCurrent(true);
  }
  function handleLeave() {
    setCurrent(false);
  }
  return (
    <header className="container-fluid header">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="head">Cz Classic</h2>
        <a
          href="https://www.dextools.io/app/ether/pair-explorer/0xaA007776ca5efCB3dd8d80E0cee7b7Fcd7b4aB22"
          className="button text-capitalize d-flex gap-2"
        >
          <ChartSquare
            color="#000"
            size={24}
            variant={current ? "Linear" : "Broken"}
            onMouseOver={handleHoevr}
            onMouseLeave={handleLeave}
          />
          buy now
        </a>
      </div>
    </header>
  );
};

export default Header;
