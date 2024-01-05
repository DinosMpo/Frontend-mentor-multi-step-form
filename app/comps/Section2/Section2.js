import React, {useState} from 'react'
import NextStep from '../NextStep/NextStep'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import PickAddOns from '../PickAddOns/PickAddOns'
import Summary from '../Summary/Summary'
import SelectPlan from '../SelectPlan/SelectPlan'
import BackButton from '../BackButton/BackButton'
import Confirm from '../Confirm/Confirm'

const Section2 = ({stepIndicator, setStepIndicator}) => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    charge: '',
    addons: [],
    total: ''
  });

  const [error, setError] = useState(false);

  const renderStep = (stepIndicator) => {
    switch(stepIndicator) {
      case 1: {
        return <PersonalInfo error={error} setInfo={setInfo} setStepIndicator={setStepIndicator}/>
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
      {/* {stepIndicator === 4 ? <Confirm /> : <NextStep setStepIndicator={setStepIndicator} />} */}
      {/* {stepIndicator === 1 ? '': <BackButton  setStepIndicator={setStepIndicator} />} */}
    </div>
  )
}

export default Section2