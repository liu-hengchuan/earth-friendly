import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'
import About from './components/About.vue'
import Campaign from './components/Campaign.vue'
import CampaignDetails from './components/CampaignDetails.vue'
import Contact from './components/Contact.vue'
import Gallery from './components/Gallery.vue'
import NewsGrid from './components/NewsGrid.vue'
import NewsDetails from './components/NewsDetails.vue'
import TeamGrid from './components/TeamGrid.vue'
import TeamDetails from './components/TeamDetails.vue'
import Testimonial from './components/Testimonial.vue'
// import ShopProductsSidebar from './components/ShopProductsSidebar.vue'
import ShopCart from './components/ShopCart.vue'
import Page404 from './components/Page404.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/campaign', component: Campaign },
    { path: '/campaign-details', component: CampaignDetails },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Gallery },
    { path: '/news-grid', component: NewsGrid },
    { path: '/news-details', component: NewsDetails },
    { path: '/team-grid', component: TeamGrid },
    { path: '/team-details', component: TeamDetails },
    { path: '/testimonial', component: Testimonial },
    { path: '/shop', name: 'Shop', component: () => import('./components/Shop.vue') },
    { path: '/shop-cart', component: ShopCart },
    { path: '*', component: Page404 }
  ]
})