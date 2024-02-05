import React, { useEffect } from "react";

const FetchApi = () => {
  const userData = async () => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json;
    console.log(data);
  };
  useEffect(() => {
    userData();
  });
  return <div>fetch api</div>;
};

export default FetchApi;
