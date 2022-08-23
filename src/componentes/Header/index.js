import React from "react";
import "./Header.css";

export default () => {
  return (
    <header className="black">
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netlflix"
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Usuario"
          />
        </a>
      </div>
    </header>
  );
};
