import '../../styles/common.css';
import '../../styles/programs.css'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ComingSoon from '../../components/ComingSoon';

function Leadership () {
    return (
        <div id="leadership-page" className='program-page'>
            <Navbar />
            <Header page="Leadership Development" />
            <section className='two-col'>
                <div className='col'>
                    <ComingSoon/>
                    <h2>Best Buddies Leadership Development Program</h2>
                    <p>Best Buddies Leadership Development programs represents one of our organization’s three key mission pillars.  The programs educate and empower people with and without IDD to become leaders, public speakers and advocates. Best Buddies passionately believes that its program participants can lead the effort within their community and beyond to build a more inclusive world for people of determination.</p>
                </div>
                <iframe className='col' width="555" height="312" src="https://www.youtube.com/embed/gVuCYJ7XRNE" title="Best Buddies International - Unlocking Potential" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
            </section>
            <Footer />
        </div>
    );
}

export default Leadership;