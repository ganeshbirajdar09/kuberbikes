import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cliens.css";

const Clients = () => {
  const [details, setDetails] = useState([]);
  const fetchDetails = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const details = data;
    setDetails(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <h1>All Clients</h1>
      {details &&
        details.map((mem) => (
          <div key={mem.id}>
            <div className="single">
              <h3>Name: {mem.name}</h3>
              <span>Email: {mem.email}</span>
              <h5>City: {mem.address.city}</h5>
            </div>
          </div>
        ))}
    </>
  );
};

export default Clients;
