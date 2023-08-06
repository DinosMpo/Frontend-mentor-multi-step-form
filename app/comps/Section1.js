import React from 'react'

const Section1 = () => {
  return (
    <div className='steps-container'> 
        <div className='steps'>
            <div className='step'>
                <div className='step-number'>1</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 1</div>
                  <div className='step-info'>YOUR INFO</div>
                </div>
            </div>
            <div className='step'>
                <div className='step-number'>2</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 2</div>
                  <div className='step-info'>SELECT PLAN</div>
                </div>
            </div>
            <div className='step'>
                <div className='step-number'>3</div>
                <div className='step-content'>
                  <div className='step-number-title'>STEP 3</div>
                  <div className='step-info'>ADD-ONS</div>
                </div>
            </div>
            <div className='step'>
                <div className='step-number'>4</div>
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