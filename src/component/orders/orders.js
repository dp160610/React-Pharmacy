import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import DropDownMedicine from "../dropDownMedicine/dropDownMedicine";
import "./orders.css"

const Orders = () => {
    
const [orderId, setOrderId] = useState();
const [customerName, setCustomerName] = useState();
const [contactNumber, setContactNumber] = useState();
const [products, setProducts] = useState();
const [quantity, setQuantity] = useState();
const [totalAmount, setTotalAmount] = useState();

const history = useHistory();

const getEditData = useSelector(state => state.editData);
console.log(getEditData);
const getEditDataIndex = useSelector(state => state.editDataIndex);
console.log(getEditDataIndex);


let ordersData;
useEffect(() => {
    ordersData = JSON.parse(localStorage.getItem("orders"))  
    if(!ordersData){
        localStorage.setItem("orders", JSON.stringify([]))
    }
},[])

useEffect(() => {
  if(getEditData.id){
    console.log(getEditData);
    setOrderId(getEditData.orderId);
    setCustomerName(getEditData.customerName);
    setContactNumber(getEditData.contactNumber);
    setProducts(getEditData.products);
    setQuantity(getEditData.quantity);
    setTotalAmount(getEditData.totalAmount);
    }
},[getEditData])
const selectedProducts =(list) => {
  setProducts(list);
}
let id = Date.now();
   
  const ordersSubmit =(e) => {
    if(orderId && customerName && products && contactNumber && quantity && totalAmount){
      let ordersObject = {
        id,
        orderId,
        customerName,
        contactNumber,
        products,
        quantity,
        totalAmount
      }
      let ordersData = JSON.parse(localStorage.getItem("orders"))  
      if(getEditData.id){
        ordersData[getEditDataIndex] = ordersObject;
      } else {
      ordersData.push(ordersObject);
      }
        console.log(ordersData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("orders", JSON.stringify(ordersData));
      history.push("/manageOrders")
      window.location.reload();

    } else{
    alert("Fill All The Details Correctly")
  }
  }
  let getMedicineThere = JSON.parse(localStorage.getItem("medicine"));
  console.log(getMedicineThere);
  let medicineThere;
  if(getMedicineThere){

  
medicineThere = getMedicineThere.map(item => ({key: item.name}))
  }
// OrderId, Customer Name, Customer Contact Number, Products, Purchase quantity of each product, Total Amount

    return ( <div className="ordersDiv">
  <h2>ADD THE ORDER</h2>
         <div 
         className="orders-form"
        >
         <label className="orders-label" htmlFor="orderId">Order Id*</label>
        <br></br>
        <input
          type="text"
          name="orderId"
          className="ordersInput"
          required
          placeholder="Order Id "
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <br></br>
        <label className="orders-label" htmlFor="customerName">Customer Name*</label>
        <br></br>
        <input
          type="text"
          name="customerName"
          className="ordersInput"
          required
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <br></br>
       <label className="orders-label" htmlFor="contactNumber">Contact Number*</label>
        <br></br>
        <input
          type="number"
          name="contactNumber"
          className="ordersInput"
          required
          value={contactNumber}
          onChange={(e) => setContactNumber(parseInt(e.target.value))}
        />
        <br></br>
        <label className="orders-label" htmlFor="products">Select Products*</label>
       <br></br>
      
              <DropDownMedicine 
          className="salesOrderInput"
        medicineThere={medicineThere}
        selectedProducts={selectedProducts}
        />
        <label className="orders-label" htmlFor="quantity">Quantity (separate quantities by comma ",")</label>
        <br></br>
        <input
          type="text"
          name="quantity"
          className="ordersInput"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br></br>
        <label className="orders-label" htmlFor="totalAmount">Total Amount*</label>
        <br></br>
        <input
          type="number"
          name="totalAmount"
          className="ordersInput"
          value={totalAmount}
          onChange={(e) => setTotalAmount(parseInt(e.target.value))}
        />
        <br></br>
        <br></br>
        
        <input
        className="orders-submitButton" 
        type="submit" 
        value="Submit"
        onClick={ordersSubmit}
        />
    
      </div>
    </div> );
}
 
export default Orders;