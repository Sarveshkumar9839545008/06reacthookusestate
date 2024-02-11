import React, { useState } from 'react';
import './Fontsize.css'

function Fontsize() {
    const [fsize,setfsize] = useState('')



    function getValue(e){
        // console.log(e.target.value);
        let value = e.target.value+"px";
        // setfsize(value);
    }


    let getColor = (e) => {
        // console.log(e.target.value)
        let color = e.target.value;
        // console.log(color);
        setfsize(color);

    }
    const obj = {
        class : "show",
        btnText : "hide"
    }
    const [show, setShow] = useState(obj);

    function myfun(){
        if(show.class === show){
          setShow({
            class : "hide",
            btnText : "show"
          })
        }else{
            setShow({
                class : "show",
                btnText : "hide"
            })

        }
    }
  return (
      <>
         <hr/>
         <h2 style={{textAlign: 'center'}}>Font Size Changer</h2>

         <h2 style={{fontsize:  fsize, color : fsize}}>CNC Web World</h2>

         <input type="range" name="range" onChange={getValue} step={5}/>
         <input type="color" name="color" onChange={getColor}/>
         <br/>
         <h1 className={show.class}>Hide me by click on below button</h1>
         <button onClick={myfun}>{show.btnText}</button>
      </>
  )
}

export default Fontsize