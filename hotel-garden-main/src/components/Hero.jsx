
const Hero = () => {
    const titleStyle = {
        'textShadow': '0 0 10px rgba(255, 255, 255, 0.7)',
    }
    return (
        <div className='relative w-full h-screen'>
            <div id="home" className="relative flex justify-center md:mt-40 my-64">
                <h1 className="md:text-9xl text-7xl text-white text-center font-bold" style={titleStyle}>HOTEL <br />GARDEN</h1>
            </div>
        </div>
    )
}

export default Hero