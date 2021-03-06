import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;

  useEffect(() => {
    if (email) {
      fetch("https://enigmatic-lowlands-04336.herokuapp.com/login", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          setToken(data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
        });
    }
  }, [email]);

  return [token];
};

export default useToken;
