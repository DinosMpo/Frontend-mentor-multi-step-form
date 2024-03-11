import './MobileBackButton.css';


export default function MobileBackButton() {
  return (
    <div className='back-button' onClick={()=> setStepIndicator(preValue => preValue-1)}>
        Go Back
    </div>
  )
}
