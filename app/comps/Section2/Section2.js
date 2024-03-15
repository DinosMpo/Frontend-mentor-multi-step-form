"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic';
import './Section2.css';
import PickAddOns from '../PickAddOns/PickAddOns'
import Summary from '../Summary/Summary'
import SelectPlan from '../SelectPlan/SelectPlan'
import ThankYou from '../ThankYou/ThankYou'

const PersonalInfo = dynamic(() => import('../PersonalInfo/PersonalInfo'), {
  ssr: false,
});

const Section2 = ({ stepIndicator, setStepIndicator }) => {
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
    switch (stepIndicator) {
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
    </div>
  )
}

export default Section2