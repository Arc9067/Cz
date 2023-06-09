import React, { useState } from "react";
import "./Hero.scss";
import { BuyCrypto, Send2 } from "iconsax-react";
import Logo from "../assets/loog.gif";
import Cz from "../assets/cz.jpeg";

const Hero = () => {
  const [current, setCurrent] = useState(false);

  function handleHoevr() {
    setCurrent(true);
  }
  function handleLeave() {
    setCurrent(false);
  }
  return (
    <>
      <section className="hero container-fluid">
        <div className="container d-flex flex-column align-items-center justify-content-center gap-2 ">
          <img src={Cz} alt="" className="cz" />
          <h1 className="title p-2 text-capitalize">Let’s go Cz Classic!</h1>
          {/* <h1 className="title p-2 text-capitalize">paradise with Bahamas </h1> */}
          <p className="info text-center">
            Welcome to Cz on the Ethereum network! Enjoy the sun, sand, and 0%
            tax while making your dreams come true. Dive into the world of
            decentralized finance and explore endless possibilities with us.
          </p>
          <a href="" className="button text-capitalize d-flex gap-2">
            <Send2
              color="#000"
              size={24}
              variant={current ? "Linear" : "Broken"}
              onMouseOver={handleHoevr}
              onMouseLeave={handleLeave}
            />
            Telegram
          </a>
          <img src={Logo} alt="" className="mt-3 logo" />

          <a
            href="https://www.dextools.io/app/ether/pair-explorer/0xaA007776ca5efCB3dd8d80E0cee7b7Fcd7b4aB22"
            className="button chart mt-5"
          >
            View Chart
            <BuyCrypto size="32" color="#ffc000" variant="Bulk" />
          </a>
          <a href="mailto:CzClassic@gmail.com" className="button chart mt-5">
            CzClassic@gmail.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
