import '../styles/common.css';
import '../styles/media.css';
import Page from '../components/Page';
import ComingSoon from '../components/ComingSoon';

function Media () {
    return (
        <Page id="media-page" page="Media">
            <div id="media-page-content">
                <ComingSoon/>
            </div>
        </Page>
    );
}

export default Media;