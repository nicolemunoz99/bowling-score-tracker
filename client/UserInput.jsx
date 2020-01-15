import React, {useState, useEffect} from 'react';

const UserInput = (props) => {
  const [tempScore, updateTempScore] = useState('-')

  const handleChange = (e) => {
    updateTempScore(e.target.value)
  }

  const handleSubmit = (e) => {
    props.updateRollPinCount(tempScore)
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