import React from 'react';

const HeaderCard = () => {
    let styleCard={
        width:'100%',
        height:'25%',
        
    }

    let styleImg={
        //backgroundImage:"url(" + "/images/Industrial_12376832.jpg" + ")",
        width:'100%',
        height:'100%',
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor:'white',
        borderBottom:'solid 1px #dcdcdc'
    }

    return (
        <div style={styleCard}>
            <div style={styleImg}>

            </div>
        </div>
    );
}

export default HeaderCard;