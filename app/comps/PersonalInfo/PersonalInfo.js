"use client"

import React, { useEffect } from 'react';
import BottomSingleButton from '../BottomSingleButton/BottomSingleButton';
import NextStep from '../NextStep/NextStep';
import MobileNextStep from '../../mobile/MobileNextStep/MobileNextStep';
import './PersonalInfo.css';
import { personalInfoValidation } from '../../lib/validations';


export default function PersonalInfo({ info, setInfo, setStepIndicator }) {
  useEffect(() => {
    // console.log(inputName);
    inputName[0].value = info.name;
    inputEmail[0].value = info.email;
    inputPhone[0].value = info.phone;
  }, []);

  const inputName = document.getElementsByClassName('input-name');
  const inputEmail = document.getElementsByClassName('input-email');
  const inputPhone = document.getElementsByClassName('input-phone');

  const handlePersonalInfo = () => {
    if (personalInfoValidation(
      'input-name',
      'input-email',
      'input-phone',
      'input-name-required',
      'input-email-required',
      'input-phone-required'
    )) {
      setStepIndicator((preValue) => preValue + 1);
      setInfo({
        ...info,
        name: inputName[0].value,
        email: inputEmail[0].value,
        phone: inputPhone[0].value,
      });
    }
  }

  return (
    <div className='personal-info-container'>
      <div className='personal-info-wrapper'>
        <h1 className='personal-info-title'>Personal info</h1>
        <div className='personal-info-description'>Please provide your name, email address, and phone number.</div>

        <div className='personal-info-form'>
          <div className='personal-info-form-input'>
            <div className='personal-info-form-description'>Name</div>
            <div className={`display-error input-name-required`}>This field is required</div>
            <input type='text' className='input-name' placeholder='e.g. Stephen King' required />
          </div>
          <div className='personal-info-form-input'>
            <div className='personal-info-form-description' >Email Address</div>
            <div className={`display-error input-email-required`}>This field is required</div>
            <input className='input-email' placeholder='e.g. stephenking@lorem.com' required />
          </div>
          <div className='personal-info-form-input'>
            <div className='personal-info-form-description'>Phone Number</div>
            <div className={`display-error input-phone-required`}>This field is required</div>
            <input className='input-phone' placeholder='e.g. +1 234 567 890' required />
          </div>
        </div>
      </div>

      {/* <NextStep validation={handlePersonalInfo} /> */}
      {/* <MobileNextStep validation={handlePersonalInfo} /> */}
      <BottomSingleButton>
        <NextStep validation={handlePersonalInfo} />
      </BottomSingleButton>
    </div>
  )
}