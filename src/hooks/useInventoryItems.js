import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-lowlands-04336.herokuapp.com/inventory-items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  return [items, setItems, loading];
};

export default useInventoryItems;
