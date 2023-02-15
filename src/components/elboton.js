import React from "react";

function Button(){
    return (
        <button>I'm a button</button>
    );
}

function Elboton(){
    return(
        <div>
            <hi> espero que se vea el boton</hi>
            <Button />
        </div>
    )
}
export default Elboton();