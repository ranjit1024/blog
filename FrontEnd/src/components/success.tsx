

import Lottie from 'react-lottie';
import animationData from '../assets/success.json'


export default function SuccessComp() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='absolute flex  justify-center items-center h-[100%] w-[100%] bg-white bg-opacity-[95%]'>
            < Lottie
                options={defaultOptions}
                height={`65vh`}
                width={`60vw`}
                speed={0.5}

            />
        </div >
    );
}
