import React, { useState } from "react";

function ArrObj() {
  const [value, setValue] = useState([
    { name: "Sourabh" },
    { name: "S" },
    { name: "Piyush" },
  ]);

  function updates() {
    let newArr = [...value];
    // let arry = value;
    newArr[1] = { name: "P" };
    setValue(newArr);
  }

  return (
    <div>
      <div>
        {value.map((item, index) => (
          <h1 key={index}>{item.name}</h1>
        ))}
      </div>
      <button onClick={updates}>Click Me</button>
    </div>
  );
}

export default ArrObj;
