import React from 'react';
import TipsCard from './TipsTricksCard';






class Tips extends React.Component {
  render () {
    return (
      
          <div className="tips max_width">
            <div className="tips-heading">
                <h2>Tips & Tricks</h2>
            </div>
            <TipsCard />
          </div>
      
    )
  }
}
export default Tips;
