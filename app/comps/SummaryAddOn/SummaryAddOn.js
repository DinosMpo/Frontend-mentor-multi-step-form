import './SummaryAddOn.css';

export default function SummaryAddOn({ addon, charge }) {
    console.log(charge);

    return (
        <div className='summary-addon'>
            <div className='summary-addon-name'>
                {/* Larger storage */}
                {addon.name}
            </div>
            <div className='summary-addon-price'>
                {/* +$2/mo */}
                {`+$${charge == 'Monthly' ? addon.price + '/mo' : (addon.price * 10 + '/yr')}`}
            </div>
        </div>
    )
}