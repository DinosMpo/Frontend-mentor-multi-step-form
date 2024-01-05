import React from 'react'

const NextStep = ({validation}) => {
  return (
    <div className='next-step' onClick={()=> validation()}
      // setStepIndicator(preValue => preValue +1);
      // validation();
    >
        Next Step
    </div>
  )
}

export default NextStep