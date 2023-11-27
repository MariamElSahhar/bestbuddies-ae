import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Programs from './pages/Programs';
import Involved from './pages/Involved';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import FAQ from './pages/FAQ';
import Friendship from './pages/Programs/Friendship';
import Leadership from './pages/Programs/Leadership';
import Employment from './pages/Programs/Employment';
import About from './pages/About';
import Buddy from './pages/Get-Involved/Buddy';
import Chapter from './pages/Get-Involved/Chapter';
import Mentor from './pages/Get-Involved/Mentor';
import Employer from './pages/Get-Involved/Employer';
import Events from './pages/Get-Involved/Events';

const App = () => {
  return (
    <HashRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="get-involved" element={<Involved />} />
          <Route path="media" element={<Media />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="friendship" element={<Friendship />} />
          <Route path="employment" element={<Employment />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="become-a-buddy" element={<Buddy />} />
          <Route path="start-a-chapter" element={<Chapter />} />
          <Route path="become-a-mentor" element={<Mentor />} />
          <Route path="become-an-employer" element={<Employer />} />
          <Route path="events" element={<Events />} />
        </Routes>
        <ScrollToTop />
    </HashRouter>
  );
};

export default App;
