import React,{useState} from 'react';
const App=()=>{
  const [name,setName]
  =useState("Arsha");
  const resetName=()=>{
    setName(" ");
  }
  return(
    <div>
      <h1>Welcome {name}</h1>
      <button onClick={resetName}>Click</button>
    </div>
  );
};
export default App;
