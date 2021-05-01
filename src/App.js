import React from "react";
import LogIn from "./component/logIn/logIn"
import Sales from "./component/sales/sales"
import "./App.css";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Medicine from "./component/medicine/medicine";
import addSales from "./component/addSales/addSales";
import Orders from "./component/orders/orders";
import Inventory from "./component/admin/inventory/inventory";
import Teams from "./component/admin/teams/teams";
import ManageOrders from "./component/admin/manageOrders/manageOrders";
import SalesOrder from "./component/salesOrderCreate/salesOrderCreate";

function App() {
  // useEffect(() =>{
  //   console.log("use")
  // },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LogIn} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/sales" component={Sales} />
          <Route path="/salesOrder" component={SalesOrder} />
          <Route path="/addSales" component={addSales} />
          <Route path="/orders" component={Orders} />
          <Route path="/medicine" component={Medicine} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/teams" component={Teams} />
          <Route path="/manageOrders" component={ManageOrders} />
      </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
