"use client"

import React, {useState} from 'react'
import './Section2.css';
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import PickAddOns from '../PickAddOns/PickAddOns'
import Summary from '../Summary/Summary'
import SelectPlan from '../SelectPlan/SelectPlan'
import ThankYou from '../ThankYou/ThankYou'

const Section2 = ({stepIndicator, setStepIndicator}) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'Arcade',
    charge: 'Monthly',
    addons: [
      { name: 'Online service', description: 'Access to multiplayer games', price: 1, checked: false },
      { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, checked: false },
      { name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, checked: false },
    ],
    total: ''
  });

  const [error, setError] = useState(false);

  const renderStep = (stepIndicator) => {
    switch(stepIndicator) {
      case 1: {
        return <PersonalInfo info={info} setInfo={setInfo} setStepIndicator={setStepIndicator} />
      };
      case 2: {
        return <SelectPlan info={info} setInfo={setInfo} setStepIndicator={setStepIndicator} />
      };
      case 3: {
        return <PickAddOns info={info} setInfo={setInfo} setStepIndicator={setStepIndicator} />
      };
      case 4: {
        return <Summary info={info} setInfo={setInfo} setStepIndicator={setStepIndicator} />
      };
      case 5: {
        return <ThankYou />
      }
      default: {
        <div></div>
      };
    }
  }

  return (
    <div className='section2'>
      {renderStep(stepIndicator)}
      
      {/* {stepIndicator === 4 ? <Confirm /> : <NextStep setStepIndicator={setStepIndicator} />} */}
      {/* {stepIndicator === 1 ? '': <BackButton  setStepIndicator={setStepIndicator} />} */}
    </div>
  )
}

export default Section2