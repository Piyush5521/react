import React, {useState} from 'react'


function MyComponents() {

    const [name, setName] = useState("Guess!");

    const [age, setAge] = useState(0);

    const UpdateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }
    
    
        const containers = {
            textAlign: "center",
            marginTop:'2rem'
        }
    

  return (
    <div style={containers}>
        <p>Name: {name}</p> <br /> 
        <button onClick={UpdateName}>Set Name</button>
        <br /> <br /> <br />
        <p>Name: {age}</p> <br />
        <button onClick={incrementAge}>Increment Age</button>
    </div> 
  )
}

export default MyComponents