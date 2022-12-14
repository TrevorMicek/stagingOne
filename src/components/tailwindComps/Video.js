import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

import apple from '../../images/newImg/Assets/2_AvailableNow/applem.png'
import spotify from '../../images/newImg/Assets/2_AvailableNow/spotify.png'
import yt from '../../images/newImg/Assets/2_AvailableNow/youtube.png'


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
            <p className="min-w-4xl whitespace-nowrap pt-0 my-auto tracking-widest text-white text-center text-base" >
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
/*
 <div className=" mx-auto w-44 flex flew-row items-center justify-around space-x-4">
                <a href="https://www.amazon.com/music/player/albums/B0B5ZF67NM?ref=sr_1_1&s=dmusic&keywords=heaven+in+hell+ayline+artin&crid=HA4KADOMN0VJ&sprefix=heaven+in+hell+ayline+artin%2Cdigital-music%2C119&qid=1657776156&sr=1-1"><img src={amazon} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
              </div>
*/

export default function Example() {

return (
  <div className="" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second", position: 'relative', zIndex:'12', top: '-3vh', zIndex: '21'}}>
     <div className="mx-auto bg-black">
      <iframe width="350" height="300"
        src="https://www.youtube.com/embed/ueWI3I8Nx4Y?&autoplay=1&mute=1"
        autoplay title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
className="mx-auto w-72">
</iframe>



</div>
<div className="bg-purple -mt-5 h-8 my-auto flex space-x-3 items-center  justify-center">

<a href="https://www.amazon.com/music/player/albums/B0B5ZF67NM?ref=sr_1_1&s=dmusic&keywords=heaven+in+hell+ayline+artin&crid=HA4KADOMN0VJ&sprefix=heaven+in+hell+ayline+artin%2Cdigital-music%2C119&qid=1657776156&sr=1-1"><img src={yt} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>

            </div>
    </div>
)
}


