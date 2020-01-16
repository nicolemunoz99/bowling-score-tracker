import React, { useState, useEffect } from 'react';
import Box from './Box.jsx'

const ScoreCard = (props) => {
  
  return (
    <div className="container">
      <div className="row justify-content-md-center">
      {
        props.scores.map((scoreObj, i) => {
          return(
          <div key={i} className='col-1 main-box'>
            {i+1}
           <Box scoreObj={scoreObj}  />
          </div>)
        })
      }
      </div>
    </div>
  )
};

export default ScoreCard;

