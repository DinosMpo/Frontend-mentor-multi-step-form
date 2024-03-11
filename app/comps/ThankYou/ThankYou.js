import './ThankYou.css';
import Image from 'next/image';

export default function ThankYou () {
  return (
    <div className='thank-you-container'>
      <Image alt='icon-thank-you' src='./icon-thank-you.svg' width={80} height={80} />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}
