import {useState} from "react"
import './App.css';

function App() {
  
  let [count,setcount]=useState(0);


  function increment(){
    count=count+1;
    setcount(count)
  }


  function decrement(){
    count=count-1;
    setcount(count)

  }

  function reset(){
    setcount(0)
  }


  return (
    <div className="App">

        <h2>Increment & decrement</h2>
      <div className="main">
      <div className="box btnT" onClick={()=>{
        setcount(count-1)
      }}>
         
       -  
      </div>
      <div className="box">
         {count}
      </div>
      <div className="boxright btnT" onClick={increment}>
         +
      </div>

      </div>

      <button className="btn btn-primary px-4 py-2 " onClick={reset}>reset</button>
    </div>
  );
}

export default App;
