"use client";

import { useState } from 'react'
import AddOn from '../AddOn/AddOn'
import './PickAddOns.css';
import BottomTwoButtons from '../BottomTwoButtons/BottomTwoButtons';
import NextStep from '../NextStep/NextStep';
import BackButton from '../BackButton/BackButton';

const PickAddOns = ({ info, setInfo, setStepIndicator }) => {
  const [addons, setAddons] = useState(info.addons);

  const chooseAddOn = (event, addon) => {
    if (event.currentTarget.classList.contains('active-add-on')) {
      event.currentTarget.classList.remove('active-add-on');
      event.currentTarget.children[0].children[0].checked = false;
      addon.checked = false;
    } else {
      event.currentTarget.classList.add('active-add-on');
      event.currentTarget.children[0].children[0].checked = true;
      addon.checked = true;
    }
    console.log(addons);
  }

  const listOfAddOns = addons.map((addon, key) => {
    return <AddOn info={info} chooseAddOn={chooseAddOn} key={key}
      addon={addon}
      index={key}
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
    <div className='pick-addon-container'>
      <div className='pick-addon-wrapper'>

        <h1 className='add-on-info-title'>Pick add-ons</h1>
        <div className='add-on-info-description'>Add-ons help enhance your gaming experience.</div>

        <div className='add-ons-container'>
          {listOfAddOns}
        </div>
      </div>

      <BottomTwoButtons>
        <BackButton setStepIndicator={setStepIndicator} />
        <NextStep validation={pickAddOnsValidation} />
      </BottomTwoButtons>
    </div>
  )
}

export default PickAddOns