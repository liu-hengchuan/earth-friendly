import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TeamGrid from './pages/TeamGrid'
import TeamDetails from './pages/TeamDetails'
import Gallery from './pages/Gallery'
import Testimonial from './pages/Testimonial'
import ShopProductsSidebar from './pages/ShopProductsSidebar'
import Page404 from './pages/404'
import Campaign from './pages/Campaign'
import CampaignDetails from './pages/CampaignDetails'
import NewsGrid from './pages/NewsGrid'
import NewsDetails from './pages/NewsDetails'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div id="wrapper" className="clearfix">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team-grid" element={<TeamGrid />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/shop-products-sidebar" element={<ShopProductsSidebar />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign-details" element={<CampaignDetails />} />
          <Route path="/news-grid" element={<NewsGrid />} />
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App