"use client"

import { useState, useEffect } from 'react';
import BottomSingleButton from '../BottomSingleButton/BottomSingleButton';
import NextStep from '../NextStep/NextStep';
import './PersonalInfo.css';
import { personalInfoValidation } from '../../lib/validations';

export default function PersonalInfo({ info, setInfo, setStepIndicator }) {
  const [testInputName, setTestInputName] = useState(info.name);
  const [testInputEmail, setTestInputEmail] = useState(info.email);
  const [testInputPhone, setTestInputPhone] = useState(info.phone);

  useEffect(() => {
    //this code is for the values that the user have completed
    const inputName = document.getElementsByClassName('input-name');
    const inputEmail = document.getElementsByClassName('input-email');
    const inputPhone = document.getElementsByClassName('input-phone');

    inputName[0].value = testInputName;
    inputEmail[0].value = testInputEmail;
    inputPhone[0].value = testInputPhone;

  }, []);

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
        name: testInputName,
        email: testInputEmail,
        phone: testInputPhone,
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
            <input onChange={(event) => setTestInputName(event.target.value)} type='text' className='input-name' placeholder='e.g. Stephen King' required />
          </div>
          <div className='personal-info-form-input'>
            <div className='personal-info-form-description' >Email Address</div>
            <div className={`display-error input-email-required`}>This field is required</div>
            <input onChange={(event) => setTestInputEmail(event.target.value)} className='input-email' placeholder='e.g. stephenking@lorem.com' required />
          </div>
          <div className='personal-info-form-input'>
            <div className='personal-info-form-description'>Phone Number</div>
            <div className={`display-error input-phone-required`}>This field is required</div>
            <input onChange={(event) => setTestInputPhone(event.target.value)} className='input-phone' placeholder='e.g. +1 234 567 890' required />
          </div>
        </div>
      </div>

      <BottomSingleButton>
        <NextStep validation={handlePersonalInfo} />
      </BottomSingleButton>
    </div>
  )
}