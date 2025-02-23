

import Lottie from 'react-lottie';
import animationData from '../assets/blogloadiong.json'


export default function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='absolute h-[100%] w-[100%] bg-gray-500 bg-opacity-90 z-40 flex justify-center items-center'>
            < Lottie
                options={defaultOptions}
                height={`50vh`}
                width={`50vh`}
                speed={0.5}

            />
        </div >
    );
}
