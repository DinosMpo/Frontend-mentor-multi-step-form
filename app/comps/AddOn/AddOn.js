import './AddOn.css'

export default function AddOn({ info, chooseAddOn, addon, index }) {
  return (
    <div className={`add-on ${info.addons[index].checked === true ? 'active-add-on' : ''}`} onClick={(event) => chooseAddOn(event, addon)}>
      <div className='add-on-wrapper-info'>
        <input className='add-on-check' type='checkbox' defaultChecked={info.addons[index].checked === true ? true : false} />
        <div className='add-on-info'>
          <div className='add-on-name'>{addon.name}</div>
          <div className='add-on-description'>{addon.description}</div>
        </div>
      </div>
      <div className='add-on-price'>{`+$${info.charge === 'Monthly' ? `${addon.price}/mo` : `${addon.price * 10}/yr`}`}</div>
    </div>
  )
}