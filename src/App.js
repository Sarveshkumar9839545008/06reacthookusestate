import './App.css';
import { useState } from 'react';
import Stylechanger from './Stylechanger/Stylechanger';
import Fontsize from './Fontsize/Fontsize';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'bootstrap';



function App() {
  // console.log(useState());
  // const [change,update] = useState("CNC Web World");
   let [count, setCount] = useState(5);
   let [bg, setBg] = useState('bg-info')


   function Subt(){
    if(count > 1){
    count -= 1;
    setCount(count)
   }
  }

  return (
     <>
       <div style={{height:"100vh"}} className={bg}>
          {/* <h1>{change}</h1>
          <butto onClick={()=>update("Programming Site")}>Click me</butto> */}

          <h2>Counter</h2>
          <h3>Value : {count}</h3>
          <button onClick={Subt}>Subtarct</button> 
          &nbsp;
          <button onClick={() => setCount(count + 1)}>Add</button>
          <br />
          <hr />
          <Stylechanger />
          <Fontsize />
          <div className='d-flex justify-content-between'>
              <button className='btn btn-danger' onClick={()=>setBg('bg-danger')}>Red</button>
              <button className='btn btn-success' onClick={()=>setBg('bg-success')}>Green</button>
          </div>
       </div>
     </>
  );
}

export default App;
