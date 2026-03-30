import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">DevOpsSite</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;