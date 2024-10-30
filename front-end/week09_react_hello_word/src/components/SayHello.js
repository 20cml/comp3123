import React from 'react';

function SayHello(props){
    
    //const name = "Camila"
    const myStyle ={
        color:'red', 
        backgroundColor:'Yellow'
    }

    return (
        <h1 style={myStyle}>Hello {props.fname} {props.lname}</h1>
    )
}

export default SayHello;