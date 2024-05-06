import React from 'react'
import loadimg from "../../../public/loading.gif"
import Image from 'next/image'

const loader = () => {
  return (
    <div className='flex h-screen'>
      <p className='flex w-fit my-auto mx-auto flex-col text-center justify-center '>
        <div className="flex justify-center my-1">
      <Image src={loadimg} alt="ss" height={0} width={30} className=''/>
        </div>
      Loading
      </p>
    </div>
  )
}

export default loader
