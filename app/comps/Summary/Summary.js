import './Summary.css'
import BackButton from '../BackButton/BackButton';
import ConfirmButton from '../ConfirmButton/ConfirmButton';
import SummaryAddOn from '../SummaryAddOn/SummaryAddOn';
import ThankYou from '../ThankYou/ThankYou'

const Summary = ({ info, setInfo, setStepIndicator }) => {
    // console.log(info);
    let price = 0;
    if(info.plan == 'Arcade') {
        info.charge == 'Monthly' ? price = 9 : price = 90;
    }else if(info.plan == 'Advanced') {
        info.charge == 'Monthly' ? price = 12 : price = 120;
    }else if(info.plan == 'Pro') {
        info.charge == 'Monthly' ? price = 15 : price = 150;
    }
    // console.log(price);

    let totalAmount = 0;
    const addonList = info.addons.map((addon, key) => {
        if(addon.checked) {
            totalAmount += info.charge == 'Monthly' ? addon.price : addon.price * 10;;
            return <SummaryAddOn key={key} addon={addon} charge={info.charge} />
        }
    });

    if(info.plan == 'Arcade') {
        totalAmount += info.charge == 'Monthly' ? 9 : 9 * 10;
    }else if(info.plan == 'Advanced') {
        totalAmount += info.charge == 'Monthly' ? 12 : 12 * 10;;
    }else if(info.plan == 'Pro') {
        totalAmount += info.charge == 'Monthly' ? 15 : 15 * 10;;
    }

    const summaryValidation = () => {
        setStepIndicator((preValue) => preValue + 1);
    }

    return (
        <div className='summary-wrapper'>
            <h1 className='summary-info-title'>Finishing up</h1>
            <div className='summary-info-description'>Double-check everything looks OK before confirming.</div>

            <div className='summary-container'>
                <div className='summary-plan-container'>
                    <div className='summary-plan-wrapper'>
                        <div className='summary-plan-name'>
                            {/* Arcade (Monthly) */}
                            {`${info.plan} (${info.charge})`}
                        </div>
                        <div className='summary-plan-change'>Change</div>
                    </div>
                    
                    <div className='summary-plan-price'>
                        {/* $9/mo */}
                        {`$${price}/${info.charge == 'Monthly'? 'mo': 'yr'}`}
                    </div>

                </div>
                <hr style={{ width: '100%' }}></hr>

                <div className='summary-addon-container'>
                    {/* <div className='summary-addon'>
                        <div className='summary-addon-name'>Online service</div>
                        <div className='summary-addon-price'>+$1/mo</div>
                    </div>
                    <div className='summary-addon'>
                        <div className='summary-addon-name'>Larger storage</div>
                        <div className='summary-addon-price'>+$2/mo</div>
                    </div> */}
                    {addonList}
                </div>


            </div>
            <div className='summary-total-container'>
                <div className='summary-total'>
                    {/* Total (per month) */}
                    {`Total (per ${info.charge == 'Monthly'? 'month' : 'year'})`}
                </div>
                <div className='summary-total-price'>
                    {/* +$12/mo */}
                    {`+$${totalAmount}/${info.charge == 'Monthly'? 'mo': 'yr'}`}
                </div>
            </div>

            <div className='bottom-buttons'>
                <BackButton setStepIndicator={setStepIndicator}/>
                <ConfirmButton 
                    validation={summaryValidation}
                />
            </div>
        </div>
    )
}

export default Summary