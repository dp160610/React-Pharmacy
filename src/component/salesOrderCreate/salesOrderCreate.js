import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import "./salesOrderCreate.css"
import DropDownMedicine from "../dropDownMedicine/dropDownMedicine";

const SalesOrder = () => {
    
const [customerName, setCustomerName] = useState();
const [contactNumber, setContactNumber] = useState();
const [selectProducts, setSelectProducts] = useState();
const [quantity, setQuantity] = useState();
const [totalAmount, setTotalAmount] = useState();

const history = useHistory();


let salesOrderData;
useEffect(() => {
    salesOrderData = JSON.parse(localStorage.getItem("salesOrder"))  
    if(!salesOrderData){
        localStorage.setItem("salesOrder", JSON.stringify([]))
    }
},[])

const selectedProducts =(list) => {
  setSelectProducts(list);
}
 console.log(selectProducts);

let id = Date.now();
   
  const salesOrderSubmit =(e) => {
    if( customerName && contactNumber && quantity && selectProducts && totalAmount){
      let salesOrderObject = {
        id,
        customerName,
        contactNumber,
        selectProducts,
        quantity,
        totalAmount
      }
      let salesOrderData = JSON.parse(localStorage.getItem("salesOrder"))  
     
      salesOrderData.push(salesOrderObject);
      
        console.log(salesOrderData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("salesOrder", JSON.stringify(salesOrderData));
      history.push("/sales")

    } else{
    alert("Fill All The Details Correctly")
  }
  }


// OrderId, Customer Name, Customer Contact Number, selectProducts, Purchase quantity of each product, Total Amount
let getMedicineThere = JSON.parse(localStorage.getItem("medicine"));
      console.log(getMedicineThere);
      let medicineThere;
      if(getMedicineThere){

      
medicineThere = getMedicineThere.map(item => ({key: item.name}))
      }
    return ( <div className="salesOrderDiv">
  <h2>ADD THE ORDER</h2>
         <div 
         className="salesOrder-form"
        >
         
        <label className="salesOrder-label" htmlFor="customerName">Customer Name*</label>
        <br></br>
        <input
          type="text"
          name="customerName"
          className="salesOrderInput"
          required
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <br></br>
       <label className="salesOrder-label" htmlFor="contactNumber">Contact Number*</label>
        <br></br>
        <input
          type="number"
          name="contactNumber"
          className="salesOrderInput"
          required
          value={contactNumber}
          onChange={(e) => setContactNumber(parseInt(e.target.value))}
        />
        <br></br>

        <label className="salesOrder-label" htmlFor="selectProducts">Select 
        Products*</label>
        <br></br>
        {/* <input
          type="text"
          name="selectProducts"
          className="salesOrderInput"
          required
          placeholder="400612"
          value={selectProducts}
          onChange={(e) => setSelectProducts(e.target.value)}
        /> */}
        <DropDownMedicine 
          className="salesOrderInput"
        medicineThere={medicineThere}
        selectedProducts={selectedProducts}
        />
        
        <label className="salesOrder-label" htmlFor="quantity">Quantity (separate quantities by comma ",")</label>
        <br></br>
        <input
          type="text"
          name="quantity"
          className="salesOrderInput"
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
        className="salesOrder-submitButton" 
        type="submit" 
        value="Submit"
        onClick={salesOrderSubmit}
        />
    
      </div>
    </div> );
}
 
export default SalesOrder;