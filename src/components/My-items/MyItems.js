import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import DialogBox from "../Dialog-box/DialogBox";
import Spineer from "../Spineer/Spineer";
import "./Myitems.css";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [deletedId, setDeletedId] = useState("");
  const [dialog, setDialog] = useState(false);
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
    <div className="my-item-container">
      {dialog && (
        <DialogBox
          confirmBtnHandle={handleDialogConfirmBtn}
          cancelBtnHandle={handleDialogCancelmBtn}
        ></DialogBox>
      )}
      {loading ? <Spineer /> : ""}
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
    </div>
  );
};

export default MyItems;
