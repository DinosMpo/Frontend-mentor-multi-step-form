"use client"

import { useState, useEffect } from 'react'
import Plan from '../Plan/Plan'
import BottomTwoButtons from '../BottomTwoButtons/BottomTwoButtons';
import MobileBottomButtons from '../../mobile/MobileBottomButtons/MobileBottomButtons';
import './SelectPlan.css';
import { changeDatePlan } from '../../lib/validations';

const SelectPlan = ({ info, setInfo, setStepIndicator }) => {
    useEffect(() => {
        const datePlan = document.getElementsByClassName('date-plan');
        if(activeDatePlan === 'Yearly') datePlan[0].checked = true;
    }, []);

    const [activePlan, setActivePlan] = useState(info.plan);
    const [activeDatePlan, setActiveDatePlan] = useState(info.charge);

    const planList = [
        { name: 'Arcade', image: 'icon-arcade.svg', monthly: 9, yearly: 90, free: 2 },
        { name: 'Advanced', image: 'icon-advanced.svg', monthly: 12, yearly: 120, free: 2 },
        { name: 'Pro', image: 'icon-pro.svg', monthly: 15, yearly: 150, free: 2 }
    ];

    const plans = planList.map((plan, key) => {
        if (activePlan === plan.name) 
            return <Plan 
                setActivePlan={setActivePlan}
                activeDatePlan={activeDatePlan}
                key={key}
                className={`active-plan ${plan.name}`}
                name={plan.name}
                image={plan.image}
                monthly={plan.monthly}
                yearly={plan.yearly}
                free={plan.free} />
        else 
            return <Plan 
                setActivePlan={setActivePlan}
                activeDatePlan={activeDatePlan}
                key={key}
                className={plan.name}
                name={plan.name}
                image={plan.image}
                monthly={plan.monthly}
                yearly={plan.yearly}
                free={plan.free} />
    });

    const selectPlanValidation = () => {
        setInfo({
            ...info,
            plan: activePlan,
            // planPrice: 
            charge: activeDatePlan
        });
        setStepIndicator((preValue) => preValue+1);
    }

    return (
        <div className='select-plan-container'>
            <div className='select-plan-wrapper'>

                <h1 className='select-plan-title'>Select your plan</h1>
                <div className='select-plan-description'>You have the option of monthly or yearly billing.</div>

                <div className='plans-container'>
                    <div className='plans'>
                        {plans}
                    </div>

                    <div className='plans-charged'>
                        <span className={`plan-monthly ${activeDatePlan === 'Monthly' ? 'active-date-plan' : ''}`}>Monthly</span>
                        <label className="switch">
                            <input className='date-plan' type="checkbox" onClick={() => changeDatePlan(activeDatePlan, setActiveDatePlan)} />
                            <span className="slider round"></span>
                        </label>
                        <span className={`plan-yearly ${activeDatePlan === 'Yearly' ? 'active-date-plan' : ''}`}>Yearly</span>
                    </div>
                </div>
            </div>
            {/* <MobileBottomButtons setStepIndicator={setStepIndicator} validation={selectPlanValidation}/> */}
            <BottomTwoButtons setStepIndicator={setStepIndicator} validation={selectPlanValidation} />
        </div>
    )
}

export default SelectPlan