import React from 'react'

const NextStep = ({setStepIndicator}) => {
  return (
    <div className='next-step' onClick={() => setStepIndicator(preValue => preValue +1)}>
        Next Step
    </div>
  )
}

export default NextStep