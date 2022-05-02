import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ManageItem.css";
import Spineer from "../Spineer/Spineer";

const ManageItem = () => {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(item);
  const { id } = useParams();
  useEffect(() => {
    const url = `https://enigmatic-lowlands-04336.herokuapp.com/itemsById/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  // console.log(item);
  const handleQuantity = () => {
    setLoading(true);
    const newItem = { ...item };
    if (parseInt(item["quantity"]) === 0) {
      setError("Quantity cannot be negative");
      return;
    }
    newItem["quantity"] = parseInt(item["quantity"]) - 1;

    fetch("https://enigmatic-lowlands-04336.herokuapp.com/update", {
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
          setLoading(false);
          setError(false);
        }
      });
  };
  const handleQuantityUsingForm = (event) => {
    setLoading(true);
    event.preventDefault();

    const number = parseInt(event.target.quantityNumber.value);
    if (number < 0) {
      setError("Quantity cannot be negative");
      setLoading(false);
      event.target.reset();
      return;
    }
    const newItem = { ...item };
    newItem["quantity"] = parseInt(item["quantity"]) + number;

    fetch("https://enigmatic-lowlands-04336.herokuapp.com/update", {
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
          setLoading(false);
          setError(false);
        }
      });
    event.target.reset();
  };

  return (
    <div className="manage-item-container">
      {loading ? <Spineer /> : ""}
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
              Shipped
            </td>
          </tr>
        </tbody>
      </table>
      <hr
        style={{
          margin: "30px 100px",
        }}
      />
      {error ? (
        <p
          style={{
            color: "blue",
            textAlign: "center",
            border: "1px solid tomato",
          }}
        >
          {error}
        </p>
      ) : (
        ""
      )}
      <form onSubmit={handleQuantityUsingForm}>
        <input
          className="form-control"
          type="number"
          name="quantityNumber"
          id=""
          placeholder="Enter Number"
          required
        />
        <button
          type="submit"
          className="btn form-btn  w-50 mx-auto d-block mt-2"
        >
          Add Quantity
        </button>
      </form>
      <hr
        style={{
          margin: "30px 100px",
        }}
      />
      <button
        onClick={() => navigate("/add-item")}
        className="btn form-btn  w-50 mx-auto d-block"
      >
        Add New Item
      </button>
      <button
        onClick={() => navigate("/inventories")}
        className="btn form-btn mt-2 w-50 mx-auto d-block"
      >
        Manage All Inventories
      </button>
    </div>
  );
};

export default ManageItem;
