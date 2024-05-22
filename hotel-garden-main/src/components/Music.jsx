import { FaSpotify, FaApple } from 'react-icons/fa'
import SpotifyPlayer from 'react-spotify-player'
import { motion } from 'framer-motion'

const Music = () => {
    const socialMediaItems = [
        {
            name: "Spotify",
            url: "https://open.spotify.com/artist/33YRDb38CEI0aA2TS5csdx?si=1uYMovQbQpG7uSgqTJB5-g",
            icon: FaSpotify,
            ariaLabel: "Spotify",
        },
        {
            name: "Apple Music",
            url: "https://music.apple.com/us/artist/hotel-garden/1648459007",
            icon: FaApple,
            ariaLabel: "Apple Music",
        },
    ]
    const size = {
        width: '100%',
        height: 352,
    }
    const view = 'list' // or 'coverart'
    const theme = 'black' // or 'white'
    return (
        <section id="music" className="music--section show muisc--animation py-12 bg-background2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{
                    amount: "some",
                    once: true,
                }}
            >
                <h2 className="text-center my-8 text-h2 text-white">MUSIC</h2>

                <div className="container mx-auto flex justify-center md:w-1/2">
                    {/* <iframe src="https://open.spotify.com/embed/artist/33YRDb38CEI0aA2TS5csdx?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
                    <SpotifyPlayer
                        uri="spotify:artist:33YRDb38CEI0aA2TS5csdx"
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </div>


                <div className="my-8 flex flex-col items-center">
                    <h5 className=" text-h5 text-white">Listen</h5>
                    <ul className="flex gap-4 my-4">
                        {socialMediaItems.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <li key={index}>
                                    <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.ariaLabel}>
                                        <Icon size={50} className="text-white hover:text-blue-400" />
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Music