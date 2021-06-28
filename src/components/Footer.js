import React from 'react';
import pin from '../img/Icon/Pin.svg';
import phone from '../img/Icon/Phone.svg';
import send from '../img/Icon/send-button.svg';


class Footer extends React.Component {
  render () {
    return (
      <>
      
          <div className="footer max_width">
            <div className="divider"></div>
              <div className="footer-info max_width">
                <div className="info-block info-wrapper">
                  <h2>Funiro.</h2>
                  <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
                  <a>
                    <img src={pin} alt="pin" />Sawojajar Malang, Indonesia
                  </a>
                  <a>
                    <img src={phone} alt="phone"/>+6289 456 3455
                  </a>
                  <a>www.funiro.com</a>
                </div>

                <div className="info-block">
                  <h2>Menu</h2>
                  <a>Products</a>
                  <a>Rooms</a>
                  <a>Inspirations</a>
                  <a>About Us</a>
                  <a>Terms & Policy</a>
                </div>
                <div className="info-block">
                  <h2>Account</h2>
                  <a>My Account</a>
                  <a>Checkout</a>
                  <a>My Cart</a>
                  <a>My Catalog</a>
                </div>
                <div className="info-block">
                  <h2>Stay Connected</h2>
                  <a>Facebook</a>
                  <a>Instagram</a>
                  <a>Twitter</a>
                </div>
                <div className="info-block info-input">
                  <h2>Stay Updated</h2>
                  <input type="text" placeholder="Enter your email" />
                  <button>
                    <img src={send} />
                  </button>
                </div>

              </div>
          </div>
          </>
    )
  }
}

export default Footer;
