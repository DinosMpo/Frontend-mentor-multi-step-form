import './MobilePersonalInfo.css';
import MobileNextStep from '../MobileNextStep/MobileNextStep';

export default function MobilePersonalInfo({ error, info, setInfo, setMobileIndicator }) {
  return (
    <div className='mobile-personal-info-container'>
      <h1 className='mobile-personal-info-title'>Personal info</h1>
      <div className='mobile-personal-info-description'>Please provide your name, email adddress, and phone number.</div>

      <div className='mobile-personal-info-form'>
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '10px' }}>
          <div className='mobile-personal-info-form-description'>Name</div>
          <div className={`display-error input-name-required`}>This field is required</div>
          <input className='mobile-input-name' placeholder='e.g. Stephen King' required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
          <div className='mobile-personal-info-form-description' >Email Address</div>
          <div className={`display-error input-email-required`}>This field is required</div>
          <input className='mobile-input-email' placeholder='e.g. stephenking@lorem.com' required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px' }}>
          <div className='mobile-personal-info-form-description'>Phone Number</div>
          <div className={`display-error input-phone-required`}>This field is required</div>
          <input className='mobile-input-phone' placeholder='e.g. +1 234 567 890' required />
        </div>
      </div>

      <MobileNextStep validation={() => {}} />
    </div>
  )
}
