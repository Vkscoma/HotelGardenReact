import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const titleRef = useRef(null);
    const { scrollY } = useScroll();

    // Create a parallax effect by transforming the scrollY value
    const y = useTransform(scrollY, [0, 300], [0, 100]); // Adjust these values as needed for your effect
    const opacity = useTransform(scrollY, [0, 300], [1, 0.4]); // Adjust these values as needed for your effect

    const titleStyle = {
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
    };

    return (
        <div id='home' className='relative w-full h-full'>
            <div className="relative flex justify-center md:mt-40 my-64">
                <motion.h1
                    ref={titleRef}
                    className="md:text-9xl mobile--title text-white text-center font-bold"
                    style={{ ...titleStyle, y, opacity }}
                >
                    HOTEL <br />GARDEN
                </motion.h1>
            </div>
        </div>
    );
};

export default Hero;
