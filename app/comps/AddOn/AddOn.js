import React from 'react'
import './AddOn.css'

const AddOn = ({info, chooseAddOn, addon}) => {
  
  return (
    // <div className='add-on'>
    //     <div className='add-on-wrapper-info'>
    //       <input onClick={(event)=> chooseAddOn(event, name)} className='add-on-check' type='checkbox'/>
    //       <div className='add-on-info'>
    //           <div className='add-on-name'>{name}</div>
    //           <div className='add-on-description'>{description}</div>
    //       </div>
    //     </div>
    //     <div className='add-on-price'>+${price}/mo</div>
    // </div>
    <div className='add-on' onClick={(event)=> chooseAddOn(event, addon.name, addon)}>
        <div className='add-on-wrapper-info'>
          <input className='add-on-check' type='checkbox'/>
          <div className='add-on-info'>
              <div className='add-on-name'>{addon.name}</div>
              <div className='add-on-description'>{addon.description}</div>
          </div>
        </div>
        {/* <div className='add-on-price'>+${price}/mo</div> */}
        <div className='add-on-price'>{`+$${info.charge ==='Monthly' ? `${addon.price}/mo` : `${addon.price*10}/yr`}`}</div>
    </div>
  )
}

export default AddOn