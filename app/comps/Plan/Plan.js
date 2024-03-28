import Image from 'next/image'
import { changePlan } from '../../lib/validations';
import './Plan.css';

export default function Plan({setActivePlan, activeDatePlan, className, name, image, monthly}) {
  return (
    <div className={`plan ${className}`} onClick={(event) => changePlan(event, name, setActivePlan)}>
        <div className='plan-image-wrapper'>
            <Image className='plan-image' alt={'image'} width={40} height={40} src={image}/>
        </div>

        <div className='plan-info-wrapper'>
            <div className='plan-name'>
                {name}
            </div>

            <div className='plan-price'>
                {activeDatePlan === 'Monthly' ? (`$${monthly}/mo`) : (
                    <div>
                        <div>${monthly}0/yr</div>
                        <div className='yearly-price'>2 months free</div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}