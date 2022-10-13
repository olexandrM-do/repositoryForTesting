import React from "react";

const Header = () => {
  return (
    <div>
      <nav className=" blue darken-1">
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo ">
            Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="!#">Other</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
