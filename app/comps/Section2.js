import React from 'react'
import NextStep from './NextStep'
import PersonalInfo from './PersonalInfo'
import PickAddOns from './PickAddOns'
import Summary from './Summary'
import SelectPlan from './SelectPlan'
import BackButton from './BackButton'
import Confirm from './Confirm'

const Section2 = ({stepIndicator, setStepIndicator}) => {
  const renderStep = (stepIndicator) => {
    switch(stepIndicator) {
      case 1: {
        return <PersonalInfo />
      };
      case 2: {
        return <SelectPlan />
      };
      case 3: {
        return <PickAddOns />
      };
      case 4: {
        return <Summary />
      };
      case 5: {
        return <PersonalInfo />
      };
      default: {
        <div></div>
      };
    }
  }

  return (
    <div className='section2'>
      {renderStep(stepIndicator)}
      {stepIndicator === 4 ? <Confirm /> : <NextStep setStepIndicator={setStepIndicator} />}
      {stepIndicator === 1 ? '': <BackButton  setStepIndicator={setStepIndicator} />}
    </div>
  )
}

export default Section2