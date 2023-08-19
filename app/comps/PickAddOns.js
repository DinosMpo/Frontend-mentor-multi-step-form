import React from 'react'
import AddOn from './AddOn'

const AddOns = () => {
  const addons = [
    {name: 'Online service', description: 'Access to multiplayer games', price: 1},
    {name: 'Larger storage', description: 'Extra 1TB of save', price: 2},
    {name: 'Customizable profile', description: 'Custom theme on your profile', price: 2},
  ];

  const chooseAddOn = (event, name) => {
    if(event.currentTarget.parentElement.parentElement.classList.contains('active-add-on')) {
      event.currentTarget.parentElement.parentElement.classList.remove('active-add-on');
    }else{
      event.currentTarget.parentElement.parentElement.classList.add('active-add-on');
    }
    console.log(event.currentTarget.parentElement.parentElement);
  }

  const listOfAddOns = addons.map((addon, key)=> {
    return <AddOn chooseAddOn={chooseAddOn} key={key} name={addon.name} description={addon.description} price={addon.price} />
  });

  return (
    <div>
        <h1 className='add-on-info-title'>Pick add-ons</h1>
        <div className='add-on-info-description'>Add-ons help enhance your gaming experience.</div>

        <div className='add-ons-container'>
            {listOfAddOns}
        </div>
    </div>
  )
}

export default AddOns