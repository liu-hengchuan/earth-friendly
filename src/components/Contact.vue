<template>
  <div class="main-content">
    <!-- Section: contact -->
    <section id="contact" class="divider bg-white">
      <div class="container pt-100 pb-70">
        <div class="section-content">
          <div class="row">
            <div class="col-md-6">
              <h2 class="title mb-30">Contact Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.</p>
              <div class="contact-info">
                <ul>
                  <li><i class="fa fa-map-marker"></i> 121 King Street, Melbourne</li>
                  <li><i class="fa fa-phone"></i> +440-98-5298</li>
                  <li><i class="fa fa-envelope"></i> info@example.com</li>
                </ul>
              </div>
              <div class="social-links">
                <a href="#" class="social-link facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" class="social-link twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-link youtube"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="col-md-6">
              <form class="contact-form">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Your Name">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your Email">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Subject">
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>