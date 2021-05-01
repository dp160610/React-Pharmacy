import React from 'react';
import "./admin.css"
import NavBar from "./navBar/navBar"
import Inventory from "./inventory/inventory"
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  userParam,
} from "react-router-dom";

const Admin = () => {
    return (
    // <BrowserRouter>

      <div>
           <Inventory/>
 
           {/* component={Inventory} /> */}
        {/*  <Route path="/teams" component={teams} />
          <Route path="/manageOrders" component={manageOrders} /> */}
  
    </div>
    // </BrowserRouter>

    
    //     <h2>
    //         Admin Page
    //     </h2>
    //     <button
        
    //     >
    //         <Link
    //             to="/medicine"
    //             style={{ textDecoration: "none", color: "Black" }}
    //           >
    //             ADD MEDICINE
    //           </Link>
    //     </button> 
    //     <button
        
    //     >
    //         <Link
    //             to="/addSales"
    //             style={{ textDecoration: "none", color: "Black" }}
    //           >
    //             ADD SALES EXECUTIVE
    //           </Link>
    //     </button>
    //      <button
        
    //     >
    //         <Link
    //             to="/orders"
    //             style={{ textDecoration: "none", color: "Black" }}
    //           >
    //             ADD ORDERS
    //           </Link>
    //     </button>
    // </div> 
    );
}
 
export default Admin;