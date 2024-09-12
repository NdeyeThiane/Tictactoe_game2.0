import React from "react";



const StartMenu = ({onStart}) => {

    return (
        <>

<div className="name" ><h1 className="font-effect-neon" >TIC TAC TOE</h1></div>
<div className="play"><button onClick={onStart}><a href="#" target="_self" className="font-effect-neon">PLAY</a></button></div>
</>
    )
}

export default StartMenu;


