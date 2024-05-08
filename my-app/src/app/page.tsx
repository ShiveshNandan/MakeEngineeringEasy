import Image from 'next/image'
import Navbar from './navbar'
import HeroSection from './heroSection'


export default function Home() {
  return (
    <>
    {/* <div style={{fontFamily : 'YourFontThin'}}> */}
    <Navbar params = "Home"/>
    {/* </div> */}
    <div style={{fontFamily : 'YourFontThin'}} className={`bg-[#FFFAF5] `}>
    <HeroSection/>
    </div>
    </>
  )
}
