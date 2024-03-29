"use client";

import { useState } from 'react';
import Section1 from './comps/Section1/Section1';
import Section2 from './comps/Section2/Section2';

export default function Home() {
  const [stepIndicator, setStepIndicator] = useState(1);

  return (
    <div className='container'>
      <div className='section-wrapper'>
        <Section1 stepIndicator={stepIndicator} />
        <Section2 stepIndicator={stepIndicator} setStepIndicator={setStepIndicator} />
      </div>
    </div>
  )
}