import React from 'react';
import Home from './pages/home';
import AboutUs from './pages/AboutUs';
import Career from './pages/Career';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import Brands from './pages/Brands'
import ScrolltoTop from './components/ScrolltoTop';
import Blogspg from './pages/Blogspg';
import Trainerspage from './pages/TrainersPage';
import Blog2pg from './pages/Blog2pg';
import TrainerProfile from './pages/TrainerProfile'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Influencerpage from './pages/TrainersPage';
import Ads from './pages/Adspg';
import FaQpg from './pages/FaQInfluencerspg';
import FaQbrands from './pages/FaQbrandpg';
// import TempHero from './pages/TempHero';
import Brandcontactpg from './pages/brandcontactpg';

function App() {
  return (
        <Router>
          <ScrolltoTop />
          <Routes>
            {/* <Route path="/" element={<TempHero />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/career" element={<Career />} />
            <Route path="/influencers" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trainers" element={<Trainerspage />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/faq1" element={<FaQpg />} />
            <Route path="/faq2" element={<FaQbrands />} />
            <Route path="/blogs" element={<Blogspg />} />
            <Route path="/brandscontact" element={<Brandcontactpg />} />
            <Route path="/blog/:id" element ={<Blog2pg />} />
            <Route path="trainers/:id" element={<TrainerProfile/>}/>
          </Routes>
        </Router >
  );
}

export default App;
