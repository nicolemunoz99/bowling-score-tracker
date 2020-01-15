import React, { useState, useEffect, useContext} from 'react';
import produce from "immer";
import UserInput from './UserInput.jsx';
import ScoreCard from './ScoreCard.jsx'

const App = (props) => {
  // const [scores, updateScores] = useState(null);
  const [rollPinCount, updateRollPinCount] = useState(null);
  const [currentRoll, updateCurrentRoll] = useState(1);
  const [currentTurn, updateCurrentTurn] = useState(1);
  const [rollTracker, updateRollTracker] = useState(0);

  useEffect(() => {
    let setupScores = {};
    for (let i = 1; i <= 10; i++) {
      sessionStorage.setItem(`turn${i}-roll1`, null)
      sessionStorage.setItem(`turn${i}-roll2`, null)
    }
  }, [])


  useEffect(() => {
    if (rollTracker && rollTracker > 0) {
      if (currentRoll === 2) { updateCurrentRoll(1), updateCurrentTurn(currentTurn + 1) }
      else {updateCurrentRoll(2)}
    }
  }, [rollTracker])


  const handleSubmitScore =(numPins) => {
    sessionStorage.setItem(`turn${currentTurn}-roll${currentRoll}`, numPins)
    updateRollPinCount(numPins);
    updateRollTracker(rollTracker + 1);
  }

  return (
    <div>
      <div>
        <ScoreCard currentTurn={currentTurn} currentRoll={currentRoll}></ScoreCard>
      </div>

      <div>
        <UserInput handleSubmitScore={handleSubmitScore}/>
      </div>
    </div>
  )
};

export default App;


