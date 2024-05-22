import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
const Shows = () => {
    return (
        <section className="py-32 bg-slate-950 text-white" id="shows">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                viewport={{
                    amount: "some",
                    once: true,
                }}
            >
                <h2 className="text-center text-h2 mb-4">UPCOMING SHOWS</h2>
                <div className="shows-container">
                    <div
                        id="seated-55fdf2c0"
                        data-artist-id="3b78b4c8-91a0-46e9-a34c-08e7331ba6fa"
                        data-css-version="3">
                    </div>
                    <Helmet>
                        <script src="https://widget.seated.com/app.js"></script>
                    </Helmet>
                </div>
            </motion.div>
        </section>
    )
}

export default Shows