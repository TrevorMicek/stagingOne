import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

import background from '../../images/newImg/Assets/5_PerformedAt/Background_1.png'
import performed from '../../images/newImg/Assets/5_PerformedAt/Performedat.png'
const CityScroll = () => {
  const [tickerSpeed, setTickerSpeed] = useState(1000);

  useEffect(() => {

    setTimeout(() => {
      setTickerSpeed(9)
    }, 1500);


}, [])
    return (
    <Ticker speed={tickerSpeed}>
        {({ index }) => (
          <>
            <p className="min-w-4xl whitespace-nowrap pt-0 my-auto tracking-widest text-white text-center text-xs" >
              <span className="mr-16">The Troubadour LA</span>
              <span className="mr-16">The Roxy</span>
              <span className="mr-16">The Viper Room</span>
              <span className="mr-16">The Hotel Cafe</span>
              <span className="mr-16 ">The Mint LA</span>
              <span className="mr-16 ">El Rey Theater</span>
            </p>
            </>
        )}
    </Ticker>
)
}

export default function Example() {

return (
  <div className="-mt-16" style={{gridColumn:"span 7", gridRowStart:"fourth", gridRowEnd:"fifth", position: 'relative', zIndex:'12', top: '-3vh', zIndex: '21'}}>
      <img src={background} width="400px" height="200px" className="bg-dark w-screen h-36 absolute" loading="lazy" />
    <div className=" font-default h-24 -mb-1 py-0 ">
    <div className="max-w-7xl mx-auto text-center pt-3   ">
    <div className="bg-dark relative top-2">
          <h2 className="text-center mb-0 mt-0 text-white text-xs leading-8 tracking-tight ">
            <img src={performed} width="150px" height="75px" className="w-56 mx-auto" loading="lazy" />
          </h2>
            <div className=" bg-black -mt-4 pt-3 h-10 my-auto ">
            <CityScroll />
            </div>
        </div>


    </div>
  </div>
    </div>
)
}