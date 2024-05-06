import Image from 'next/image'
import Navbar from './navbar'
import HeroSection from './heroSection'

export default function Home() {
  return (
    <>
    <div>
    {/* <div style={{fontFamily : 'YourFontThin'}}> */}
    <Navbar params = "Home"/>
    </div>
    <div className={`bg-[#FFFAF5]`}>
    {/* <div style={{fontFamily : 'YourFont'}} className={`bg-[#FFFAF5]`}> */}
    <HeroSection/>
    </div>
    </>
  )
}
