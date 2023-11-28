import '../styles/common.css';
import '../styles/involved.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Involved () {
    return (
        <div id="get-involved-page">
            <Navbar />
            <Header page="Get Involved" />
            <div id="get-involved-content">
                <h2>We're launching soon! Check in again later for more information.</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Involved;