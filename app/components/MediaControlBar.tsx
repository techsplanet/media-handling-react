import React from 'react'
import { Play, Pause, PictureInPicture, Fullscreen, VolumeOff, Volume2 } from 'lucide-react'

type MediaControlBarProps = {
    videoRef: React.RefObject<HTMLVideoElement | null>,
    volumeChange: React.RefObject<HTMLInputElement | null>, 
    setMuted: React.Dispatch<React.SetStateAction<boolean>>, 
    muted: boolean
}

const MediaControlBar = ({videoRef, volumeChange, setMuted, muted}: MediaControlBarProps ) => {
  return (
    <div className='flex justify-around items-center w-full h-16 absolute bottom-0 bg-neutral-950 backdrop-blur-xs text-white' >
            <div className='bg-zinc-800 rounded-full py-1 px-3 flex justify-around w-1/3 border border-white'>
            <button onClick={() => videoRef.current?.play()}><Play className='w-8 h-8'/><span className='sr-only'>Play video</span></button>
            <button onClick={() => videoRef.current?.pause()}><Pause className='w-8 h-8'/><span className='sr-only'>Pause video</span></button>
            <button onClick={() => videoRef.current?.requestFullscreen()}><Fullscreen className='w-8 h-8'/><span className='sr-only'>Fullscreen</span></button>
            <button onClick={() => videoRef.current?.requestPictureInPicture()}><PictureInPicture className='w-8 h-8'/><span className='sr-only'>Picture in Picture</span></button>
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
                 >{ muted ? <VolumeOff className='w-8 h-8'/> : <Volume2 className='w-8 h-8'/> }</button>
            </div>
        </div>
  )
}

export default MediaControlBar