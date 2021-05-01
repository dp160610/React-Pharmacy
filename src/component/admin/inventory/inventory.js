import React, { useState } from "react";
import "./inventory.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editData, editDataIndex } from "../../redux/action";
import NavBar from "../navBar/navBar";

const Inventory = () => {
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  let medicineData = JSON.parse(localStorage.getItem("medicine"));

  const history = useHistory();

  console.log(medicineData);
  const deleteInventory = (id) => {
    console.log(id);
    const index = medicineData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(index);
    medicineData.splice(index, 1);
    console.log(medicineData);
    localStorage.setItem("medicine", JSON.stringify(medicineData));
    console.log(change);
    setChange(!change);
  };
  const editInventory = (id) => {
    console.log(id);
    const index = medicineData.findIndex((item) => {
      if (item.id === id) {
        return true;
      }
    });
    console.log(medicineData[index]);
    dispatch(editData(medicineData[index]));
    dispatch(editDataIndex(index));

    history.push("/medicine");
  };
  return (
    <div className="inventoryDiv">
      <NavBar />
      <div className="inventoryHeadDiv">
        <div className="inventoryHeadSecondDiv">
          <i className="fa fa-folder"></i>
          <h2>Inventory</h2>
        </div>
        <button className="inventoryButton">
          <Link
            to="/medicine"
            style={{ textDecoration: "none", color: "#f9f9f9" }}
          >
            ADD MEDICINE
          </Link>
        </button>
      </div>
      {medicineData && medicineData[0] && medicineData[0].id ? (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Discount</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {medicineData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.manufacturerName}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.discount}</td>
                <td>
                  <i
                    onClick={() => editInventory(item.id)}
                    className="fa fa-edit editIcon"
                  ></i>
                </td>
                <td>
                  <i
                    onClick={() => deleteInventory(item.id)}
                    className="fa fa-trash deleteIcon"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="lastH3">There is no medicine to display</h3>
      )}
    </div>
  );
};

export default Inventory;
