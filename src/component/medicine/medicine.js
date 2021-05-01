import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import "./medicine.css"

const Medicine = () => {
    
const [name, setName] = useState();
const [manufacturerName, setManufacturerName] = useState();
const [price, setPrice] = useState();
const [discount, setDiscount] = useState();
const [stock, setStock] = useState();

const history = useHistory();
const getEditData = useSelector(state => state.editData);
console.log(getEditData);
const getEditDataIndex = useSelector(state => state.editDataIndex);
console.log(getEditDataIndex);

let medicineData;
useEffect(() => {
    medicineData = JSON.parse(localStorage.getItem("medicine"))  
    if(!medicineData){
        localStorage.setItem("medicine", JSON.stringify([]))
    }
    
},[])
useEffect(() => {
  if(getEditData.id){
    console.log(getEditData);
      setName(getEditData.name);
      setManufacturerName(getEditData.manufacturerName);
      setPrice(getEditData.price);
      setDiscount(getEditData.discount);
      setStock(getEditData.stock);
    }
},[getEditData])
   let id = Date.now();
  const medicineSubmit =(e) => {
    if(name && manufacturerName && discount && price && stock){
      let medicineObject = {
        id,
        name,
        manufacturerName,
        price,
        discount,
        stock,
      }
      let medicineData = JSON.parse(localStorage.getItem("medicine"))  
      if(getEditData.id){
        medicineData[getEditDataIndex] = medicineObject;
      } else {
        medicineData.push(medicineObject);
      }
        console.log(medicineData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("medicine", JSON.stringify(medicineData));
        history.push("/inventory")
      
        
    } else{
    alert("Fill All The Details Correctly")
  }
  }
//   Name, Manufacturer Name, Price, Stock, Discount
    return ( <div className="medicineDiv">

  <h2>ADD NEW MEDICINE</h2>
         <div 
         className="medicine-form"
        >
         <label className="medicine-label" htmlFor="name">Name*</label>
        <br></br>
        <input
          type="text"
          name="name"
          className="medicineInput"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label className="medicine-label" htmlFor="manufacturerName">Manufacturer Name*</label>
        <br></br>
        <input
          type="text"
          name="manufacturerName"
          className="medicineInput"
          required
          placeholder="Manufacturer Name"
          value={manufacturerName}
          onChange={(e) => setManufacturerName(e.target.value)}
        />
        <br></br>
       <label className="medicine-label" htmlFor="price">price*</label>
        <br></br>
        <input
          type="number"
          name="price"
          className="medicineInput"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <br></br>
        <label className="medicine-label" htmlFor="discount">discount*</label>
        <br></br>
        <input
          type="text"
          name="discount"
          className="medicineInput"
          required
          placeholder="400612"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <br></br>
        <label className="medicine-label" htmlFor="stock">Stock</label>
        <br></br>
        <input
          type="number"
          name="stock"
          className="medicineInput"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
        />
        <br></br>
      
        <br></br>
        
        <input
        className="medicine-submitButton" 
        type="submit" 
        value="Submit"
        onClick={medicineSubmit}
        />
    
      </div>
    </div> );
}
 
export default Medicine;