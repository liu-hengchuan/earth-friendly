<template>
  <div id="side-panel-container" class="dark" data-tm-bg-img="/images/side-push-bg.jpg">
    <div class="side-panel-wrap">
      <div id="side-panel-trigger-close" class="side-panel-trigger">
        <a href="#">
          <i class="fa fa-times side-panel-trigger-icon"></i>
        </a>
      </div>
      <img class="logo mb-50" src="/images/logo-wide@2x.png" width="200" alt="Logo">
      <p>Lorem ipsum is simply free text dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit, sed do consulting firms Et leggings across the nation tempor.</p>
      <div class="widget">
        <h4 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Latest News</h4>
        <div class="latest-posts">
          <article class="post clearfix pb-0 mb-10" v-for="(news, index) in latestNews" :key="index">
            <a class="post-thumb" href="#">
              <img :src="news.image" alt="">
            </a>
            <div class="post-right">
              <h5 class="post-title mt-0">
                <a href="#">{{ news.title }}</a>
              </h5>
              <p>{{ news.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="widget">
        <h5 class="widget-title widget-title-line-bottom line-bottom-theme-colored1">Contact Info</h5>
        <div class="tm-widget-contact-info contact-info-style1 contact-icon-theme-colored1">
          <ul>
            <li class="contact-name">
              <div class="icon"><i class="flaticon-contact-037-address"></i></div>
              <div class="text">{{ contactInfo.name }}</div>
            </li>
            <li class="contact-phone">
              <div class="icon"><i class="flaticon-contact-042-phone-1"></i></div>
              <div class="text">
                <a :href="'tel:' + contactInfo.phone">{{ contactInfo.phone }}</a>
              </div>
            </li>
            <li class="contact-email">
              <div class="icon"><i class="flaticon-contact-043-email-1"></i></div>
              <div class="text">
                <a :href="'mailto:' + contactInfo.email">{{ contactInfo.email }}</a>
              </div>
            </li>
            <li class="contact-address">
              <div class="icon"><i class="flaticon-contact-047-location"></i></div>
              <div class="text">{{ contactInfo.address }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidePanel',
  data() {
    return {
      latestNews: [
        {
          image: '/images/blog/s1.jpg',
          title: 'Sustainable Construction',
          excerpt: 'Lorem ipsum dolor sit amet...'
        },
        {
          image: '/images/blog/s2.jpg',
          title: 'Industrial Coatings',
          excerpt: 'Lorem ipsum dolor sit amet...'
        },
        {
          image: '/images/blog/s1.jpg',
          title: 'Storefront Installations',
          excerpt: 'Lorem ipsum dolor sit amet...'
        }
      ],
      contactInfo: {
        name: 'John Doe',
        phone: '+510-455-6735',
        email: 'info@yourdomain.com',
        address: '3982 Browning Lane Carolyns Circle, California'
      }
    }
  }
}
</script>