import React, { useState } from "react";

import "./NetworkPage.css";
import network from "./images/network1.png";

export const NetworkPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [displayHosts, setDisplayHosts] = useState(null);

  console.log(isActive);

  const handleHostsModule = (e) => {
    console.log(e);
    setIsActive((a) => !a);
  };

  if (isLoading) {
    return (
      <div className="main-container-network-page">
        <h2 className="loading">
          Obteniendo Acceso a las Redes &nbsp;
          <span></span>
          <span></span>
          <span></span>
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="main-container-network-page">
        <div className="module-description">
          <h1>CyberLab Network</h1>
        </div>

        <div className="wrapper-network">
          <div className="network-wrapper">
            <div className="networks-container animate__animated animate__fadeIn animate__slow-1s">
              <button
                className={isActive ? "network active" : "network "}
                onClick={handleHostsModule}
              >
                <div
                  className="network-r1 "
                  style={{
                    backgroundImage: `url(${network}) `,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                  }}
                ></div>
                <p>
                  R1
                  <br />
                  Level 1
                </p>
              </button>
              <button className="network ">
                <div
                  className="network-r2 "
                  style={{
                    backgroundImage: `url(${network}) `,
                    backgroundPosition: `center`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`,
                  }}
                ></div>
                <p>
                  R2
                  <br />
                  Level2
                </p>
              </button>
            </div>
          </div>
          <div className="hosts-wrapper animate__animated animate__fadeIn animate__slow-1s">
            {isActive ? <div className="selected-hosts"></div> : null}
            <div className="show-controls"></div>
          </div>
        </div>
      </div>
    </>
  );
};
