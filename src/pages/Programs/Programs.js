import '../../styles/common.css';
import '../../styles/programs.css';
import Page from '../../components/Page';
import ProgramsSection from '../../components/ProgramsSection';
import { Outlet } from 'react-router-dom';

function Programs () {
    return (
        <>
        <Page id="programs-page" page="Programs">
            <ProgramsSection />
        </Page>
        <Outlet/>
        </>
    );
}

export default Programs;