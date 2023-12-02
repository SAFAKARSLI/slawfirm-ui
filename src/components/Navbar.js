import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";


const Navbar = () => (
  <div className={"sidebar"}>
    <div className="sidebar-header">
      <span color="info" style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Slawfirm</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">

        <NavItem>
          <NavLink tag={Link} to={"/"} className="nav-item">
            My Clients
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/documents"} className="nav-item">
            Documents
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"/generate/retainer_agreement"} className="nav-item">
            Self-Generate
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default Navbar;
