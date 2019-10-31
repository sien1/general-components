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
        padding:'0px',
        boxSizing:'border-box',
        position:'relative',
        zIndex:'0',
    };

    let styleInside = {
        position:'absolute',
       // background:'linear-gradient(180deg, rgba(0,0,0, .2) 0%, rgba(0,0,0, 0) 26%)',
        borderRadius:'10px',
        boxSizing:'border-box',
        float:'left',
        boxSizing:'border-box',
        width:'100%',
        minHeight:'100%',
       
        zIndex:'1',
        left:'0',
        top:'0',
        overflow:'auto',
        backgroundColor:'black'
        
    };

    let styleScrollable = {
        float:'left',
        width:'100%',
        overflowY:'auto',
        backgroundColor:'yellow',
        paddingTop:'10%',
        padding:'10px',
    }

    return (
        <div style={style}>
            <HeaderCard></HeaderCard>
            <div style={styleInside}>
                <div style={styleScrollable}>
                    {props.children}   
                </div>
            </div>
        </div>
    );
}

export default Container;