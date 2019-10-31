import React from 'react';

let CardTitle = (props) => {
    let style = {
        fontSize:'2em',
        color:'black',
        fontWeight:'600',
        fontFamily:'SF Display',
        position:'absolute',
        bottom:'10px',
        left:'10px'
        //textShadow:'-2px 0 rgba(0,0,0,.5), 0 1px rgba(0,0,0,.5), 1px 0 rgba(0,0,0,.5), 0 -1px rgba(0,0,0,.5)'

    }

    return (
        <label htmlFor="Card" style={style}>{props.children}</label>
    );
}

export default CardTitle;