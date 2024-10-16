import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const shlok = [
  {
    "line1" : "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः,",
    "line2" : "सर्वे भद्राणि पश्यन्तु मा कश्चिद् दुःख भाग्भवेत्।",
    "mhline" : "सब सुखी हों, सब निरोग रहें। सब अच्छी घटनाओं को देखने वाले अर्थात् साक्षी रहें और कभी किसी को दुःख का भागी न बनना पड़े।",
    "meline" : "May all be happy,May all be free from illness,May all experience the auspicious,May no one be overtaken by any suffering.",
  },
  {
    "line1" : "प्राता रत्नं प्रातरित्वा दधाति ।",
    "line2" : "",
    "mhline" : "प्रातःकाल उठने वाले अच्छा स्वास्थ्य प्राप्त करतें है ।",
    "meline" : "An early riser earns good health.",
  },
  {
    "line1" : "अमृतत्वस्य तु नाशास्ति वित्तेन ।",
    "line2" : "",
    "mhline" : "धन से अमरत्व प्राप्त नहीं किया जा सकता ।",
    "meline" : "Immortality cannot be achieved by wealth.",
  },
  {
    "line1" : "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । ",
    "line2" : "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ ",
    "mhline" : "कर्म ही तेरा अधिकार है, फल की इच्छा मत कर। फल की आशा में कर्म मत कर, कर्म में ही लगा रह)",
    "meline" : "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
  },
  {
    "line1" : "उद्योगिनं पुरुषसिंहमुपैति लक्ष्मीः।",
    "line2" : "दैवेन देयमिति कापुरुषा वदन्ति।",
    "mhline" : "परिश्रमी व्यक्ति को लक्ष्मी प्राप्त होती है। भाग्य से मिलने की बात केवल कायर लोग करते हैं।",
    "meline" : "Prosperity comes to the diligent. Only cowards talk about destiny.",
  },
  {
    "line1" : "अविवेकः परमापदाम्पदम्।",
    "line2" : "विवेको दारिद्र्यस्य भूषणम्॥",
    "mhline" : "अविवेक सभी आपदाओं का कारण है। विवेक ही निर्धनता का भूषण है।",
    "meline" : "Lack of wisdom is the root of all calamities. Wisdom is the ornament of poverty.",
  },
]

const loader = () => {

  // let number = 0;
  const [number, setnumber] = useState(0)
  const max: number = shlok.length - 1;


  useEffect(() => {
    function getRandomNumber() {
      setnumber(Math.floor(Math.random() * (max - 0 + 1)) + 0)
      // number = (Math.floor(Math.random() * (max - 0 + 1)) + 0)
    }
   getRandomNumber();
  //  console.log(number);
  }, [])
  
  

  
  return (
    <div className='flex h-screen'>
      <p className='flex w-6/12 max-sm:w-11/12  my-auto mx-auto flex-col text-center justify-center '>
        <div className="flex justify-center my-1">
      <Image src={'/loading.gif'} alt="ss" height={0} width={30} className=''/>
        </div>
        <div className='mx-auto pt-5 font-bold'>
        <p>{shlok[number]?.line1}</p>
        <p>{shlok[number]?.line2}</p>
        <p className='italic text-xs pt-5 font-extralight'> <span className='font-bold'>अर्थ: </span> {shlok[number]?.mhline}</p>
        <p className='italic text-xs pt-2 font-extralight'> <span className='font-bold'>Meaning: </span>  {shlok[number]?.meline}</p>      
        </div>
      </p>
    </div>
  )
}

export default loader
