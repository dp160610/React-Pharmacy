import React, { useState } from "react";
import "./manageOrders.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editData, editDataIndex } from "../../redux/action";
import NavBar from "../navBar/navBar";

const ManageOrders = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  let ordersData = JSON.parse(localStorage.getItem("orders"));

  const history = useHistory();

  console.log(ordersData);
  const deletemanageOrders = (id) => {
    console.log(id);
    const index = ordersData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(index);
    ordersData.splice(index, 1);
    console.log(ordersData);
    localStorage.setItem("orders", JSON.stringify(ordersData));
    console.log(change);
    setChange(!change);
  };
  const editmanageOrders = (id) => {
    console.log(id);
    const index = ordersData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(ordersData[index]);
    dispatch(editData(ordersData[index]));
    dispatch(editDataIndex(index));

    history.push("/orders");
  };
// OrderId, Customer Name, Customer Contact Number, Products, Purchase quantity of each product, Total Amount

  return (
    <div className="manageOrdersDiv">
      <NavBar />
      <div className="manageOrdersHeadDiv">
        <div className="manageOrdersHeadSecondDiv">
          <i className="fa fa-sort"></i>
          <h2>Manage Orders</h2>
        </div>
        <button className="manageOrdersButton">
          <Link
            to="/orders"
            style={{ textDecoration: "none", color: "#f9f9f9" }}
          >
            ADD ORDERS
          </Link>
        </button>
        
      </div>
      {ordersData && ordersData[0] && ordersData[0].id ? (
        <table className="manageOrders-table">
          <thead>
            <tr>
              <th>OrderId</th>
              <th>Customer Name</th>
              <th> Contact Number</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((item) => {
              let productsArrayy
             if(Array.isArray(item.products)){
              console.log(item.products)  
             productsArrayy= item.products.map(item => item.key).join(", ")
             console.log(productsArrayy)  
          
            }
            return (
              <tr>
                <td>{item.orderId}</td>
                <td>{item.customerName}</td>
                <td>{item.contactNumber}</td>
                <td>{productsArrayy ? productsArrayy : item.products}</td>
                <td>{item.quantity}</td>
                <td>{item.totalAmount}</td>
                <td>
                  <i
                    onClick={() => editmanageOrders(item.id)}
                    className="fa fa-edit editIcon"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => deletemanageOrders(item.id)}
                    className="fa fa-trash deleteIcon"
                  ></i>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      ) : (
        <h3 className="lastH3">There is no orders to display</h3>
      )}
    </div>
  );
};

export default ManageOrders;
