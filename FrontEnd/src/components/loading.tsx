
import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1740069837862.json';

export function Loading() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='absolute bg-black  w-[100%] h-[100%] bg-opacity-80 flex justify-center items-center'>
            <Lottie

                options={defaultOptions}
                height={600}
                width={600}
            />
        </div>
    );


}