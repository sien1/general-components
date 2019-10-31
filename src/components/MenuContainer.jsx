import React from 'react';

const MenuContainer =  (props) => {
    let style =  {
        backgroundColor:'linear-gradient( to bottom, white 0%, transparent 100%)',
        width:'2vw',
        height:'100%',
        borderRight:'solid 1px gray',
        borderLeft:'solid 1px gray',
        float:'left',
        padding:'4px',
        boxSizing:'border-box',
        position:'fixed',
        left:'2%'

    };

    return (
        <div style={style}>{props.children}</div>
    );
}

export default MenuContainer;