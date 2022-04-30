import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ManageItem.css";

const ManageItem = () => {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  // console.log(item);
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/itemsById/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  // console.log(item);
  const handleQuantity = () => {
    const newItem = { ...item };
    newItem["quantity"] = parseInt(item["quantity"]) - 1;

    fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // console.log("updatedQnty", data);
          setItem(newItem);
        }
      });
  };
  const handleQuantityUsingForm = (event) => {
    event.preventDefault();

    const number = parseInt(event.target.quantityNumber.value);
    const newItem = { ...item };
    newItem["quantity"] = parseInt(item["quantity"]) + number;

    fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // console.log("updatedQnty", data);
          setItem(newItem);
        }
      });
    event.target.reset();
  };
  return (
    <div className="manage-item-container">
      <h1>Manage item will be here.</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.itemName}</td>
            <td>{item.quantity}</td>
            <td
              onClick={handleQuantity}
              style={{ cursor: "pointer" }}
              className="text-danger"
            >
              Reduce Item
            </td>
          </tr>
        </tbody>
      </table>
      <hr
        style={{
          margin: "30px 100px",
        }}
      />
      <form onSubmit={handleQuantityUsingForm}>
        <input
          className="form-control"
          type="number"
          name="quantityNumber"
          id=""
          placeholder="Enter Number"
          required
        />
        <button type="submit" className="btn form-btn w-100 mt-2">
          Add Quantity
        </button>
      </form>
      <hr
        style={{
          margin: "30px 100px",
        }}
      />
      <button
        onClick={() => navigate("/inventories")}
        className="btn form-btn w-100"
      >
        Manage All Inventories
      </button>
    </div>
  );
};

export default ManageItem;
