import React from 'react'
import './Summary.css'
import ThankYou from '../ThankYou/ThankYou'

const Summary = () => {
  return (
    <div className='summary-wrapper'>
        <h1 className='summary-info-title'>Finishing up</h1>
        <div className='summary-info-description'>Double-check everything looks OK before confirming.</div>

        <div className='summary-container'>
            <div className='summary-plan-container'>
                <div className='summary-plan-wrapper'>
                    <div className='summary-plan-name'>Arcade (Monthly)</div>
                    <div className='summary-plan-change'>Change</div>
                </div>
                <div className='summary-plan-price'>$9/mo</div>
            </div>
            <hr style={{width: '100%'}}></hr>

            <div className='summary-addon-container'>
                <div className='summary-addon'>
                    <div className='summary-addon-name'>Online service</div>
                    <div className='summary-addon-price'>+$1/mo</div>
                </div>
                <div className='summary-addon'>
                    <div className='summary-addon-name'>Larger storage</div>
                    <div className='summary-addon-price'>+$2/mo</div>
                </div>
            </div>


        </div>
        <div className='summary-total-container'>
                <div className='summary-total'>
                    Total (per month)
                </div>
                <div className='summary-total-price'>+$12/mo</div>
            </div>
    </div>
  )
}

export default Summary