import React, {useEffect} from 'react';

const Keypad = (props) => {

  let keys = new Array(11).fill('fill');

  const handleClick = (e) => {
    props.handleSubmitScore(e.target.id)
  } 

  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-2'>
          <div className='row justify-content-md-center'>
      {
        keys.map((item, i) => {
          return (
            <div onClick={handleClick} id={i} key={i} className='col-4 key outline justify-content-md-center'>
              {i}
            </div>
          )
        })
      }
      </div>
      </div>
      </div>
    </div>
  )
}

export default Keypad;