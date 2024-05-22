import { useState } from 'react';
import { FaInstagram, FaTiktok, FaSpotify, FaApple, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleNavToggle = () => {
        const screenWidth = window.innerWidth
        if (screenWidth < 768) {
            const mobileHeader = document.querySelector('.navbar-mobile')
            setIsOpen(!isOpen)
            if (isOpen) {
                mobileHeader.style.transform = 'translateX(100%)'
            } else {
                mobileHeader.style.transform = 'translateX(0)'
            }
        }
    }
    const socialMediaItems = [
        {
            name: "Instagram",
            link: "https://www.instagram.com/hotelgardenband/",
            icon: FaInstagram,
        },
        {
            name: "TikTok",
            link: "https://www.tiktok.com/@hotelgardenband",
            icon: FaTiktok,
        },
        {
            name: "Spotify",
            link: "https://open.spotify.com/artist/33YRDb38CEI0aA2TS5csdx?si=1uYMovQbQpG7uSgqTJB5-g",
            icon: FaSpotify,
        },
        {
            name: "Apple Music",
            link: "https://music.apple.com/us/artist/hotel-garden/1648459007",
            icon: FaApple,
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/channel/UCLW6HCmYLTbe_Je8Q63-PMQ",
            icon: FaYoutube,
        },
    ];


    window.addEventListener('scroll', () => {
        const mobileHeader = document.querySelector('.mobile--header')
        if (window.scrollY > 200) {
            mobileHeader.classList.add('bg-slate-900')
        } else {
            mobileHeader.classList.remove('bg-slate-900')
        }
    })
    return (
        <>
            <div className='md:hidden mobile--header flex text-center justify-center items-center w-full fixed top-0 py-3 transition-all 250ms ease-in-out z-50'>
                <h1 className="text-xl text-white font-bold text-center md:text-4xl md:hidden">HOTEL GARDEN</h1>
                <motion.div
                    className="text-2xl absolute right-5 z-20 text-white md:hidden"
                    whileTap={{ rotate: 180, scale: 0.5 }}
                    onClick={handleNavToggle}
                >
                    <FaBars />
                </motion.div>
            </div>
            <nav className="navbar navbar-mobile md:mt-4" >
                <div className="fixed top-0 right-0">
                    <motion.div
                        className="absolute top-4 right-5 text-2xl md:hidden"
                        whileTap={{ rotate: 180, scale: 0.5 }}
                        onClick={handleNavToggle}
                    >
                        <FaTimes />
                    </motion.div>
                </div>
                <ul className="nav--link--container md:flex md:justify-center md:gap-8 ">
                    <li className="md:text-xl text-white hover:text-blue-500"><a href="#home" onClick={handleNavToggle}>HOME</a></li>
                    <li className="md:text-xl text-white hover:text-blue-500"><a href="#music" onClick={handleNavToggle}>MUSIC</a></li>
                    <li className="md:text-xl text-white hover:text-blue-500"><a href="#shows" onClick={handleNavToggle}>SHOWS</a></li>
                    <li className="md:text-xl text-white hover:text-blue-500"><a href="#about" onClick={handleNavToggle}>ABOUT</a></li>
                    <li className="md:text-xl text-white hover:text-blue-500"><a href="#contact" onClick={handleNavToggle}>CONTACT</a></li>
                </ul>
                <ul className='social--media--container md:flex md:justify-center md:items-center md:mt-4 md:gap-4 md:text-2xl'>
                    {socialMediaItems.map((item, index) => {
                        return (
                            <li key={index} className="social--media--item text-white hover:text-blue-500 cursor-pointer">
                                <a href={item.link} target="_blank" rel="noreferrer" aria-label={item.name} >
                                    <item.icon />
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar