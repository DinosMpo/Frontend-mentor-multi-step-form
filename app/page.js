"use client"

import {useState} from 'react'
import Section1 from './comps/Section1/Section1'
import Section2 from './comps/Section2/Section2'
import MobileSection from './mobile/MobileSection/MobileSection'

export default function Home() {
  const [stepIndicator, setStepIndicator] = useState(5);

  return (
    <div className='container'>
      {/* <div className='section-wrapper'>
        <Section1 stepIndicator={stepIndicator}/>
        <Section2 stepIndicator={stepIndicator} setStepIndicator={setStepIndicator}/>
      </div> */}
      <MobileSection />
    </div>
  )
}
