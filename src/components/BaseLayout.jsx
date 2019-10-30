import React from 'react';

//Especificacion de uso, el contenedor tiene que tener una altura del 100%
const BaseLayout = (props) => {
    console.log(props);
    const style = {
        height:'100%',
        width: '100%',
        background:`linear-gradient(to bottom, ${props.color2} 0%, ${props.color1} 100%)`
    } 

    return (
        <div style={style}>{props.children}</div>
    );
}

export default BaseLayout;