import React from 'react';
import gallery1 from '../img/Carousel1.jpg'
import gallery2 from '../img/Carousel3.jpg'
import gallery3 from '../img/Carousel4.jpg'
import gallery4 from '../img/Carousel5.jpg'
import gallery5 from '../img/Carousel6.jpg'
import gallery6 from '../img/gallery1.jpg'
import gallery7 from '../img/gallery2.jpg'
import gallery8 from '../img/gallery3.jpg'
import gallery9 from '../img/gallery4.jpg'








class Gallery extends React.Component {
  render () {
    return (
      
          <div className="gallery max_width">
            <div className="gallery-heading">
                <h5>Share your setup with</h5>
                <h2>#FuniroFurniture</h2>
            </div>
           <div className="gallery-container">
              <img src={gallery1} />
              <img src={gallery2} />
              <img src={gallery3} />
              <img src={gallery4} />
              <img src={gallery5} />
              <img src={gallery6} />
              <img src={gallery7} />
              <img src={gallery8} />
              <img src={gallery9} />
           </div>
          </div>
      
    )
  }
}
export default Gallery;
