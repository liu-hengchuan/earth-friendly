<template>
  <header id="header" class="header header-layout-type-header-2rows">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-xl-auto header-top-left align-self-center text-center text-xl-start">
            <ul class="element contact-info">
              <li class="contact-phone">
                <i class="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298
              </li>
              <li class="contact-email">
                <i class="fa fa-envelope font-icon sm-display-block"></i> info@example.com
              </li>
              <li class="contact-address">
                <i class="fa fa-map font-icon sm-display-block"></i> 121 King Street, Melbourne
              </li>
            </ul>
          </div>
          <div class="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
            <div class="element pt-0 pb-0">
              <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                <li><a class="social-link" href="#" ><i class="fab fa-facebook"></i></a></li>
                <li><a class="social-link" href="#" ><i class="fab fa-twitter"></i></a></li>
                <li><a class="social-link" href="#" ><i class="fab fa-youtube"></i></a></li>
              </ul>
            </div>
            <div class="element pt-0 pt-lg-10 pb-0">
              <a href="ajax-load/form-appointment.html" class="btn btn-theme-colored2 btn-flat btn-sm ajaxload-popup">Make an Appointment</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-nav tm-enable-navbar-hide-on-scroll">
      <div class="header-nav-wrapper navbar-scrolltofixed">
        <div class="menuzord-container header-nav-container">
          <div class="container position-relative">
            <div class="row header-nav-col-row">
              <div class="col-sm-auto align-self-center">
                <a class="menuzord-brand site-brand" href="index-mp-layout1.html">
                  <img class="logo-default logo-1x" src="/images/logo-wide@2x.png" alt="Logo">
                  <img class="logo-default logo-2x retina" src="/images/logo-wide@2x.png" alt="Logo">
                </a>
              </div>
              <div class="col-sm-auto ms-auto pr-0 align-self-center">
                <nav id="top-primary-nav" class="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                  <ul id="main-nav" class="menuzord-menu">
                    <li class="active">
                      <a href="#">Home</a>
                      <ul class="dropdown">
                        <li><a href="index-mp-layout1.html">index Multipage Layout1</a></li>
                        <li><a href="index-mp-layout2.html">index Multipage Layout2</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pages</a>
                      <ul class="dropdown">
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/team-grid">Team Grid</router-link></li>
                        <li><router-link to="/team-details">Team Details</router-link></li>
                        <li><router-link to="/gallery">Gallery</router-link></li>
                        <li><router-link to="/testimonial">Testimonial</router-link></li>
                        <li><router-link to="/shop">Shop</router-link></li>
                        <li><router-link to="/404">404</router-link></li>
                      </ul>
                    </li>
                    <li><a href="#">Campaigns</a>
                      <ul class="dropdown">
                        <li><router-link to="/campaign">Campaign</router-link></li>
                        <li><router-link to="/campaign-details">Campaign Details</router-link></li>
                      </ul>
                    </li>
                    <li><a href="#">Blog</a>
                      <ul class="dropdown">
                        <li><router-link to="/news-grid">News Grid</router-link></li>
                        <li><router-link to="/news-details">News Details</router-link></li>
                      </ul>
                    </li>
                    <li><router-link to="/contact">Contact</router-link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>