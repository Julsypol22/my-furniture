import React from 'react';
import button from '../../img/Icon/note-button.svg';

let FotoNote = () => {
  return (
  <div className="note-wrap">
      <div className="rooms-note">
        <div>
          <p>01 -- Bed Room</p>
          <h4>Inner Peace</h4>
        </div>
      </div>
      <button>
          <img src={button} />
      </button>
</div>
  )
}

export default FotoNote;