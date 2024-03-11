import './MobilePersonalInfo.css';
import MobileNextStep from '../MobileNextStep/MobileNextStep';
// import { personalInfoValidation } from '../../lib/validations';|

export default function MobilePersonalInfo({ error, info, setInfo, setStepIndicator }) {

  // const personalInfoValidation = () => {
  //     const inputName = document.getElementsByClassName('mobile-input-name');
  //     const inputEmail = document.getElementsByClassName('mobile-input-email');
  //     const inputPhone = document.getElementsByClassName('mobile-input-phone');
  //     const inputNameRequired = document.getElementsByClassName('mobile-input-name-required');
  //     const inputEmailRequired = document.getElementsByClassName('mobile-input-email-required');
  //     const inputPhoneRequired = document.getElementsByClassName('mobile-input-phone-required');
  //     let nextStep = true;

  //     if (inputName[0].value === '') {
  //         console.log('Name empty');
  //         nextStep = false;
  //         inputName[0].classList.add('mobile-input-name-error');
  //         inputNameRequired[0].classList.add('show-error');
  //     } else {
  //         if (inputName[0].classList.contains('mobile-input-name-error')) {
  //             inputName[0].classList.remove('mobile-input-name-error');
  //             inputNameRequired[0].classList.remove('show-error');
  //         }
  //     }
  //     if (inputEmail[0].value === '') {
  //         console.log('Email empty');
  //         nextStep = false;
  //         inputEmail[0].classList.add('mobile-input-email-error');
  //         inputEmailRequired[0].classList.add('show-error');
  //     } else {
  //         if (inputEmail[0].classList.contains('mobile-input-email-error')) {
  //             inputEmail[0].classList.remove('mobile-input-email-error');
  //             inputEmailRequired[0].classList.remove('show-error');
  //         }
  //     }
  //     if (inputPhone[0].value === '') {
  //         console.log('Phone empty');
  //         nextStep = false;
  //         inputPhone[0].classList.add('mobile-input-phone-error');
  //         inputPhoneRequired[0].classList.add('show-error');
  //     } else {
  //         if (inputPhone[0].classList.contains('mobile-input-phone-error')) {
  //             inputPhone[0].classList.remove('mobile-input-phone-error');
  //             inputPhoneRequired[0].classList.remove('show-error');
  //         }
  //     }

  //     if (nextStep) {
  //         setStepIndicator((preValue) => preValue + 1);
  //         setInfo({
  //             ...info,
  //             name: inputName[0].value,
  //             email: inputEmail[0].value,
  //             phone: inputPhone[0].value,
  //         });
  //     }
  // }

  return (
    <div className='mobile-personal-info-container'>
      <div className='mobile-personal-info-wrapper'>
        <h1 className='mobile-personal-info-title'>Personal info</h1>
        <div className='mobile-personal-info-description'>Please provide your name, email adddress, and phone number.</div>

        <div className='mobile-personal-info-form'>
          <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '10px' }}>
            <div className='mobile-personal-info-form-description'>Name</div>
            <div className={`mobile-display-error mobile-input-name-required`}>This field is required</div>
            <input className='mobile-input-name' placeholder='e.g. Stephen King' required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', position: 'relative' }}>
            <div className='mobile-personal-info-form-description' >Email Address</div>
            <div className={`mobile-display-error mobile-input-email-required`}>This field is required</div>
            <input className='mobile-input-email' placeholder='e.g. stephenking@lorem.com' required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', position: 'relative' }}>
            <div className='mobile-personal-info-form-description'>Phone Number</div>
            <div className={`mobile-display-error mobile-input-phone-required`}>This field is required</div>
            <input className='mobile-input-phone' placeholder='e.g. +1 234 567 890' required />
          </div>
        </div>
      </div>

      <MobileNextStep info={info} setInfo={setInfo} setStepIndicator={setStepIndicator} />
    </div>
  )
}
