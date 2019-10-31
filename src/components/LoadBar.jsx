import React from 'react';

const LoadBar = (props) => {
    let styleContainer = {
        height:'25px',
        width:'100%',
        backgroundColor:'white',
        borderRadius:'50px',
        boxShadow:'0px 2px 5px rgba(0,0,0,.3)',
        overflow:'hidden',
        float:'left',
        border:'solid 3px white',
        boxSizing:'border-box'
    };

    let styleBar = {
        width:props.progress + '%',
        height:'100%',
        maxWidth:'100%',
        background:`linear-gradient(to left, #dedede 0%, ${props.barColor} 20%)`,
        borderTopRightRadius:'5px',
        borderBottomRightRadius:'5px',
        transition:'width 1s'
    };

    return (
        <div style={styleContainer}>
            <div style={styleBar}></div>
        </div>
    );
}

export default LoadBar;