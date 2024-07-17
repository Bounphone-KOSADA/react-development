import React from "react";

function BasicList() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <ul>
      {numbers.map((number) => (
        <li>{number}</li>
      ))}
    </ul>
  );
}

export default BasicList;