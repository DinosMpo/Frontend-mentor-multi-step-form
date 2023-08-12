import React from 'react'
import Image from 'next/image'

const Plan = ({changePlan, className, name, image, monthly, yearly, free}) => {
  return (
    <div className={`plan ${className}`} onClick={(event) => changePlan(event, name)}>
        <div className='plan-image-wrapper'>
            <Image className='plan-image' width={40} height={40} src={image}/>
        </div>

        <div className='plan-info-wrapper'>
            <div className='plan-name'>
                {name}
            </div>
            <div className='plan-price'>
                ${monthly}/mo
            </div>
        </div>
    </div>
  )
}

export default Plan