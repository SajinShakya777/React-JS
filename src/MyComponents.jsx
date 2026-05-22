import React, {useState} from 'react';

function MyComponents(){

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("John Doe");
  }

  const incrementAge = () => {
    setAge(age + 1);
  }

   const decrementAge = () => {
    setAge(age - 1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

       {/* <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increment Age</button>
       */}
       
       <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <button onClick={decrementAge}>Decrement Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employment Status</button>
    </div>
  )
}
export default MyComponents