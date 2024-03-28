import './BottomTwoButtons.css';

export default function BottomTwoButtons({ children }) {
  return (
    <div className='bottom-buttons-container'>
      <div className='bottom-buttons-wrapper'>
        { children }
      </div>
    </div>
  )
}