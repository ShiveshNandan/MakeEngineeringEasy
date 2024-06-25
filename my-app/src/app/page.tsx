import Image from 'next/image'
import Navbar from './navbar'
import HeroSection from './heroSection'


export default function Home() {

  console.log( process.env.NEXT_PUBLIC_DB_HOST);

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
