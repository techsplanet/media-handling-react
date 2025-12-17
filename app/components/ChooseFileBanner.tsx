import React from 'react'
import { Upload } from 'lucide-react'

type ChooseFileBannerProps = {
  videoRef: React.RefObject<HTMLVideoElement | null>,
  isVideoLoaded: boolean ,
  setIsVideoLoaded: React.Dispatch<React.SetStateAction<boolean>>
}
const ChooseFileBanner = ( {videoRef,isVideoLoaded,  setIsVideoLoaded}: ChooseFileBannerProps ) => {
  
  return (
    <>
    <div className={`absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-1/2 border-4 border-dashed border-white rounded-2xl flex justify-center items-center  ${!isVideoLoaded ? "block" : "hidden"}`}>
        <label htmlFor='choosefile' className='text-lg px-2 py-1 font-bold text-white underline italic cursor-pointer'>
            <Upload size={54}  className='mx-auto mb-4'/>
            Choose Video File
            <input id='choosefile' type='file' 
            accept="video/*"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file || !videoRef?.current) return;

              const videoURL = URL.createObjectURL(file);
              videoRef.current.src = videoURL;
              videoRef.current.play();
              setIsVideoLoaded(true);
            }}
             />
        </label>
    </div>

    
    </>
    
  
)
}

export default ChooseFileBanner