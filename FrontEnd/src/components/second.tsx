

import Lottie from 'react-lottie';
import animationData from '../assets/Animation - 1740145077591.json';


export default function SecondSide() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            < Lottie
                options={defaultOptions}
                height={`100vh`}
                width={`150vh`}
                speed={0.2}


            />
        </div >
    );
}
