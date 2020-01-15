import React, { useState, useEffect, useContext} from 'react';
import UserInput from './UserInput.jsx';
import ScoreCard from './ScoreCard.jsx'

const App = (props) => {
  const [rollPinCount, updateRollPinCount] = useState(null);
  const [currentRoll, updateCurrentRoll] = useState(1)
  const [currentTurn, updateCurrentTurn] = useState(1);

  

  return (
    <div>
      <div>
        <ScoreCard rollPinCount={rollPinCount} currentTurn={currentTurn} currentRoll={currentRoll}></ScoreCard>
      </div>

      <div>
        <UserInput updateRollPinCount={updateRollPinCount}/>
      </div>
    </div>
  )
};

export default App;


