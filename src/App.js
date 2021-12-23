import React from 'react';
// import Hero from './components/hero';
// import Subhero from './components/Subhero';
// import Bottom from './components/bottom';
// import Footer from './components/footer';
// import Subhero2 from './components/subhero2';
// import Subhero3 from './components/subhero3';
// import Navbar from './components/navbar';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Brands from './pages/Brands'
import ScrolltoTop from './components/ScrolltoTop';
import Blogspg from './pages/Blogspg';
import Blog2pg from './pages/Blog2pg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Influencerpage from './pages/Influencer';
import Ads from './pages/Adspg';
import BlogState from './Context/Blogs/BlogState';
function App() {
  return (
    <BlogState>
      <BrowserRouter>
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/career" element={<Career />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/influencers" element={<Influencerpage />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/blogs" element={<Blogspg />} />
          <Route path="/blogs2" element={<Blog2pg />} />
          <Route path="/blogs/:id" element={<Blog2pg />} />
        </Routes>
      </BrowserRouter >
    </BlogState>
  );
}

export default App;
