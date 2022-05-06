import React, { useEffect, useState } from "react";
import "./TrustedSellers.css";

const TrustedSellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-lowlands-04336.herokuapp.com/sellers")
      .then((res) => res.json())
      .then((data) => setSellers(data));
  }, []);

  return (
    <div className="container tsc">
      <h1>Trusted sellers</h1>
      <div className="sellers">
        {sellers.map((seller, key) => (
          <div key={key} className="seller">
            <img src={seller.img} alt="" />
            <div className="details">
              <h4>{seller.sellerName}</h4>
              <p>Age: {seller.Age}</p>
              <p>Address: {seller.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSellers;
