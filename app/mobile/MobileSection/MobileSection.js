import { useState } from 'react';
import './MobileSection.css';
import MobileSection1 from '../MobileSection1/MobileSection1';
import MobileSection2 from '../MobileSection2/MobileSection2';

export default function MobileSection() {
    const [mobileStepIndicator, setMobileStepIndicator] = useState(1);

    return (
        <div className='mobile-section-wrapper'>
            <MobileSection1 mobileStepIndicator={mobileStepIndicator} />
            <MobileSection2 mobileStepIndicator={mobileStepIndicator} setMobileStepIndicator={setMobileStepIndicator} />
        </div>
    )
}
