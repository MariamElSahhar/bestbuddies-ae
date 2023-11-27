import '../styles/common.css';
import '../styles/programs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProgramsSection from '../components/ProgramsSection';

function Programs () {
    return (
        <div id="programs-page">
            <Navbar />
            <Header page="Programs" />
                <ProgramsSection />

            <Footer />
        </div>
    );
}

export default Programs;