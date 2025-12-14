"use client"
import {useRef, useState} from 'react'

const VideoPlayer = () => {
    const [muted, setMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const volumeChange = useRef<HTMLInputElement>(null);
  return (
    <>
        <div className="absolute bg-zinc-800 top-20 left-20 w-32 border-2 border-dashed border-white rounded-full p-1 z-8 text-white text-center">
          <label htmlFor="videoPicker"> Select Video
            <input className="w-full ml-2 accent-amber-600 cursor-pointer"
            type="file"
            accept="video/*"
            hidden
            id="videoPicker"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file || !videoRef.current) return;

              const videoURL = URL.createObjectURL(file);
              videoRef.current.src = videoURL;
              videoRef.current.play();
            }}
          />
            </label>
          </div>
    <div className='absolute top-1/2 left-1/2 -translate-1/2 border border-white rounded-xl overflow-hidden w-fit'>
        <video 
          ref={videoRef}
          width="1000"
          src="2701875743.mp4"
          controls={false}
        />
    </div>
    <div className='flex justify-around items-center w-full h-16 absolute bottom-0 bg-neutral-950 backdrop-blur-xs text-white' >
            <div className='bg-zinc-800 rounded-full py-1 px-3 flex justify-around w-1/3 border border-white'>
            <button onClick={() => videoRef.current?.play()}>play</button>
            <button onClick={() => videoRef.current?.pause()}>pause</button>
            <button onClick={() => videoRef.current?.requestFullscreen()}>⛶</button>
            <button onClick={() => videoRef.current?.requestPictureInPicture()}>PIP</button>
            </div>
            <div>
                <label className='mr-2' htmlFor='vol'>Volume 
                    <input className="w-52 h-1.5 ml-4 accent-amber-600 cursor-pointer" ref={volumeChange} id='vol' type='range' min={0} max={100} defaultValue={70} onChange={
                        () => {
                            if (videoRef.current && volumeChange.current){
                                videoRef.current.volume = parseInt(volumeChange.current.value)/100;
                            }
                        }
                    }
                    />
                </label>
                <button className='ml-4 w-9 h-9 rounded-full bg-zinc-800 text-center border border-white text-lg text-white font-extrabold'
                 onClick={()=>{
                      if (videoRef.current){
                        videoRef.current.muted = !videoRef.current.muted;
                        setMuted(videoRef.current.muted);
                      }
                      }}
                 >{ muted ? "V" : "M" }</button>
            </div>
        </div>
    </>
  )
}

export default VideoPlayer