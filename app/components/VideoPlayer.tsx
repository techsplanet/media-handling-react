"use client"
import {useRef, useState} from 'react'
import ChooseFileBanner from './ChooseFileBanner';
import MediaControlBar from './MediaControlBar';

const VideoPlayer = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [muted, setMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement| null>(null);
    const volumeChange = useRef<HTMLInputElement | null>(null);
  return (
    <>

      <ChooseFileBanner videoRef={videoRef} isVideoLoaded={isVideoLoaded} setIsVideoLoaded={setIsVideoLoaded}/>
      <div className={`absolute top-1/2 left-1/2 -translate-1/2 border border-white rounded-xl overflow-hidden w-fit ${isVideoLoaded ? "block" : "hidden"}`}>
        <video 
          ref={videoRef}
          width="1000"
          onEnded={()=>setIsVideoLoaded(false)}
          controls={false}
        />
    </div>
    <MediaControlBar videoRef={videoRef} volumeChange={volumeChange} setMuted={setMuted} muted={muted}/>
    </>
  )
}

export default VideoPlayer