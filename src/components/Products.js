import React from 'react';
import ProductCard from './ProductCard';
import {productData} from './productData';


class Products extends React.Component {
  render () {
    return (
      <>
      <div className="products max_width">
        <div className="products_heading">
          <h2>Our Products</h2>
        </div>
      <div className="product-wrap">
        {productData.map((product, index) => {
                    return (
                        <ProductCard  />
                           
                    )
                })}
        </div>
        <div>
          <button>Show More</button>
        </div>
          
      </div>
        
      </>
    )
  }
}
export default Products;