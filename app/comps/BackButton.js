import React from 'react'

const BackButton = ({setStepIndicator}) => {
  return (
    <div className='back-button' onClick={()=> setStepIndicator(preValue => preValue-1)}>
        Go Back
    </div>
  )
}

export default BackButton