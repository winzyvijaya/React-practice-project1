import React from 'react';

function Home(props){
    console.warn("props",props)
    return(
        <div>
            
            
            <h1>Home Component</h1>
            <div className='card-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://electronics360.globalspec.com/images/assets/732/7732/Image_1.jpg"/>
                </div>
                <div className='text-wrapper item'>
                   <span>
                    I-phone
                    </span> 
                    <span>
                      Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                  <button
                  onClick={()=>props.addToCartHandler({price:10000,name:'I-Phone'}
                    )}
                  >Add To Cart</button>
                  <button
                  onClick={()=>props.removeToCartHandler({}
                    )}className='remove-cart-btn'
                  >Remove To Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Home;