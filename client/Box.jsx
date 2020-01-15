import React, {useState, useEffect} from 'react';

const Box = (props) => {


  let roll1 = sessionStorage.getItem(`turn${props.i}-roll1`)
  roll1 = roll1 === 'null' ? null : roll1;
  let roll2 = sessionStorage.getItem(`turn${props.i}-roll2`)
  roll2 = roll2 === 'null' ? null : roll2;

  console.log(typeof roll2)
  return (
    <div>
      <div className="row">
        <div className="col-6 outline roll-score">
          { roll1 ?  roll1 : null}
        </div>
        <div className="col-6 outline roll-score">
          { roll2 ? roll2 : null}
        </div>
      </div>
      <div className="row outline">
        <div className="col-12 turn-score">
          {props.currentTurn > props.i ? roll1 + roll2 : null}
        </div>
      </div>
    </div>
  )
};

export default Box;