import '../styles/common.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Donate () {
    return (
        <div>
            <Navbar />
            <Header page="Make a Donation" />
            <Footer />
        </div>
    );
}

export default Donate;