import { useState } from 'react';
import './MobileSelectPlan.css';
import MobilePlan from '../MobilePlan/MobilePlan';
import MobileBottomButtons from '../MobileBottomButtons/MobileBottomButtons';

export default function MobileSelectPlan({ info, setInfo, setStepIndicator }) {
  const [activePlan, setActivePlan] = useState('Arcade');
  const [activeDatePlan, setActiveDatePlan] = useState('Monthly');

  const planList = [
    { name: 'Arcade', image: 'icon-arcade.svg', monthly: 9, yearly: 90, free: 2 },
    { name: 'Advanced', image: 'icon-advanced.svg', monthly: 12, yearly: 120, free: 2 },
    { name: 'Pro', image: 'icon-pro.svg', monthly: 15, yearly: 150, free: 2 }
  ];

  const changePlan = (event, name) => {
    if (event.currentTarget.classList.contains('active-plan')) {
      event.currentTarget.classList.remove('active-plan');
      setActivePlan(name);
    } else {
      event.currentTarget.classList.add('active-plan');
      setActivePlan(name);
    }
  }

  const changeDatePlan = (event) => {
    console.log(activeDatePlan);
    if (activeDatePlan === 'Monthly') {
      setActiveDatePlan('Yearly');
    } else if (activeDatePlan === 'Yearly') {
      setActiveDatePlan('Monthly');
    }
  }

  const plans = planList.map((plan, key) => {
    if (activePlan === plan.name)
      return <MobilePlan
        changePlan={changePlan}
        activeDatePlan={activeDatePlan}
        key={key}
        className={`active-plan ${plan.name}`}
        name={plan.name}
        image={plan.image}
        monthly={plan.monthly}
        yearly={plan.yearly}
        free={plan.free} />
    else
      return <MobilePlan changePlan={changePlan} activeDatePlan={activeDatePlan} key={key} className={plan.name} name={plan.name} image={plan.image} monthly={plan.monthly} yearly={plan.yearly} free={plan.free} />
  });

  const selectPlanValidation = () => {
    setInfo({
        ...info,
        plan: activePlan,
        // planPrice: 
        charge: activeDatePlan
    });
    setStepIndicator((preValue) => preValue+1);
}

  // const selectPlanValidation = () => {
  //   setInfo({
  //     ...info,
  //     plan: activePlan,
  //     charge: activeDatePlan
  //   });
  //   setStepIndicator((preValue) => preValue + 1);
  // }

  return (
    <div className='mobile-select-plan-container'>
      <div className='mobile-select-plan-wrapper'>
        <h1 className='mobile-select-plan-title'>Select your plan</h1>
        <div className='mobile-select-plan-description'>You have the option of monthly or yearly billing.</div>

        <div className='mobile-plans-container'>
          <div className='mobile-plans'>
            {plans}
          </div>

          <div className='mobile-plans-charged'>
            <span className={`mobile-plan-monthly ${activeDatePlan === 'Monthly' ? 'active-date-plan' : ''}`}>Monthly</span>

            <label className="switch">
              <input type="checkbox"
              onClick={changeDatePlan}
              />
              <span className="slider round"></span>
            </label>

            <span className={`mobile-plan-yearly ${activeDatePlan === 'Yearly' ? 'active-date-plan' : ''}`}>Yearly</span>
          </div>

          {/* <div className='bottom-buttons'>
            
          </div> */}
        </div>
        
      </div>

      <MobileBottomButtons  setStepIndicator={setStepIndicator} validation={selectPlanValidation} />

    </div>
  )
}
