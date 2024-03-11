import {useState} from 'react';
import './MobilePickAddOns.css';
import MobileAddOn from '../MobileAddOn/MobileAddOn';

export default function MobilePickAddOns({info}) {
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
    return <MobileAddOn info={info} chooseAddOn={chooseAddOn} key={key}
      // name={addon.name} description={addon.description} price={addon.price}
      addon={addon}
      index={key}
    />
  });

  return (
    <div className='mobile-pick-addon-container'>
      <div className='mobile-pick-addon-wrapper'>
        <h1 className='mobile-add-on-info-title'>Pick add-ons</h1>
        <div className='mobile-add-on-info-description'>Add-ons help enhance your gaming experience.</div>

        <div className='mobile-add-ons-container'>
          {listOfAddOns}
        </div>

        {/* <BottomButtons setStepIndicator={setStepIndicator} validation={pickAddOnsValidation} /> */}
      </div>
    </div>
  )
}

