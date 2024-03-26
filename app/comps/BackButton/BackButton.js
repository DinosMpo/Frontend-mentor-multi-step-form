import './BackButton.css';

export default function BackButton ({setStepIndicator}) {
  return (
    <div className='back-button' onClick={()=> setStepIndicator(preValue => preValue-1)}>
        Go Back
    </div>
  )
}