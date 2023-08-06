import Section1 from './comps/Section1'
import Section2 from './comps/Section2'

export default function Home() {
  return (
    <div className='container'>
      <div className='section-wrapper'>
        <Section1 />
        <Section2 />
      </div>
    </div>
  )
}
