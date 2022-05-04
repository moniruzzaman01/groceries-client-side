import React, { useState } from "react";
import { toast } from "react-toastify";
import useInventoryItems from "../../hooks/useInventoryItems";
import "./InventoryItems.css";
import Spineer from "../Spineer/Spineer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import DialogBox from "../Dialog-box/DialogBox";

const InventoryItems = () => {
  const [items, setItems] = useInventoryItems();
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);
  const [deletedId, setDeletedId] = useState("");
  const [dialog, setDialog] = useState(false);

  const handleDelete = (id) => {
    setDialog(true);
    setDeletedId(id);
  };

  const handleDialogConfirmBtn = () => {
    setLoading(true);
    fetch(
      `https://enigmatic-lowlands-04336.herokuapp.com/deleteById/${deletedId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          toast("item deleted successfully!");
          const rest = items.filter((item) => item._id !== deletedId);
          setItems(rest);
          setLoading(false);
        }
      });
    setDialog(false);
  };

  const handleDialogCancelmBtn = () => {
    setDialog(false);
  };

  return (
    <div className="inventory-item-container">
      {dialog && (
        <DialogBox
          confirmBtnHandle={handleDialogConfirmBtn}
          cancelBtnHandle={handleDialogCancelmBtn}
        ></DialogBox>
      )}
      {loading ? <Spineer /> : ""}
      <h1
        style={{
          marginBottom: "20px",
        }}
      >
        All items
      </h1>
      <div className="table-responsive">
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
                {item.userEmail === user.email ? (
                  <td
                    onClick={() => handleDelete(item._id)}
                    style={{ color: "tomato", cursor: "pointer" }}
                  >
                    Delete
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryItems;
