import React from 'react';

function Header(props){
    console.warn("props",props.data)
    return(
        <div>
            
            <div className='Add-to-card'>
            <span className='cart-count'>{props.data.length}</span>
                <img src="https://w7.pngwing.com/pngs/384/470/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png"/>
            </div>
            
        </div>
    );
}
export default Header;