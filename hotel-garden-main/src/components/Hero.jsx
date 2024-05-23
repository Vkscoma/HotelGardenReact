
const Hero = () => {
    const titleStyle = {
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)',
    };

    return (
        <div id='home' className='relative w-full h-full'>
            <div className="relative flex justify-center md:mt-40 my-64">
                <h1 className="md:text-9xl mobile--title text-white text-center font-bold" style={titleStyle}>
                    HOTEL <br />GARDEN
                </h1>
            </div>
        </div>
    );
};

export default Hero;
