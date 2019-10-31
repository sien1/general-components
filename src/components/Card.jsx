import React from 'react';

const Card = (props) => {
    let style={
        padding:'10px',
        paddingTop:'30px',
        background: `linear-gradient(to bottom, ${props.color1} 0%, ${props.color2} 100%)`,
        borderRadius:'10px',
        minHeight:'20vw',
        minWidth:'15vw',
        float:'left',
        margin:'10px',
        boxShadow:'0px 5px 10px rgba(0,0,0,.3)',
        boxSizing:'border-box',
        position:'relative'
    }

    
    return (
        <div style={style}>{props.children}</div>
    );
}

export default Card;