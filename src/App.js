import React,{useState,useEffect} from 'react';
import './mySass.scss';
import './App.css';

function App() {

  const [color, setColor] = useState("red");
  const [data,setData] = useState();

  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=> res.json())
    .then((data)=>setData(data));
  },[]);

  
  return (
    <div className="App">
      <h1>My Favorite color is {color} !</h1>

      <button className="btn btn-primary m-1" type='button' onClick={()=>setColor("blue")}>Blue</button>

      <button className="btn btn-danger m-1" type='button' onClick={()=>setColor("red")}>Red</button>

      <button className="btn btn-warning m-1" type='button' onClick={()=>setColor("Yellow")}>Yellow</button>

      {data && data.map((item)=>{
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  );
}

export default App;
