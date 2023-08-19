import React from 'react'
import './AddOn.css'

const AddOn = ({chooseAddOn, name, description, price}) => {
  return (
    <div className='add-on'>
        <div className='add-on-wrapper-info'>
          <input onClick={(event)=> chooseAddOn(event, name)} className='add-on-check' type='checkbox'/>
          <div className='add-on-info'>
              <div className='add-on-name'>{name}</div>
              <div className='add-on-description'>{description}</div>
          </div>
        </div>
        <div className='add-on-price'>+${price}/mo</div>
    </div>
  )
}

export default AddOn