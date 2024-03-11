"use client";

import { useState } from 'react';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import './DesktopSection.css';

export default function DesktopSection() {
  const [stepIndicator, setStepIndicator] = useState(1);

  return (
    <div className='desktop-section-wrapper'>
      <Section1 stepIndicator={stepIndicator} />
      <Section2 stepIndicator={stepIndicator} setStepIndicator={setStepIndicator} />
    </div>
  )
}
