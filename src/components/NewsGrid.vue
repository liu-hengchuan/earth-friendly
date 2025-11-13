<template>
  <div class="main-content">
    <!-- Section: news grid -->
    <section id="news-grid" class="divider bg-white">
      <div class="container pt-100 pb-70">
        <div class="section-content">
          <div class="row text-center">
            <div class="col-md-12">
              <h2 class="title mb-0">Latest News</h2>
              <p class="subtitle">Stay updated with our latest news and events</p>
            </div>
          </div>
          <div class="row mt-50">
            <div class="col-md-4">
              <div class="news-item">
                <img src="/images/blog/1.jpg" alt="News 1" class="img-fluid mb-30">
                <div class="news-content">
                  <div class="news-meta">
                    <span class="date">Apr 15, 2023</span>
                    <span class="category">Environment</span>
                  </div>
                  <h3 class="news-title"><a href="#">Sustainable Construction</a></h3>
                  <p class="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="news-item">
                <img src="/images/blog/2.jpg" alt="News 2" class="img-fluid mb-30">
                <div class="news-content">
                  <div class="news-meta">
                    <span class="date">Apr 10, 2023</span>
                    <span class="category">Technology</span>
                  </div>
                  <h3 class="news-title"><a href="#">Industrial Coatings</a></h3>
                  <p class="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="news-item">
                <img src="/images/blog/3.jpg" alt="News 3" class="img-fluid mb-30">
                <div class="news-content">
                  <div class="news-meta">
                    <span class="date">Apr 5, 2023</span>
                    <span class="category">Architecture</span>
                  </div>
                  <h3 class="news-title"><a href="#">Storefront Installations</a></h3>
                  <p class="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.</p>
                  <a href="#" class="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NewsGrid'
}
</script>