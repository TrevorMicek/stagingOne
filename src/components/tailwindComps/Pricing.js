
import React, {useState} from 'react'

import music from '../../images/newImg/Assets/4_Music/Music_2.png'
import portrait from '../../images/newImg/Assets/4_Music/background_2.png'

export default function Example() {
  const [learnMore, setLearnMore] = useState(true)
  const LearnSection = () => {
    return (
      <>
      {learnMore ?  <p className="relative z-10 mx-auto mt-5 w-10/12 text-left text-gray-50 text-xs font-thin lg:mx-auto md:text-base sm:w-60 md:w-72">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry. <br /><br />Her depth of emotion and passion for what she creates burns through each track like a wildfire. It is no surprise the immense talent that surrounds Ayline in her band full of music legends. Percussionist, Oliver C. Brown, original member of KC and the Sunshine Band, Mick Fleetwood and Fleetwood Mac infuses a high energy to her music and on stage. <br /><br />Nils, a renowned producer and her lead guitarist, holds 6 #1 contemporary jazz records. Artin’s drummer, Eric Valentine, has played on more than 20 #1 singles in various genres. Her bassist Derrick Elliot, brings a unique tranquil sound to the songs. The band is rounded out by her keyboardist, Adam Peri, who adds a sensual touch to Ayline’s rock ballads.<br /><br /> “Heaven in Hell”, an edgy hard hitting rock hit with an infectious hook, features an intoxicating percussion intro by Oliver C. Brown, and an electrifying guitar (rhythm) that electrifies the track. The song is about the dangers of being in love with one person but being tempted by a chemistry with someone else.
          </p>
      :
      <>
      <p className=" relative z-10 w-44 text-left text-gray-200 text-xs font-thin lg:mx-auto md:text-base sm:w-60 md:w-72">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry.
      </p>
      <div className=" relative z-10 mb-5 flex flex-row justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-600 w-32 ml-4" onClick={()=>setLearnMore(true)}>Learn More...<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg></div>
                </>
  }
      </>
    )
  }
  return (
    <div id="music" className="p-0 m-0 relative bg-black -top-12 -mt-1 " style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth", zIndex:"22"}}>
       <img src={portrait} width="200px" height="100px" className="z-0 p-0 m-0 bg-no-repeat  h-96 absolute left-0  w-full" />
       <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className=" flex justify-start flex-row lg:text-center">

          <span>
            <span className="flex justify-start">
          <img src={music} width="100px" height="100px" className="relative  z-10 w-40 mt-8 mr-8  md:w-64 lg:72" loading="lazy" />
          </span>
          <span className="flex justify-start">
          <LearnSection />
          </span>
          </span>

        </div>

      </div>

    </div>
  )
}
