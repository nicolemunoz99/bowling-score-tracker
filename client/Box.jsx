import React, {useState, useEffect} from 'react';

const Box = (props) => {
  const [scoreToEnter, updateScoreToEnter] = useState(null)
  let i = 1;
  useEffect(() => {
    console.log(i)
    i++
    updateScoreToEnter(props.rollPinCount)
  }, [props.currentRoll]);

  return (
    <div>
      <div className="row">
        <div className="col-6 outline roll-score">
          {scoreToEnter}
        </div>
        <div className="col-6 outline roll-score">

        </div>
      </div>
      <div className="row outline">
        <div className="col-12 turn-score">

        </div>
      </div>
    </div>
  )
};

export default Box;