import React, {useState, useEffect} from 'react';

const UserInput = (props) => {
  const [tempScore, updateTempScore] = useState('-');
  const [scores, updateScores] = useState(null);

  useEffect(() => {
    let setupScores = {};
    for (let i = 0; i < 10; i++) {
      setupScores[i] = {
        '1': null,
        '2': null
      }
    }
    updateScores(setupScores)
  }, [])
  console.log('scores', scores)

  const handleChange = (e) => {
    updateTempScore(e.target.value)
  }

  const handleSubmit = (e) => {
    props.handleSubmitScore(tempScore)
  }

  return (
    <div>
      <div>{tempScore}</div>
      <input onChange={handleChange}></input>
      <button onClick={handleSubmit}>Submit Pins</button>
    </div>
  )
}

export default UserInput;