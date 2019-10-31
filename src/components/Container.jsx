import React from 'react';
import HeaderCard from './HeaderCard.jsx';

const  Container  = (props) => {
    
    let style = {
        width:'100%',
        height:'100%',
        maxWidth:'100%',
        float:'left',
        boxSizing:'border-box',
        boxShadow:'0px 3px 5px rgba(0,0,0,.1)',
        backgroundColor:'white',
        borderRadius:'10px',
        boxSizing:'border-box',
        position:'relative',
        zIndex:'0',
        overflowY:'auto'
    };

    let styleInside = {
        padding:'10px',
        paddingTop:'100px',
       
        position:'absolute',
        background:'linear-gradient(180deg, rgba(0,0,0, 1) 0%, rgba(0,0,0,0) 8%)',
        borderRadius:'10px',
        boxSizing:'border-box',
        float:'left',
        boxSizing:'border-box',
        width:'100%',
        zIndex:'1',
        left:'0',
        top:'0'
    };

    return (
        <div style={style}>
            <HeaderCard></HeaderCard>
            <div style={styleInside}>
                {props.children}
            </div>
        </div>
    );
}

export default Container;