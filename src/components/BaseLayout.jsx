import React from 'react';

//Especificacion de uso, el contenedor tiene que tener una altura del 100%
const BaseLayout = (props) => {
    const style = {
        height:'100%',
        width: '100%',
        padding:'1%',
        paddingLeft:'15%',
        paddingRight:'8%',
        boxSizing:'border-box',
        background:`linear-gradient(to bottom, ${props.color2} 0%, ${props.color1} 100%)`
    } 

    return (
        <div style={style}>{props.children}</div>
    );
}

export default BaseLayout;