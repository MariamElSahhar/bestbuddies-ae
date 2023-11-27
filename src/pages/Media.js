import '../styles/common.css';
import '../styles/media.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

function Media () {
    return (
        <div id="media-page">
            <Navbar />
            <Header page="Media" />
            <div id="media-page-content">
                <ComingSoon/>
            </div>
            <Footer />
        </div>
    );
}

export default Media;