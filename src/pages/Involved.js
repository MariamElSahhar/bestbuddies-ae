import '../styles/common.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Involved () {
    return (
        <div>
            <Navbar />
            <Header page="Get Involved" />
                <h2>We're launching soon! Check in again later for more information.</h2>
            <Footer />
        </div>
    );
}

export default Involved;