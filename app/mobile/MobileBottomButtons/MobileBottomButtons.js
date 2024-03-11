import './MobileBottomButtons.css';

export default function MobileBottomButtons({ setStepIndicator, validation }) {
  return (
    <div className='mobile-bottom-buttons-container'>
      <div className='mobile-bottom-buttons-wrapper'>
        <div className='mobile-back-button2' onClick={()=> setStepIndicator(preValue => preValue-1)}>
          Go back
        </div>
        <div className='mobile-next-step' onClick={() => { validation() }}>
          Next Step
        </div>
      </div>

    </div>
  )
}
