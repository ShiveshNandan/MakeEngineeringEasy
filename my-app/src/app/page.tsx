import Image from 'next/image'
import hi from 'next/font/local'
import Navbar from './navbar'
import HeroSection from './heroSection'

// const YourFont = hi({
//   src:'../public/font/HelveticaNowDisplay-light.woff',
//   display: 'swap',
// })

export default function Home() {
  return (
    <>
    {/* <div className={YourFont.className}> */}
    <div style={{fontFamily : 'YourFontThin'}}>
    <Navbar params = "Home"/>
    </div>
    {/* <div className={`bg-[#FFFAF5]`}> */}
    <div style={{fontFamily : 'YourFont'}} className={`bg-[#FFFAF5] `}>
    <HeroSection/>
    </div>
    </>
  )
}
