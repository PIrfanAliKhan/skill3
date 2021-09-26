import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="nav">
        <Link className="nav-link active" to="/CSE">
          cse
        </Link>

        <br />
        <Link className="nav-link" to="/ECE">
          ECE
        </Link>
        <br />
        <Link className="nav-link" to="/ME">
          ME
        </Link>
        <br/>
        <Link className="nav-link" to="/BT">
          BT
        </Link>

        <br />
      </ul>
    </div>
  );
}
