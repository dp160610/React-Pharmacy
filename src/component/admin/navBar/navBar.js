import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const history = useHistory();

  return (
    <div className="navBar">
      <nav className="navBarNav">
        
            <span className="navBarItems ">
              <Link
                to="/inventory"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Inventory
              </Link>
            </span>
            <span className="navBarItems ">
              <Link
                to="/teams"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Teams
              </Link>
            </span>
            <span className="navBarItems ">
              <Link
                to="/manageOrders"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Manage Orders
              </Link>
            </span>
      </nav>
      <span className="navBarItems ">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "whitesmoke" }}
              >
                Log Out
              </Link>
       </span>
    </div>
  );
};

export default NavBar;
