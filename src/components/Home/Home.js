import React from "react";
import "./Home.css";
import useInventoryItems from "../../hooks/useInventoryItems";
import Carouseel from "../Carouseel/Carouseel";

const Home = () => {
  const [items] = useInventoryItems();
  //   console.log(items);
  return (
    <div>
      <Carouseel></Carouseel>
      <h1 className="Inventory-item-header">Available Items-{items.length}</h1>
      <div className="home-inventory-items container mb-4">
        {items.slice(0, 6).map((item, key) => {
          return (
            <div key={key} className="single-item">
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="details">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3>{item.name}</h3>
                    <p>Supplier: {item.supplier_name}</p>
                  </div>
                  <p style={{ color: "tomato" }} className="me-5">
                    {item.price}
                  </p>
                </div>
                <p>Quantity: {item.quantity}</p>
                <span className="mt-2 d-block" title={item.description}>
                  {item.description.slice(0, 100) + "..."}
                </span>
                <button>Update</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
