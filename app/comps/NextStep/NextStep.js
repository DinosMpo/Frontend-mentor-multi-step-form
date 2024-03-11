import './NextStep.css';

export default function NextStep({validation}) {
  return (
    <div className='next-step' onClick={() => validation() }>
      Next Step
    </div>
  )
}