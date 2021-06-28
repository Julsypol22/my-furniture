import React from 'react';
import CarouselRooms from './common/Carousel_rooms';




class Rooms extends React.Component {
  render () {
    return (
      <>
      <div className="rooms-bg">
          <div className="rooms max_width">
            <div className="rooms-text">
              <h2>50+ Beautiful rooms inspiration</h2>
              <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
              <button>Explore more</button>
            </div>
            <CarouselRooms />
          </div>
        </div>
      </>
    )
  }
}
export default Rooms;
