import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import About from './pages/About';
import Buddy from './pages/Get-Involved/Buddy';
import Contact from './pages/Contact';
import Chapter from './pages/Get-Involved/Chapter';
import Donate from './pages/Donate';
import Employer from './pages/Get-Involved/Employer';
import Employment from './pages/Programs/Employment';
import Events from './pages/Get-Involved/Events';
import FAQ from './pages/FAQ';
import Friendship from './pages/Programs/Friendship';
import Home from './pages/Home';
import Involved from './pages/Get-Involved/Involved';
import Leadership from './pages/Programs/Leadership';
import Media from './pages/Media';
import Mentor from './pages/Get-Involved/Mentor';
import Programs from './pages/Programs/Programs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/events" element={<Events />} />
          <Route path="get-involved" element={<Involved />} />
          <Route path="/get-involved/become-a-buddy" element={<Buddy />} />
          <Route path="/get-involved/become-a-mentor" element={<Mentor />} />
          <Route path="/get-involved/become-an-employer" element={<Employer />} />
          <Route path="/get-involved/start-a-chapter" element={<Chapter />} />
          <Route path="/media" element={<Media />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/friendship" element={<Friendship />} />
          <Route path="/programs/employment" element={<Employment />} />
          <Route path="/programs/leadership" element={<Leadership />} />
        </Routes>
        <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
