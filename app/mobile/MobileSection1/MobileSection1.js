import './MobileSection1.css';

export default function MobileSection1({mobileStepIndicator}) {
    return (
        <div className='mobile-steps-container'>
            <div className='mobile-steps'>
                <div className={`mobile-step ${mobileStepIndicator == 1 ? 'active-mobile-step' : ''}`}>1</div>
                <div className={`mobile-step ${mobileStepIndicator == 2 ? 'active-mobile-step' : ''}`}>2</div>
                <div className={`mobile-step ${mobileStepIndicator == 3 ? 'active-mobile-step' : ''}`}>3</div>
                <div className={`mobile-step ${mobileStepIndicator == 4 ? 'active-mobile-step' : ''}`}>4</div>
            </div>
        </div>
    )
}
