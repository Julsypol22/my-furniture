import React from 'react';
import trophy from '../img/Icon/trophy.svg';
import guarantee from '../img/Icon/guarantee.svg';
import shipping from '../img/Icon/shipping.svg';
import support from '../img/Icon/support.svg';



class Offers extends React.Component {
  render () {
    return (
      <>
      <div className="max_width offers_wrapper">
        <div className="offers">
            <img src={trophy} alt="quality"/>
            <div className="offers-text">
              <h6>High Quality</h6>
              <p>crafted from top materials</p>
            </div>
        </div>
        <div className="offers">
            <img src={guarantee} alt="protection"/>
            <div className="offers-text">
              <h6>Warrany Protection</h6>
              <p>Over 2 years</p>
            </div>
        </div>
        <div className="offers">
            <img src={shipping} alt="shipping"/>
            <div className="offers-text">
              <h6>Free Shipping</h6>
              <p>Order over 150 $</p>
            </div>
        </div>
        <div className="offers">
            <img src={support} alt="support"/>
            <div className="offers-text">
              <h6>24 / 7 Support</h6>
              <p>Dedicated support</p>
            </div>
        </div>
        </div>
      </>
    )
  }
}
export default Offers;