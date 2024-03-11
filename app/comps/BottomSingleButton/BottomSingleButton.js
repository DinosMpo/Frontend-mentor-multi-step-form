import './BottomSingleButton.css';

export default function BottomSingleButton({ children }) {
  return (
    <div className='bottom-single-button-container'>
        <div className='bottom-single-button-wrapper'>
            { children }
        </div>
    </div>
  )
}
