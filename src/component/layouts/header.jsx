import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="header_menu">
        <li className="header_item">
          <Link to={"bai1"}>Bai1</Link>
        </li>
        <li className="header_item">
          <Link to={"bai2"}>Bai2</Link>
        </li>
        <li className="header_item">
          <Link to={"bai3"}>Bai3</Link>
        </li>
        <li className="header_item">
          <Link to={"bai4"}>Bai4</Link>
        </li>
        <li className="header_item">
          <Link to={"bai5"}>Bai5</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
