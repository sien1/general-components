import React from 'react';
import './Button.css'

const Button = () => {
    let style = {
        padding:'3px',
        paddingRight:'15px',
        paddingLeft:'15px',
        textAlign:'center',
        outline:'none',
        border:'none',
        borderRadius:'25px'

    };
    
    return (
        <button style={style} className="button">123456789</button>
    );
}

export default  Button;