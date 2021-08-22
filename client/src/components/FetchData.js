import React, { useState, useEffect } from "react";

function FetchData() {
  const [playgroundData, setPlaygroundData] = useState([]);

  useEffect(() => {
    // console.log(fetch("http://localhost:3001/subscribers"));
    fetch("https://reqres.in/api/users");
    .then ( res = > res.json());
    .then (setPlaygroundData(res.json));
    ) catch (err) (
      console.log(err);
    )
}, []);

  return <div></div>;
}

export default FetchData;
