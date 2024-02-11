import React, { useState } from 'react'

function Stylechanger() {


    const Stylechanger = {
        title : "CNC WEB WORLD",
        css : {
            color : "red",
            fontSize : "20px",
            border: "2px solid blue"
        }
    }


    const [fontStyle, setfontStyle] = useState(Stylechanger);

    function newStyle(){
        setfontStyle({
            title : "CNC Web World by Sarvesh kumar",
            css : {
                color : "Blue",
                fontSize : "30px",
                border: "4px dotted yellow"
            }
        })
    }



  return (
    <div>
        <h2 style={{textAlign:'center'}}>Style changer</h2>
            <h2 style={fontStyle.css}>{fontStyle.title}</h2>
            <button onClick={newStyle}>Click Me</button>
    </div>
  )
}

export default Stylechanger