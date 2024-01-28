import React from 'react';
// import { HashRouter, Routes, Route } from "react-router-dom";
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
import Involved from './pages/Involved';
import Leadership from './pages/Programs/Leadership';
import Media from './pages/Media';
import Mentor from './pages/Get-Involved/Mentor';
import Programs from './pages/Programs';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="become-a-buddy" element={<Buddy />} />
          <Route path="start-a-chapter" element={<Chapter />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="become-an-employer" element={<Employer />} />
          <Route path="employment" element={<Employment />} />
          <Route path="events" element={<Events />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="friendship" element={<Friendship />} />
          <Route path="get-involved" element={<Involved />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="media" element={<Media />} />
          <Route path="become-a-mentor" element={<Mentor />} />
          <Route path="programs" element={<Programs />} />
        </Routes>
        <ScrollToTop />
    </BrowserRouter>
  );
};

export default App;
