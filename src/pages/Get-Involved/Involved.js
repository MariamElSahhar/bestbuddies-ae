import '../../styles/common.css';
import '../../styles/involved.css';
import Page from '../../components/Page';
import { Outlet } from 'react-router-dom';

function Involved () {
    return (
        <Page id="get-involved-page" page="Get Involved">
            <div id="get-involved-content">
                <h2>We're launching soon! Check in again later for more information.</h2>
            </div>
            {/* < Outlet /> */}
        </Page>
    );
}

export default Involved;