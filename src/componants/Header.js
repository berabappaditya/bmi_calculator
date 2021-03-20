import React from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";


function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" className="mainnav">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://www.freepnglogos.com/uploads/medicine-logo-png-20.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Calculate Your BMI
        </Navbar.Brand>
      </Navbar>
      <br />
    </div>
  );
}

export default Header;
