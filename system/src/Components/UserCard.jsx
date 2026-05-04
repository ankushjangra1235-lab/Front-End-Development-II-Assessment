// UserCard.js
import React from "react";

// 🔹 Props Example
function UserCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px"
      }}
    >
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

export default UserCard;