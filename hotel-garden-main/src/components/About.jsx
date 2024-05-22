import { useState } from "react"
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const Modal = ({ isModalOpen, image, onModalClose }) => {
    if (isModalOpen) {
        document.body.style.overflow = 'hidden'
        return (
            <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
                onClick={onModalClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="relative max-w-xl md:p-6 p-4"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={image.src} alt={image.alt} className="rounded-md" />
                </motion.div>
            </motion.div>
        )
    }
    document.body.style.overflow = 'auto'
}

const About = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    }
    const handleModalClose = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    }
    const galleryImages = [
        {
            id: 1,
            src: './images/HotelGardenGallery1.jpeg',
            alt: 'Hotel Garden Gallery 1',
        },
        {
            id: 2,
            src: '/images/HotelGardenGallery2.webp',
            alt: 'Hotel Garden Gallery 2',
        },
        {
            id: 3,
            src: '/images/HotelGardenGallery3.webp',
            alt: 'Hotel Garden Gallery 3',
        },
        {
            id: 4,
            src: '/images/HotelGardenGallery4.jpeg',
            alt: 'Hotel Garden Gallery 4',
        },
        {
            id: 5,
            src: '/images/HotelGardenGallery5.jpg',
            alt: 'Hotel Garden Gallery 5',
        },
        {
            id: 6,
            src: '/images/HotelGardenGallery6.webp',
            alt: 'Hotel Garden Gallery 6',
        },
    ]
    return (
        <section className="about--content bg-third py-12 text-dark" id="about">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{
                    amount: "500px",
                    once: true,
                }}
            >
                <h2 className="about--title text-center text-h2 my-8">ABOUT US</h2>
                <div className="about--container md:grid md:grid-cols-2 p-4">
                    <img
                        className="about--img md:h-fit m-auto md:rounded object-cover shadow-lg shadow-dark md:w-4/5"
                        src="/images/HotelGardenAbout.webp"
                        alt="Hotel Garden"
                    />
                    <motion.div
                        className="flex flex-col justify-center my-8"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                    >
                        <p className="about--p text-2xl">
                            Hotel Garden is a Sacramento based Indie Rock band. Our musical style
                            draws inspiration from artists such as Peach Pit, Turnover, and The
                            Backseat Lovers. So if you cuff your jeans and enjoy expensive coffee,
                            we might just be the band for you!
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{
                    amount: "some",
                    once: true,
                }}
            >
                <h2 className="my-8 text-center text-h2">Gallery</h2>
                <div
                    className="gallery-container container grid my-8 mx-auto gap-4 md:grid-cols-3 grid-cols-1"
                >
                    {galleryImages.map((image) => {
                        return (
                            <motion.div key={image.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{
                                    amount: "all",
                                    once: true,
                                }}
                            >

                                <img
                                    className="hover:scale-105 cursor-pointer transition ease-in-out duration-200 shadow-lg shadow-dark w-full rounded-md object-cover h-80 border-8 border-white"
                                    src={image.src}
                                    alt={image.alt}
                                    onClick={() => handleModalOpen(image)}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
            <Modal isModalOpen={isModalOpen} image={selectedImage} onModalClose={handleModalClose} />
        </section>
    )
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    image: PropTypes.object,
    onModalClose: PropTypes.func.isRequired,
}

export default About