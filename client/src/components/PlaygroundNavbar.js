import React from "react";

import logo from "../logo.svg";
import { Nav, Navbar } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import InputPlaygroundFilters from "./InputPlaygroundFilters";
import Logo_PF from "../images/momPlayground10.jpg";

const PlaygroundNavbar = () => {
  return (
    <div>
      <div>
        <Navbar bg="myblue" variant="dark" sticky="top" expand="md">
          <Navbar.Brand href="/">
            {/* <img src={logo} width="40px" height="40px" /> */}
            <img src={Logo_PF} width="40px" height="40px" />
            {" "} PlaygroundFinder
          </Navbar.Brand>

          <Navbar.Toggle />
          {/* <Navbar.Collapse className="justify-content-right"> */}
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="AboutUs">About-Us</Nav.Link>
              <Nav.Link href="ContactUs">Contact-Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        <Switch>
          <Route exact path="/" component={InputPlaygroundFilters} />
          <Route path="/Home" component={InputPlaygroundFilters} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </div>
    </div>
  );
};

export default PlaygroundNavbar;
