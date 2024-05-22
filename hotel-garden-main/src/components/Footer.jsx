import { FaApple, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { useEffect } from "react";
const Footer = () => {
    const footerItems = [
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
    ]
    useEffect(() => {
        const currentYear = new Date().getFullYear()
        const year = document.querySelector('.current--year')
        year.textContent = `${currentYear} © Hotel Garden`
    })
    return (
        <footer className="bg-backgroundNav p-5">
            <div className="flex justify-center flex-col text-center">
                <nav>
                    <ul className="flex justify-center gap-8 mb-4">
                        {footerItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.name}
                                    >
                                        <Icon size={30} className="text-white hover:text-slate-400" />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="flex flex-col justify-center">
                    <p className="hover:text-slate-400 transition all ease-in-out duration-200">
                        <a href="#home" className="current--year text-white"></a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer