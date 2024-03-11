import './MobileSection1.css';

export default function MobileSection1({stepIndicator}) {
    return (
        <div className='mobile-steps-container'>
            <div className='mobile-steps'>
                <div className={`mobile-step ${stepIndicator == 1 ? 'active-mobile-step' : ''}`}>1</div>
                <div className={`mobile-step ${stepIndicator == 2 ? 'active-mobile-step' : ''}`}>2</div>
                <div className={`mobile-step ${stepIndicator == 3 ? 'active-mobile-step' : ''}`}>3</div>
                <div className={`mobile-step ${stepIndicator == 4 ? 'active-mobile-step' : ''}`}>4</div>
            </div>
        </div>
    )
}
