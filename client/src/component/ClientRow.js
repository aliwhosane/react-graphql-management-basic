import React from "react";

const ClientRow = ({ id, client }) => {
  const { name, email, phone } = client;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className=" font-extrabold text-red-600">DELETE</button>
      </td>
    </tr>
  );
};

export default ClientRow;
