import React from 'react'

const PersonaInfo = () => {
  return (
    <div className='personal-info-container'>
        <h1 className='personal-info-title'>Personal Info</h1>
        <div className='personal-info-description'>Please provide your name, email adddress, and phone number.</div>

        <div className='personal-info-form'>
            <div className='personal-info-form-description'>Name</div>
            <input placeholder='e.g. Stephen King' required/>
            <div className='personal-info-form-description' >Email Address</div>
            <input placeholder='e.g. stephenking@lorem.com' required/>
            <div className='personal-info-form-description'>Phone Number</div>
            <input placeholder='e.g. +1 234 567 890' required/>
        </div>
    </div>
  )
}

export default PersonaInfo