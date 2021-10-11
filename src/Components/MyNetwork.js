import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyNetwork = () => {
  const [myHosts, setHosts] = useState([]);

  const handleFetchData = () => {
    axios.get("http://localhost:5500/updatedHosts").then((res) => {
      console.log(res)
      let hosts = res.data.hosts;

      setHosts((h) => (h = hosts));
    });
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  console.log(myHosts);
  return (

    
    <div>
      <h1>This is My Network</h1>
      <ul>
        {myHosts.map((host) => (
          <li key={host._id}>
            {host.ipAddress} : The Status is: {host.status}
          </li>
        ))}
      </ul>
    </div>
  );
};
