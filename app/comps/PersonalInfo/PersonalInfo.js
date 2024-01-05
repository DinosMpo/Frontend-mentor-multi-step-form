import React, {useEffect} from 'react'
import NextStep from '../NextStep/NextStep';

const PersonalInfo = ({error, setInfo, setStepIndicator}) => {

  useEffect(()=> {
    // const inputName = document.getElementById('input-name');
    // const inputEmail = document.getElementById('input-email');
    // const inputPhone = document.getElementById('input-phone');
    // console.log(inputName);
    console.log(error);
  }, []);
  
  const personalInfoValidation = () => {
    const inputName = document.getElementsByClassName('input-name');
    const inputEmail = document.getElementsByClassName('input-email');
    const inputPhone = document.getElementsByClassName('input-phone');
    const inputNameRequired= document.getElementsByClassName('input-name-required');
    const inputEmailRequired = document.getElementsByClassName('input-email-required');
    const inputPhoneRequired = document.getElementsByClassName('input-phone-required');

    if(inputName[0].value === '') {
      console.log('Name empty');
      inputName[0].classList.add('input-name-error');
      inputNameRequired[0].classList.add('show-error');
    }else{
      if(inputName[0].classList.contains('input-name-error')) {
        inputName[0].classList.remove('input-name-error');
        inputNameRequired[0].classList.remove('show-error');
      }
    }
    if(inputEmail[0].value === '') {
      console.log('Email empty');
      inputEmail[0].classList.add('input-email-error');
      inputEmailRequired[0].classList.add('show-error');
    }else{
      if(inputEmail[0].classList.contains('input-email-error')) {
        inputEmail[0].classList.remove('input-email-error');
        inputEmailRequired[0].classList.remove('show-error');
      }
    }
    if(inputPhone[0].value === '') {
      console.log('Phone empty');
      inputPhone[0].classList.add('input-phone-error');
      inputPhoneRequired[0].classList.add('show-error');
    }else{
      if(inputPhone[0].classList.contains('input-phone-error')) {
        inputPhone[0].classList.remove('input-phone-error');
        inputPhoneRequired[0].classList.remove('show-error');
      }
    }
  }

  return (
    <div className='personal-info-container'>
        <h1 className='personal-info-title'>Personal Info</h1>
        <div className='personal-info-description'>Please provide your name, email adddress, and phone number.</div>

        <div className='personal-info-form'>
            <div style={{display: 'flex', flexDirection: 'column', position: 'relative'}}>
              <div className='personal-info-form-description'>Name</div>
              <div className={`display-error input-name-required`}>This field is required</div>
              <input className='input-name' placeholder='e.g. Stephen King' required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className='personal-info-form-description' >Email Address</div>
              <div className={`display-error input-email-required`}>This field is required</div>
              <input className='input-email' placeholder='e.g. stephenking@lorem.com' required/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div className='personal-info-form-description'>Phone Number</div>
              <div className={`display-error input-phone-required`}>This field is required</div>
              <input className='input-phone' placeholder='e.g. +1 234 567 890' required/>
            </div>
        </div>

        <NextStep validation={personalInfoValidation} />
    </div>
  )
}

export default PersonalInfo