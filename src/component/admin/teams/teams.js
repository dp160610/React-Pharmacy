import React, { useState } from "react";
import "./teams.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editData, editDataIndex } from "../../redux/action";
import NavBar from "../navBar/navBar";

const Teams = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  let addSalesData = JSON.parse(localStorage.getItem("addSales"));

  const history = useHistory();

  console.log(addSalesData);
  const deleteteams = (id) => {
    console.log(id);
    const index = addSalesData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(index);
    addSalesData.splice(index, 1);
    console.log(addSalesData);
    localStorage.setItem("addSales", JSON.stringify(addSalesData));
    console.log(change);
    setChange(!change);
  };
  const editteams = (id) => {
    console.log(id);
    const index = addSalesData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(addSalesData[index]);
    dispatch(editData(addSalesData[index]));
    dispatch(editDataIndex(index));

    history.push("/addSales");
  };
  // First Name, Last Name, Date of birth, Gender, Experience Years

  return (
    <div className="teamsDiv">
      <NavBar />
      <div className="teamsHeadDiv">
        <div className="teamsHeadSecondDiv">
          <i className="fa fa-users"></i>
          <h2>Teams</h2>
        </div>
        <button className="teamsButton">
          <Link
            to="/addSales"
            style={{ textDecoration: "none", color: "#f9f9f9" }}
          >
            ADD SALES EXECUTIVE
          </Link>
        </button>
      </div>
      {addSalesData &&  addSalesData[0] && addSalesData[0].id ? (
        <table className="teams-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of birth</th>
              <th>Gender</th>
              <th>Experience Years</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addSalesData.map((item) => (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.dob}</td>
                <td>{item.gender}</td>
                <td>{item.expYrs}</td>
                <td>
                  <i
                    onClick={() => editteams(item.id)}
                    className="fa fa-edit editIcon"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => deleteteams(item.id)}
                    className="fa fa-trash deleteIcon"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="lastH3">There is no Sales Executive to display</h3>
      )}
    </div>
  );
};

export default Teams;
