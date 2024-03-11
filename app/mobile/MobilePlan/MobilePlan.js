import './MobilePlan.css';
import Image from 'next/image';

export default function MobilePlan({ changePlan, activeDatePlan, className, name, image, monthly }) {
   return (
      <div className={`mobile-plan ${className}`} onClick={(event) => changePlan(event, name)}>
         <div className='mobile-plan-image-wrapper'>
            <Image className='mobile-plan-image'
               alt={'image'}
               width={40}
               height={40}
               src={image} />
         </div>

         <div className='mobile-plan-info-wrapper'>
            <div className='mobile-plan-name'>
               {name}
            </div>

            <div className='mobile-plan-price'>
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
