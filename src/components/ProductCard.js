import React from 'react';
import productIMG from '../img/ProductImg1.svg'
import sale from '../img/Icon/SaleIcon.svg'
import share from '../img/Icon/share.svg'
import like from '../img/Icon/HeartLike.svg'


class ProductCard extends React.Component {
  render () {
    return (
      <>
        <div className="card-overflow-wrapper">
          <div className="product_card">
            <div className="product-pictures">
                <img src={productIMG} alt="product" className="product-photo"/>
                <img src={sale}  alt="sale" className="sale-sticker"/>
            </div>
              <div className="product_info">
                <div className="product_description">
                  <h5>Syltherine</h5>
                  <p>Stylish cafe chair</p>
                </div>
                <div className="product_prices">
                  <h6>Rp 2.500.000</h6>
                  <p>Rp 3.500.000</p>
                </div>
              </div>
          </div>
          <div className="card-overflow">
            <div className="overflow-things">
              <div>
                <button>Add to cart</button>
              </div>
                <div className="cart-links">
                    <div className ="links">
                      <div><img src={share} alt="share" /></div>
                        <div><p>Share</p></div>
                    </div>
                    <div className ="links" >
                      <div><img src={like} alt="like" /></div>
                       <div><p>Like</p></div>
                    </div>
                </div>
            </div>
          </div>
        </div>  
        
      </>
    )
  }
}
export default ProductCard;