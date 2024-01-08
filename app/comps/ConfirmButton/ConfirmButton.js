import './ConfirmButton.css';

export default function ConfirmButton({validation}) {
  return (
    <div className='confirm' onClick={() => validation()}>
        Confirm
    </div>
  )
}
