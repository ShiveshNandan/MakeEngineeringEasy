'use client'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'


export default function Home() {

  return (
    <>
    {/* <div style={{fontFamily : 'YourFontThin'}}> */}
    <Navbar params = "Home"/>
    {/* </div> */}
    <div style={{fontFamily : 'YourFontThin'}} className={`bg-[#FFFAF5] dark:bg-[#191817]`}>
    <HeroSection/>
    </div>
    </>
  )
}
