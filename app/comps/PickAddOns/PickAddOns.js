"use client";

import {useState} from 'react'
import AddOn from '../AddOn/AddOn'
import BackButton from '../BackButton/BackButton';
import NextStep from '../NextStep/NextStep';

const PickAddOns = ({info, setInfo, setStepIndicator}) => {
  const [addons, setAddons] = useState([
    {name: 'Online service', description: 'Access to multiplayer games', price: 1, checked: false},
    {name: 'Larger storage', description: 'Extra 1TB of save', price: 2, checked: false},
    {name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, checked: false},
  ]);

  const chooseAddOn = (event, name, addon) => {
    if(event.currentTarget.classList.contains('active-add-on')) {
      event.currentTarget.classList.remove('active-add-on');
      event.currentTarget.children[0].children[0].checked = false;
      addon.checked = false;
    }else{
      event.currentTarget.classList.add('active-add-on');
      event.currentTarget.children[0].children[0].checked = true;
      addon.checked = true;
    }
    console.log(addons);
  }

  const listOfAddOns = addons.map((addon, key)=> {
    return <AddOn info={info} chooseAddOn={chooseAddOn} key={key} 
      // name={addon.name} description={addon.description} price={addon.price}
      addon={addon}
      
      />
  });

  const pickAddOnsValidation = () => {
    //if you havent choose an add on then you can proceed is unecessary
    //so if you have chose an add on then i have to store it and they are many
    //now how do i store the add ons? they are multiple maybe with an array? or an object? we will see tomorrow


    setStepIndicator((preValue) => preValue + 1);
    setInfo({
      ...info,
      addons: addons,
    });
  }

  return (
    <div>
        <h1 className='add-on-info-title'>Pick add-ons</h1>
        <div className='add-on-info-description'>Add-ons help enhance your gaming experience.</div>

        <div className='add-ons-container'>
            {listOfAddOns}
        </div>

        <div className='bottom-buttons'>
          <BackButton setStepIndicator={setStepIndicator}/>
          <NextStep 
            validation={pickAddOnsValidation}
          />
        </div>
    </div>
  )
}

export default PickAddOns