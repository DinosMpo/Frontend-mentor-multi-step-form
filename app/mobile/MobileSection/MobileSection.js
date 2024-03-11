"use client";

import { useState } from 'react';
import './MobileSection.css';
import MobileSection1 from '../MobileSection1/MobileSection1';
import MobileSection2 from '../MobileSection2/MobileSection2';

export default function MobileSection() {
    const [stepIndicator, setStepIndicator] = useState(2);
    return (
        <div className='mobile-section-wrapper'>
            <MobileSection1 stepIndicator={stepIndicator} setStepIndicator={setStepIndicator} />
            <MobileSection2 stepIndicator={stepIndicator} setStepIndicator={setStepIndicator} />
        </div>
    )
}
