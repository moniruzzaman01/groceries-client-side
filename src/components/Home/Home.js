import React from "react";
import "./Home.css";
import useInventoryItems from "../../hooks/useInventoryItems";
import Carouseel from "../Carouseel/Carouseel";
import { useNavigate } from "react-router-dom";
import Spineer from "../Spineer/Spineer";

const Home = () => {
  const [items, setItems, loading] = useInventoryItems();
  // console.log(items[0]?._id);
  const navigate = useNavigate();
  const handleManageBtn = (id) => {
    // console.log(id);
    navigate(`/manage-item/${id}`);
  };
  console.log(loading);
  return (
    <div>
      {loading ? <Spineer /> : ""}
      <Carouseel></Carouseel>
      <h1 className="Inventory-item-header">Available Items</h1>
      <div className="home-inventory-items container mb-5">
        {items.slice(0, 6).map((item, key) => (
          <div key={key} className="single-item">
            <div className="img">
              <img src={item.img_url} alt="" />
            </div>
            <div className="details">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3>{item.itemName}</h3>
                  <p>Supplier: {item.userName}</p>
                </div>
                <p style={{ color: "tomato" }} className="me-5">
                  {item.price}/-
                </p>
              </div>
              <p>Quantity: {item.quantity}</p>
              <span className="mt-2 d-block" title={item.description}>
                {item.description.slice(0, 100) + "..."}
              </span>
              <button onClick={(e) => handleManageBtn(item._id)}>Manage</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
