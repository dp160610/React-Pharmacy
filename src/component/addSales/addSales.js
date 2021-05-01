import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import "./addSales.css"

const AddSales = () => {
    
const [firstName, setFirstName] = useState();
const [lastName, setLastName] = useState();
const [dob, setDob] = useState();
const [gender, setGender] = useState();
const [expYrs, setExpYrs] = useState();

const history = useHistory();
const getEditData = useSelector(state => state.editData);
console.log(getEditData);
const getEditDataIndex = useSelector(state => state.editDataIndex);
console.log(getEditDataIndex);


let addSalesData;
useEffect(() => {
    addSalesData = JSON.parse(localStorage.getItem("addSales"))  
    if(!addSalesData){
        localStorage.setItem("addSales", JSON.stringify([]))
    }
},[]);
useEffect(() => {
  if(getEditData.id){
    console.log(getEditData);
    setFirstName(getEditData.firstName);
    setLastName(getEditData.lastName);
    setDob(getEditData.dob);
    setGender(getEditData.gender);
    setExpYrs(getEditData.expYrs);
    }
},[getEditData])
let id = Date.now();
  const addSalesSubmit =(e) => {
    if(firstName && lastName && gender && dob && expYrs){
      let addSalesObject = {
        id,
        firstName,
        lastName,
        dob,
        gender,
        expYrs,
      }
      let addSalesData = JSON.parse(localStorage.getItem("addSales"))  
      if(getEditData.id){
        addSalesData[getEditDataIndex] = addSalesObject;
      } else {
      addSalesData.push(addSalesObject);
      }
        console.log(addSalesData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("addSales", JSON.stringify(addSalesData));
      history.push("/teams");
      window.location.reload();

    } else{
    alert("Fill All The Details Correctly")
  }
  }
  // First Name, Last Name, Date of birth, Gender, Experience Years
    return ( <div className="addSalesDiv">
  <h2>ADD THE SALE EXECUTER</h2>
         <div 
         className="addSales-form"
        >
         <label className="addSales-label" htmlFor="firstName">First Name*</label>
        <br></br>
        <input
          type="text"
          name="firstName"
          className="addSalesInput"
          required
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        <label className="addSales-label" htmlFor="lastName">Last Name*</label>
        <br></br>
        <input
          type="text"
          name="lastName"
          className="addSalesInput"
          required
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br></br>
       <label className="addSales-label" htmlFor="dob">Date Of Birth*</label>
        <br></br>
        <input
          type="date"
          name="dob"
          className="addSalesInput"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br></br>
        <label className="addSales-label" htmlFor="gender">Gender*</label>
        <br></br>
        {/* <input
          type="radio"
          name="gender"
          className="addSalesInput"
          required
          placeholder="400612"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        /> */}
            <input type="radio" name="gender" value="male"
            onClick={() => setGender("Male")}
            />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female"
            onClick={() => setGender("Female")}
            />
            <label for="female">Female</label>
            <input type="radio" name="gender" value="other"
            onClick={() => setGender("Others")}
            />
            <label for="other">Other</label>
        <br></br>
        <label className="addSales-label" htmlFor="expYrs">Experience Years*</label>
        <br></br>
        <input
          type="text"
          name="expYrs"
          className="addSalesInput"
          value={expYrs}
          onChange={(e) => setExpYrs(e.target.value)}
        />
        <br></br>
      
        <br></br>
        
        <input
        className="addSales-submitButton" 
        type="submit" 
        value="Submit"
        onClick={addSalesSubmit}
        />
    
      </div>
    </div> );
}
 
export default AddSales;