"use client"

import React, { useState, useEffect } from 'react'
import Plan from './Plan'

const SelectPlan = () => {
    const [activePlan, setActivePlan] = useState('Arcade');
    const [activeDatePlan, setActiveDatePlan] = useState('Monthly');

    const planList = [
        {name: 'Arcade', image: 'icon-arcade.svg', monthly: 9, yearly: 90, free: 2},
        {name: 'Advanced', image: 'icon-advanced.svg', monthly: 12, yearly: 120, free: 2 },
        {name: 'Pro', image: 'icon-pro.svg', monthly: 15, yearly: 150, free: 2 }
    ];

    const changePlan = (event, name)=> {
        if(event.currentTarget.classList.contains('active-plan')) {
            event.currentTarget.classList.remove('active-plan');
            setActivePlan(name);
        }else{
            event.currentTarget.classList.add('active-plan');
            setActivePlan(name);
        }
    }

    const changeDatePlan = (event)=> {
        console.log(activeDatePlan);
        if(activeDatePlan === 'Monthly') {
            setActiveDatePlan('Yearly');
        }else if (activeDatePlan === 'Yearly'){
            setActiveDatePlan('Monthly');
        }
    }

    const plans = planList.map((plan, key)=> {
        if(activePlan === plan.name) return <Plan changePlan={changePlan} key={key} className={`active-plan ${plan.name}`} name={plan.name} image={plan.image} monthly={plan.monthly} yearly={plan.yearly} free={plan.free}/>
        else                         return <Plan changePlan={changePlan} key={key} className={plan.name} name={plan.name} image={plan.image} monthly={plan.monthly} yearly={plan.yearly} free={plan.free}/>
    });


  return (
    <div className='select-plan-container'>
        <h1 className='select-plan-title'>Select your plan</h1>
        <div className='select-plan-description'>You have the option of monthly or yearly billing.</div>

        <div className='plans-container'>
            <div className='plans'>
                {plans}
            </div>
            <div className='plans-charged'>
                <span className={`plan-monthly ${activeDatePlan === 'Monthly' ? 'active-date-plan' : ''}`}>Monthly</span>

                <label className="switch">
                    <input type="checkbox" onClick={changeDatePlan}/>
                    <span className="slider round"></span>
                </label>

                <span className={`plan-yearly ${activeDatePlan === 'Yearly' ? 'active-date-plan' : ''}`}>Yearly</span>
            </div>
        </div>
    </div>
  )
}

export default SelectPlan