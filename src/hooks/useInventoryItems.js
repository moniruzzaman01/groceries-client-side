import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-lowlands-04336.herokuapp.com/inventory-items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return [items, setItems];
};

export default useInventoryItems;
