import React from 'react'
import NextStep from './NextStep'

const Section2 = () => {
  return (
    <div className='personal-info-container'>
        <h1 className='personal-info-title'>Presonal Info</h1>
        <div className='personal-info-description'>Please provide your name, email adddress, and phone number.</div>

        <div className='personal-info-form'>
            <div className='personal-info-form-description'>Name</div>
            <input placeholder='e.g. Stephen King'/>
            <div className='personal-info-form-description'>Email Address</div>
            <input placeholder='e.g. stephenking@lorem.com'/>
            <div className='personal-info-form-description'>Phone Number</div>
            <input placeholder='e.g. +1 234 567 890'/>
        </div>

        <NextStep />
    </div>
  )
}

export default Section2