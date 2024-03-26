import './BottomTwoButtons.css';
import NextStep from '../NextStep/NextStep';
import BackButton from '../BackButton/BackButton';

export default function BottomTwoButtons({ children }) {
  return (
    <div className='bottom-buttons-container'>
      <div className='bottom-buttons-wrapper'>
        { children }
      </div>
    </div>
  )
}