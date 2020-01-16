import React, { useState, useEffect, useContext} from 'react';
import ScoreCard from './ScoreCard.jsx';
import Keypad from './Keypad.jsx'

const App = (props) => {
  const [scores, updateScores] = useState(new Array(10).fill({'1':null, '2': null}));
  const [currentRoll, updateCurrentRoll] = useState(1);
  const [currentTurn, updateCurrentTurn] = useState(0);  

  const handleSubmitScore =(numPins) => {
    if (currentTurn === 10) { return }
    let clonedScores = JSON.parse(JSON.stringify(scores));

    clonedScores[currentTurn][currentRoll] = Number(numPins);

    updateScores(clonedScores);
    
    if (currentRoll === 1 && numPins === '10') {
      updateCurrentTurn(currentTurn + 1);
      return
    }
    if (currentRoll === 2) {
      updateCurrentRoll(1);
      updateCurrentTurn(currentTurn + 1);
    }
    else {
      updateCurrentRoll(2);
    }
  }

  return (
    <div className='app-container'>
      <div>
        <ScoreCard scores={scores}></ScoreCard>
      </div>
      <div>
        <Keypad handleSubmitScore={handleSubmitScore}/>
      </div>
    </div>
  )
};

export default App;


