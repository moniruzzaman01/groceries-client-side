import React from "react";
import "./AddItem.css";

const AddItem = () => {
  const handleAddForm = (event) => {
    event.preventDefault();
    console.log("hello");
  };
  return (
    <div className="add-item-container">
      <h1 style={{ marginBottom: "20px" }}>Add item here.</h1>
      <form onSubmit={handleAddForm}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="user-name"
            className="form-control"
            placeholder="User Name"
            disabled
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="user-email"
            className="form-control"
            placeholder="Enter email"
            disabled
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Product Name"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            name="quantity"
            className="form-control"
            placeholder="Product Quantity"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            name="img-url"
            className="form-control"
            placeholder="Product Image Url"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            name="price"
            className="form-control"
            placeholder="Product Price"
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            type="text"
            name="description"
            className="form-control"
            placeholder="Product Description (short)"
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
