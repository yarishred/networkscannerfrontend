import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { MyTools } from "../MyTools/MyTools";
import { NetworkPage } from "../Networks/NetworkPage";

import "./NavMenu.css";
import avatar from "./images/avatar.png";
import { IconsNavMenu } from "./IconsNavMenu";

export const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  console.log(showMenu);

  return (
    <Router>
      <header className={showMenu ? "selected" : null}>
        <button
          className="toggle-menu"
          onClick={() => setShowMenu((s) => !s)}
        ></button>
        <div className="my-profile-container">
          <div
            className="my-profile"
            style={{
              backgroundImage: `url(${avatar}) `,
              backgroundPosition: `center`,
              backgroundRepeat: `no-repeat`,
              backgroundSize: `cover`,
            }}
          ></div>
          <h5>Yari Ruiz</h5>
        </div>

        {!showMenu ? (
          <IconsNavMenu />
        ) : (
          <nav >
            <ul>
              <li>
              <Link to="/"><i className="fas fa-home"></i>Home</Link>
            </li>
            <li>
              <Link to="/Networks"><i className="fas fa-network-wired"></i>Networks</Link>
            </li>
            <li>
              <Link to="/Progress"><i className="fas fa-tasks"></i>My Progress</Link>
            </li>
            <li>
              <Link to="/Resources"><i className="fas fa-book"></i>Resources</Link>
            </li>
            <li>
              <Link to="/Tools"><i className="fas fa-toolbox"></i>Tools</Link>
            </li>
            </ul>
          </nav>
        )}
      </header>

      <Switch>
        <Route path="/Networks" component={NetworkPage}></Route>
        <Route path="/Tools" component={MyTools}></Route>
      </Switch>
    </Router>
  );
};
