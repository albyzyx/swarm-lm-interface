import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        <div className="subContainer" id="subContainerLeft">
          <div className="hPrimary">
            Decentrailized
            <br />
            Computing Redifined.
          </div>
          <div className="hSecondary">
            Our vision is to revolutionize the way brands and advertisers
            target, reach
          </div>
          <button className="getStartedBtn">Get Started</button>
        </div>
        <div className="subContainer" id="subContainerRight">
          <img src="/images/globe.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
