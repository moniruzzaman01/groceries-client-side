import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ManageItem.css";

const ManageItem = () => {
  const [item, setItem] = useState({});
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
    newItem["quantity"] = parseInt(item["quantity"] - 1);

    // item["quantity"] = parseInt(item["quantity"]) - 1;
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
          console.log("updatedQnty", data);
          setItem(newItem);
        }
      });
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
      <form>
        <input
          className="form-control"
          type="number"
          name="quantityNumber"
          id=""
          placeholder="Enter Number"
        />
        <input
          type="submit"
          value="Submit"
          className="btn form-btn w-100 mt-2"
        />
      </form>
    </div>
  );
};

export default ManageItem;
