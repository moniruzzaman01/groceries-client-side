import React from "react";
import { toast } from "react-toastify";
import useInventoryItems from "../../hooks/useInventoryItems";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items, setItems] = useInventoryItems();

  const handleDelete = (id) => {
    // console.log(id);
    fetch(`http://localhost:5000/deleteById/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast("item deleted successfully!");
          const rest = items.filter((item) => item._id !== id);
          setItems(rest);
        }
      });
  };
  return (
    <div className="inventory-item-container">
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        All items
      </h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Product Des.</th>
            <th scope="col">Action</th>
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
              <td
                onClick={() => handleDelete(item._id)}
                style={{ color: "tomato", cursor: "pointer" }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryItems;
