import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section
            className="flex justify-center flex-col py-32 bg-background text-light"
            id="contact"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                viewport={{
                    amount: "some",
                    once: true,
                }}
            >
                <h2 className="text-center text-h2 my-4">CONTACT US</h2>
                <p className="text-3xl text-center my-8">
                    For booking details, please reach out using the form below!
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                viewport={{
                    amount: "some",
                    once: true,
                }}
            >
                <form className="flex flex-col items-center justify-center " action="https://formsubmit.co/hotelgardenband@gmail.com" method="POST">
                    <label htmlFor="name" className="text-2xl my-4">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        className="w-96 p-2 mobile--width rounded-md text-dark"
                        required
                    />
                    <label htmlFor="email" className="text-2xl my-4">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="w-96 p-2 mobile--width rounded-md text-dark"
                        required
                    />
                    <label
                        htmlFor="message"
                        className="block mb-2 my-4 text-2xl font-medium text-gray-900 dark:text-white"
                    >Message</label
                    >
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="block p-2.5 w-96 mobile--width text-md rounded-md text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Leave a message..."></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-light text-2xl p-2 my-8 hover:bg-blue-700 rounded-lg w-96 mobile--width"
                    >Submit</button
                    >
                </form>
            </motion.div>
        </section>
    )
}

export default Contact