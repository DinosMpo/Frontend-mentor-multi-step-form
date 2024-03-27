import './SummaryAddOn.css';

export default function SummaryAddOn({ addon, charge }) {
    return (
        <div className='summary-addon'>
            <div className='summary-addon-name'>
                {addon.name}
            </div>
            <div className='summary-addon-price'>
                {`+$${charge == 'Monthly' ? addon.price + '/mo' : (addon.price * 10 + '/yr')}`}
            </div>
        </div>
    )
}