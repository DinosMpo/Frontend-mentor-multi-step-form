import React from 'react'
import NextStep from './NextStep'
import PersonaInfo from './PersonaInfo'
import SelectPlan from './SelectPlan'
import BackButton from './BackButton'

const Section2 = () => {
  return (
    <div className='section2'>
      {/* <PersonaInfo /> */}
      <SelectPlan />
      <BackButton />
      <NextStep />
    </div>
  )
}

export default Section2