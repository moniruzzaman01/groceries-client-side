import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Myitems.css";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    fetch(
      `https://enigmatic-lowlands-04336.herokuapp.com/itemsByEmail?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [user.email]);

  return (
    <div className="my-item-container">
      <div className="d-flex justify-content-between align-items-center">
        <h1
          style={{
            marginBottom: "20px",
          }}
        >
          Your items
        </h1>
        <button onClick={() => navigate("/add-item")} className="btn form-btn">
          Add a item
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Product Des.</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <th scope="row">{key + 1}</th>
              <td>{item.itemName}</td>
              <td>{item.price}/-</td>
              <td>{item.quantity}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyItems;
