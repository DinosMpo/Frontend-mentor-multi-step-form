import './BottomTwoButtons.css';
import NextStep from '../NextStep/NextStep';
import BackButton from '../BackButton/BackButton';

export default function BottomTwoButtons({ setStepIndicator, validation }) {
  return (
    <div className='bottom-buttons-container'>
      <div className='bottom-buttons-wrapper'>
        <BackButton setStepIndicator={setStepIndicator} />
        <NextStep validation={validation} />
      </div>
    </div>
  )
}
