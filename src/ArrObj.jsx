import React, { useState } from 'react';

function ArrObj() {
    const [value, setValue] = useState([
        {name: "Sourabh"},
        {name: "S"},
        {name: "Piyush"}
    ]);


    function updates() {

        const newArray = [...value];
        newArray[1] = {name: "P"};
        setValue(newArray); 
    }

    return (
        <div>
          {value.map((item, index) => (
              <h3 key={index}>{item.name}</h3>
          ))}  
          

            <button onClick={updates}>Click Me</button>
        </div>
    );
}

export default ArrObj;
