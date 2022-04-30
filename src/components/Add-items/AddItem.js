import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import "./AddItem.css";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const handleAddForm = (event) => {
    event.preventDefault();
    const productDetails = {
      userName: event.target.user_name.value,
      userEmail: event.target.user_email.value,
      itemName: event.target.name.value,
      quantity: event.target.quantity.value,
      img_url: event.target.img_url.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };
    fetch("http://localhost:5000/inventory-items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast("Product Added Successfully!!!");
          event.target.reset();
        }
      });
  };
  return (
    <div className="add-item-container">
      <h1 style={{ marginBottom: "20px" }}>Add item here.</h1>
      <form onSubmit={handleAddForm}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="user_name"
            className="form-control"
            disabled
            value={user?.displayName || user.email.split("@")[0]}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="user_email"
            className="form-control"
            disabled
            value={user.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="Product Quantity"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="img_url"
            className="form-control"
            placeholder="Product Image Url"
            required
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Product Price"
            required
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            placeholder="Product Description (short)"
            required
          />
        </div>
        <button type="submit" className="btn form-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
