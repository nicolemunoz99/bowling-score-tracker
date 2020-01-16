import React, { useState, useEffect } from 'react';

const Box = (props) => {

  const renderRoll1 = (num) => {
    if (num === 10) {
      return
    }
  }

  const toRender = (roll1, roll2) => {
    if (roll1 === 10) {return 'X'}
    if (props.currentRoll ===2 && roll1 + roll2 === 10) { return '/'}
    return 
  }

  const checkStrike = (num) => {
    return num === 10 ? 'X' : num;
  }

  return (
    <div>
      <div className="row">
        <div className="col-6 outline roll-score">
          { props.scoreObj['1']  }
        </div>
        <div className="col-6 outline roll-score">
          { props.scoreObj['2'] }
        </div>
      </div>
      <div className="row outline">
        <div className="col-12 turn-score">
          { props.scoreObj['1'] !== null ? props.scoreObj['1'] + props.scoreObj['2'] : null }
        </div>
      </div>
    </div>
  )
};

export default Box;