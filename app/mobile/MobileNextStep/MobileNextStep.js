// import './MobileNextStep.css';
// import { personalInfoValidation } from '../../lib/validations';

// export default function MobileNextStep({ info, setStepIndicator, setInfo }) {
//   const inputName = document.getElementsByClassName('mobile-input-name');
//   const inputEmail = document.getElementsByClassName('mobile-input-email');
//   const inputPhone = document.getElementsByClassName('mobile-input-phone');

//   return (
//     <div className='mobile-next-step-container'>
//       <div className='mobile-next-step-wrapper'>
//         <div className='mobile-next-step' onClick={() => {
//           if (personalInfoValidation(
//             'mobile-input-name',
//             'mobile-input-email',
//             'mobile-input-phone',
//             'mobile-input-name-required',
//             'mobile-input-email-required',
//             'mobile-input-phone-required'
//           )) {
//             setStepIndicator((preValue) => preValue + 1);
//             setInfo({
//               ...info,
//               name: inputName[0].value,
//               email: inputEmail[0].value,
//               phone: inputPhone[0].value,
//             });
//           }

//         }}>
//           Next Step
//         </div>
//       </div>
//     </div>
//   )
// }

import './MobileNextStep.css';

export default function MobileNextStep({ validation }) {
  return (
    <div className='mobile-next-step-container'>
      <div className='mobile-next-step-wrapper'>
        <div className='mobile-next-step' onClick={() => { validation() }}>
          Next Step
        </div>
      </div>
    </div>
  )
}
