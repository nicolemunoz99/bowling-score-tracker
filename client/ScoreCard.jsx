import React, { useState, useEffect } from 'react';
import Box from './Box.jsx'

const ScoreCard = (props) => {
  let boxes = []
  for (let i = 1; i <= 10; i++) { boxes.push(i) }
  return (
    <div className="container">
      <div className="row">
      {
        boxes.map(i => {
          return(
          <div key={i} className='col-1 main-box'>
            {i}
           <Box i={i} currentTurn={props.currentTurn} scores={props.scores}  />
          </div>)
        })
      }
      </div>
    </div>
  )
};

export default ScoreCard;

