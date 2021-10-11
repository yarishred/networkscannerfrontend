import React from 'react'
import { Link} from "react-router-dom"

import "./IconsNavMenu.css"

export const IconsNavMenu = () => {
    return (
        <nav className="icons-nav">
          <ul>
            <li>
              <Link to="/"><i className="fas fa-home"></i></Link>
            </li>
            <li>
              <Link to="/Networks"><i className="fas fa-network-wired"></i></Link>
            </li>
            <li>
              <Link to="/Progress"><i className="fas fa-tasks"></i></Link>
            </li>
            <li>
              <Link to="/Resources"><i className="fas fa-book"></i></Link>
            </li>
            <li>
              <Link to="/Tools"><i className="fas fa-toolbox"></i></Link>
            </li>
          </ul>
        </nav>
    )
}
