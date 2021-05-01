import React from "react";
import "./sales.css";
import { Link } from "react-router-dom";

const Sales = () => {
  let salesOrdersData = JSON.parse(localStorage.getItem("salesOrder"));

 

// OrderId, Customer Name, Customer Contact Number, Products, Purchase quantity of each product, Total Amount

  return (
    <div className="salesDiv">
      <div className="salesHeadDiv">
        <div className="salesHeadSecondDiv">
          <i className="fa fa-sort"></i>
          <h2>Manage Orders</h2>
        </div>
        <div className="salesHeadSecondDiv">

        <button className="salesButton">
          <Link
            to="/salesOrder"
            style={{ textDecoration: "none", color: "#f9f9f9" }}
          >
            ADD ORDERS
          </Link>
        </button>
        <span className="navBarItems ">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Log Out
              </Link>
       </span>
       </div>
      </div>
      {salesOrdersData && salesOrdersData[0] ? (
        <table className="sales-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th> Contact Number</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total Amount</th>
            
            </tr>
          </thead>
          <tbody>
            {salesOrdersData.map((item) =>
            {
              let productsArrayy
             if(Array.isArray(item.selectProducts)){
              console.log(item.products)  
             productsArrayy= item.selectProducts.map(item => item.key).join(", ")
             console.log(productsArrayy)  
          
            }
            return (
              <tr>
                <td>{item.customerName}</td>
                <td>{item.contactNumber}</td>
                <td>{productsArrayy ? productsArrayy : item.selectProducts}</td>
                <td>{item.quantity}</td>
                <td>{item.totalAmount}</td>
         
              </tr>
            )})}
          </tbody>
        </table>
      ) : (
        <h3 className="lastH3">There is no salesOrders to display</h3>
      )}
    </div>
  );
};

export default Sales;
