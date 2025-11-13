<template>
  <div class="main-content">
    <!-- Section: search result -->
    <section id="search-result" class="divider bg-white">
      <div class="container pt-100 pb-70">
        <div class="section-content">
          <h2 class="title mb-30">Search Results</h2>
          <div class="row">
            <div class="col-md-8">
              <div class="search-result-item">
                <h3 class="title">Sustainable Construction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.</p>
                <a href="#" class="read-more">Read More</a>
              </div>
              <div class="search-result-item">
                <h3 class="title">Industrial Coatings</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.</p>
                <a href="#" class="read-more">Read More</a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="sidebar">
                <div class="widget">
                  <h4 class="widget-title">Search</h4>
                  <form action="#" method="get">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="widget">
                  <h4 class="widget-title">Categories</h4>
                  <ul class="list angle-double-right">
                    <li><a href="#">Environment</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Architecture</a></li>
                  </ul>
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
  name: 'SearchResult'
}
</script>