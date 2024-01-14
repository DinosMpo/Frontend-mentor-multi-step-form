import { useState } from 'react';
import './MobileSection2.css';
import MobilePersonalInfo from '../MobilePersonalInfo/MobilePersonalInfo';
import MobileSelectPlan from '../MobileSelectPlan/MobileSelectPlan';
import MobilePickAddOns from '../MobilePickAddOns/MobilePickAddOns';
import MobileSummary from '../MobileSummary/MobileSummary';
import MobileThankYou from '../MobileThankYou/MobileThankYou';

export default function MobileSection2({ mobileStepIndicator, setMobileStepIndicator }) {
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

  const renderStep = (mobileStepIndicator) => {
    switch (mobileStepIndicator) {
      case 1: {
        return <MobilePersonalInfo
          error={error}
          info={info}
          setInfo={setInfo}
          setMobileStepIndicator={setMobileStepIndicator}
        />
      };
      case 2: {
        return <MobileSelectPlan />
      };
      case 3: {
        return <MobilePickAddOns />
      };
      case 4: {
        return <MobileSummary />
      };
      case 5: {
        return <MobileThankYou />
      };
      default: {
        <div>sssssss</div>
      };
    }
  }

  return (
    <div className='section2'>
      {renderStep(mobileStepIndicator)}
      
    </div>
  )
}
