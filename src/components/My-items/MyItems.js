import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Myitems.css";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = { userEmail: user.email };
    fetch("http://localhost:5000/itemsByEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("prod", data);
        setItems(data);
      });
  }, [user.email]);
  return (
    <div className="my-item-container">
      <h1>My items here</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ProductName</th>
            <th scope="col">Price(TK)</th>
            <th scope="col">Quantity(KG/Ltr)</th>
            <th scope="col">Product Des.</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key}>
              <th scope="row">{key + 1}</th>
              <td>{item.itemName}</td>
              <td>{item.price}</td>
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
