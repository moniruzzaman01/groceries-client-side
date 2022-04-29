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
      <h2 className="text-center my-5">Available Items-{items.length}</h2>
      <div className="home-inventory-items container mb-4">
        {items.map((item, key) => {
          return (
            <div key={key} className="single-item">
              <img src={item.img} width="100%" alt="" />
              <div className="ms-2">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <small>{item.description}</small>
                <p>{item.quantity}</p>
                <p>{item.supplier_name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
