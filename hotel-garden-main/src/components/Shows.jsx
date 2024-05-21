import { Helmet } from 'react-helmet'
const Shows = () => {
    return (
        <section className="py-32 bg-slate-950 text-white" id="shows">
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
        </section>
    )
}

export default Shows