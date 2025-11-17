<template>
  <footer id="footer" class="footer bg-black-222">
    <div class="container pt-70 pb-40">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <div class="widget footer_widget">
            <h5 class="widget-title">About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat sapien.</p>
            <ul class="styled-icons icon-dark icon-circled icon-theme-colored1">
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget footer_widget">
            <h5 class="widget-title">Quick Links</h5>
            <ul class="list angle-double-right">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Our Campaigns</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget footer_widget">
            <h5 class="widget-title">Recent Posts</h5>
            <div class="latest-posts">
              <article class="post clearfix" v-for="(post, index) in recentPosts" :key="index">
                <a class="post-thumb" href="#">
                  <img :src="post.image" alt="">
                </a>
                <div class="post-right">
                  <h6 class="post-title"><a href="#">{{ post.title }}</a></h6>
                  <div class="post-meta">{{ post.date }}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-6">
          <div class="widget footer_widget">
            <h5 class="widget-title">Contact Info</h5>
            <div class="tm-widget-contact-info">
              <ul>
                <li><i class="fa fa-map-marker"></i> 121 King Street, Melbourne</li>
                <li><i class="fa fa-phone"></i> +440-98-5298</li>
                <li><i class="fa fa-envelope"></i> info@example.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom bg-black-333">
      <div class="container pt-20 pb-20">
        <div class="row">
          <div class="col-md-6">
            <p class="font-13 text-white-5 m-0">© 2023 earth-friendly. All rights reserved.</p>
          </div>
          <div class="col-md-6 text-right">
            <p class="font-13 text-white-5 m-0">Designed by <a href="#" class="text-theme-colored1">ThemeMascot</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      recentPosts: [
        {
          image: '/images/blog/s1.jpg',
          title: 'Sustainable Construction',
          date: 'Apr 15, 2023'
        },
        {
          image: '/images/blog/s2.jpg',
          title: 'Industrial Coatings',
          date: 'Apr 10, 2023'
        }
      ]
    }
  }
}
</script>