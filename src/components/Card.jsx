import React from 'react';

const Card = (props) => {
    let style={
        padding:'20px',
        paddingTop:'30px',
        background: `linear-gradient(to bottom, ${props.color1} 0%, ${props.color2} 100%)`,
        borderRadius:'1.1vw',
        minHeight:'20vw',
        minWidth:'15vw',
        float:'left',
        margin:'10px',
        boxShadow:'0px 5px 10px gray',
        boxSizing:'border-box'
    }

    
    return (
        <div style={style}>{props.children}</div>
    );
}

export default Card;