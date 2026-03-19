/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Listings from './pages/Listings';
import Resources from './pages/Resources';
import Team from './pages/Team';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="app-wrapper" className="min-h-screen flex flex-col">
        <Navbar id="main-navbar" />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:category" element={<Projects />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/listings/:type" element={<Listings />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:sub" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:sub" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer id="main-footer" />
      </div>
    </Router>
  );
}
