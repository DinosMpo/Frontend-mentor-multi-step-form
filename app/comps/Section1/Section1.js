import React from 'react'

const Section1 = ({stepIndicator}) => {
  return (
    <div className='steps-container'> 
        <div className='steps'>
            <div className='step'>
                <div className={`step-number ${stepIndicator === 1 ? 'active-step' : ''}`}>1</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 1</div>
                  <div className='step-info'>YOUR INFO</div>
                </div>
            </div>
            <div className='step'>
                <div className={`step-number ${stepIndicator === 2 ? 'active-step' : ''}`}>2</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 2</div>
                  <div className='step-info'>SELECT PLAN</div>
                </div>
            </div>
            <div className='step'>
                <div className={`step-number ${stepIndicator === 3 ? 'active-step' : ''}`}>3</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 3</div>
                  <div className='step-info'>ADD-ONS</div>
                </div>
            </div>
            <div className='step'>
                <div className={`step-number ${stepIndicator === 4 ? 'active-step' : ''}`}>4</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 4</div>
                  <div className='step-info'>SUMMARY</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1