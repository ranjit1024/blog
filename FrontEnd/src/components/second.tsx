

import Lottie from 'react-lottie';
import animationData from '../assets/circle.json'


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
