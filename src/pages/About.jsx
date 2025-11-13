import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      {/* Header */}
      <header id="header" className="header header-layout-type-header-2rows">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-xl-auto header-top-left align-self-center text-center text-xl-start">
                <ul className="element contact-info">
                  <li className="contact-phone"><i className="fa fa-phone font-icon sm-display-block"></i> Tel: +440-98-5298</li>
                  <li className="contact-email"><i className="fa fa-envelope font-icon sm-display-block"></i> info@example.com</li>
                  <li className="contact-address"><i className="fa fa-map font-icon sm-display-block"></i> 121 King Street, Melbourne</li>
                </ul>
              </div>
              <div className="col-xl-auto ms-xl-auto header-top-right align-self-center text-center text-xl-end">
                <div className="element pt-0 pb-0">
                  <ul className="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix">
                    <li><a className="social-link" href="#" ><i className="fab fa-facebook"></i></a></li>
                    <li><a className="social-link" href="#" ><i className="fab fa-twitter"></i></a></li>
                    <li><a className="social-link" href="#" ><i className="fab fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="element pt-0 pt-lg-10 pb-0">
                  <a href="ajax-load/form-appointment.html" className="btn btn-theme-colored2 btn-flat btn-sm ajaxload-popup">Make an Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav tm-enable-navbar-hide-on-scroll">
          <div className="header-nav-wrapper navbar-scrolltofixed">
            <div className="menuzord-container header-nav-container">
              <div className="container position-relative">
                <div className="row header-nav-col-row">
                  <div className="col-sm-auto align-self-center">
                    <a className="menuzord-brand site-brand" href="/">
                      <img className="logo-default logo-1x" src="/images/logo-wide@2x.png" alt="Logo" />
                      <img className="logo-default logo-2x retina" src="/images/logo-wide@2x.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="col-sm-auto ms-auto pr-0 align-self-center">
                    <nav id="top-primary-nav" className="menuzord theme-color1" data-effect="fade" data-animation="none" data-align="right">
                      <ul id="main-nav" className="menuzord-menu">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li className="active"><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/team-grid">Team Grid</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/testimonial">Testimonial</Link></li>
                            <li><Link to="/shop-products-sidebar">Shop</Link></li>
                            <li><Link to="/404">404</Link></li>
                          </ul>
                        </li>
                        <li><a href="#">Campaigns</a>
                          <ul className="dropdown">
                            <li><Link to="/campaign">Campaign</Link></li>
                            <li><Link to="/campaign-details">Campaign Details</Link></li>
                          </ul>
                        </li>
                        <li><a href="#">Blog</a>
                          <ul className="dropdown">
                            <li><Link to="/news-grid">News Grid</Link></li>
                            <li><Link to="/news-details">News Details</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-sm-auto align-self-center nav-side-icon-parent">
                    <ul className="list-inline nav-side-icon-list">
                      <li className="hidden-mobile-mode"><a href="#" id="top-nav-search-btn"><i class="search-icon fa fa-search"></i></a></li>
                      <li className="hidden-mobile-mode">
                        <div className="top-nav-mini-cart-icon-container">
                          <div className="top-nav-mini-cart-icon-contents">
                            <a className="mini-cart-icon" href="#" title="View your shopping cart"><i className="fa fa-shopping-cart"></i><span className="items-count">1</span> <span className="cart-quick-info">1 item - <span className="amount"><span className="currencySymbol">&pound;</span>18.00</span></span></a>
                            <div className="dropdown-content">
                              <ul className="cart_list product_list_widget ">
                                <li className="mini_cart_item">
                                  <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="18832" data-cart_item_key="#" data-product_sku="woo-beanie">&times;</a>
                                  <a href="#"> <img class="attachment-thumbnail" src="/images/shop/product.jpg" width="300" height="300" alt=""/>Beanie</a>
                                  <span class="quantity">1 &times; <span class="amount">
                                  <span class="currencySymbol">&pound;</span>18.00</span></span>
                                </li>
                              </ul>
                              <p class="total"> <strong>Subtotal:</strong> <span class="woocommerce-Price-amount amount"><span class="currencySymbol">&pound;</span>18.00</span> </p>
                              <div class="buttons cart-action-buttons">
                                <div className="row">
                                  <div class="col-6 pe-1"><a href="#" class="btn btn-theme-colored2 btn-block btn-sm wc-forward">View Cart</a></div>
                                  <div class="col-6 ps-1"><a href="#" class="btn btn-theme-colored1 btn-block btn-sm checkout wc-forward">Checkout</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="hidden-mobile-mode">
                        <div id="side-panel-trigger" class="side-panel-trigger"> <a href="#">
                          <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                          </div>
                          </a> </div>
                      </li>
                    </ul>
                    <div id="top-nav-search-form" class="clearfix">
                      <form action="#" method="GET">
                        <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                      </form>
                      <a href="#" id="close-search-btn"><i class="fa fa-times"></i></a>
                    </div>
                  </div>
                </div>
                <div class="row header-nav-clone-col-row d-block d-xl-none">
                   <div class="col-12">
                    <nav id="top-primary-nav-clone" class="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                     <ul id="main-nav-clone" class="menuzord-menu menuzord-right menuzord-indented scrollable">
                     </ul>
                    </nav>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Start main-content */}
      <div class="main-content-area">
        {/* Section: inner-header */}
        <section id="inner-header" data-tm-bg-img="/images/bg/bg1.jpg">
          <div class="container">
            <div class="section-content">
              <h2 class="page-title">About Us</h2>
              <ol class="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li class="active">About</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Section: About Us */}
        <section>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="about-image-layer2 rs-about-image-layer1">
                  <div class="about-thumb">
                    <img src="/images/about/about1.jpg" alt="Image" />
                  </div>
                  <div class="trusted-number">
                    <p>Trusted by</p>
                    <h4 class="number m-0">4890</h4>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-content pr-30 pl-30 pl-md--0 pr-md--0" data-tm-padding-top="55">
                  <div class="tm-sc-section-title section-title mb-50">
                    <div class="title-wrapper mb-0">
                      <div class="title-icon-img">
                        <img src="/images/icons/title-icon.png" alt="Image" />
                      </div>
                      <h2 class="title">We Have the Power Today to Change Tomorrow!</h2>
                      <p class="paragraph mb-0">Lorem ipsum dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn cras tincidunt lobortis feugiat vivam at augue eget</p>
                    </div>
                  </div>
                  <div class="service-list-item-style1 mb-10">
                    <span class="number">01</span>
                    <p class="mb-0">Save Ecology Begin by Planting Trees</p>
                  </div>
                  <div class="service-list-item-style1 mb-10">
                    <span class="number">02</span>
                    <p class="mb-0">Eco System amet  for Global Warnings</p>
                  </div>
                  <div class="service-list-item-style1">
                    <span class="number">03</span>
                    <p class="mb-0">People to Clean the Air and Safe Rivers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Numbers */}
        <section data-tm-bg-color="#f4f3ef">
          <div class="container">
            <div className="row">
              <div class="col-lg-3 col-md-6">
                <div class="counter-item text-center m-0">
                  <div class="counter-icon">
                    <img src="/images/icons/c01.png" alt="Image" />
                  </div>
                  <div class="counter-num font-current-theme1 text-theme-colored1">
                    <span class="counter-number" data-count="9800">0</span>
                    <span class="counter-text">Tree Planted</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter-item text-center m-0">
                  <div class="counter-icon">
                    <img src="/images/icons/c02.png" alt="Image" />
                  </div>
                  <div class="counter-num font-current-theme1 text-theme-colored1">
                    <span class="counter-number" data-count="4590">0</span>
                    <span class="counter-text">People Donated</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter-item text-center m-0">
                  <div class="counter-icon">
                    <img src="/images/icons/c03.png" alt="Image" />
                  </div>
                  <div class="counter-num font-current-theme1 text-theme-colored1">
                    <span class="counter-number" data-count="8800">0</span>
                    <span class="counter-text">Successfully Project</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="counter-item text-center m-0">
                  <div class="counter-icon">
                    <img src="/images/icons/c04.png" alt="Image" />
                  </div>
                  <div class="counter-num font-current-theme1 text-theme-colored1">
                    <span class="counter-number" data-count="1500">0</span>
                    <span class="counter-text">Volunteers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Mission Vision */}
        <section>
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="about-mission-vision">
                  <div class="tm-sc-section-title section-title mb-40">
                    <div class="title-wrapper mb-0">
                      <div class="title-icon-img">
                        <img src="/images/icons/title-icon.png" alt="Image" />
                      </div>
                      <h2 class="title">Our Vision</h2>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit. pain and trouble that are bound to ensue weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-mission-vision">
                  <div class="tm-sc-section-title section-title mb-40">
                    <div class="title-wrapper mb-0">
                      <div class="title-icon-img">
                        <img src="/images/icons/title-icon.png" alt="Image" />
                      </div>
                      <h2 class="title">Our Mission</h2>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit. pain and trouble that are bound to ensue weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* end main-content */}

      {/* Footer */}
      <footer id="footer" className="footer footer-current-style1">
        <div className="footer-widget-section">
          <div class="container">
            <div class="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-widget--textwidget">
                  <div className="widget-content">
                    <div className="logo mb-30">
                      <img className="logo-default retina" src="/images/logo-wide-white.png" alt="image" />
                    </div>
                    <p class="mb-0">Lorem ipsum dolor sit amet, notted consectetur adipisi elit sed do eiusmod temor sit amet dolor incididunt labore magna aliquaenim sed do eiusmod tempor incididunt.</p>
                    <ul className="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix mt-15">
                      <li><a className="social-link" href="#" ><i className="fab fa-facebook"></i></a></li>
                      <li><a className="social-link" href="#" ><i className="fab fa-twitter"></i></a></li>
                      <li><a className="social-link" href="#" ><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer_widget--recent_post widget ml-20 ml-sm--0">
                  <div className="widget-title">
                    <h5 className="widget_title text-white">Recent News</h5>
                  </div>
                  <div className="widget-content">
                    <ul className="recent-post clearfix">
                      <li className="clearfix">
                        <div className="post-thumb">
                          <img src="/images/photos/recent-post-01.jpg" alt="Image" />
                        </div>
                        <div className="post-data">
                          <h6 class="title"><a href="/news-details">Increasint the amount of clean energy</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="post-thumb">
                          <img src="/images/photos/recent-post-02.jpg" alt="Image" />
                        </div>
                        <div className="post-data">
                          <h6 class="title"><a href="/news-details">Keep our forest safe and healthy</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="post-thumb">
                          <img src="/images/photos/recent-post-03.jpg" alt="Image" />
                        </div>
                        <div className="post-data">
                          <h6 class="title"><a href="/news-details">The solution to climate change</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-50 mt-lg--0">
                <div className="footer-widget footer_widget--newsletter">
                  <div className="widget-title">
                    <h5 className="widget_title text-white">Newsletter</h5>
                  </div>
                  <div className="widget-content">
                    <p>We provide the best news for our beloved subscribers.</p>
                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1698" method="post" data-id="1698" data-name="Newsletter Form">
                      <div className="mc4wp-form-fields">
                        <div className="input-group">
                          <input type="email" name="EMAIL" className="form-control" placeholder="Enter email address" required="" />
                          <button type="submit" className="btn btn-theme-colored1 btn-flat">
                          <i className="fa fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mc4wp-response"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div class="container">
            <div class="row">
              <div className="col-md-6">
                <p className="copyright-text">Copyright © 2024 kologi All Rights Reserved</p>
              </div>
              <div class="col-md-6">
                <div className="footer-menu text-md-end">
                  <nav id="footer-menu">
                    <ul id="footer-menu-list">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Privacy</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">FAQ</a></li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Support</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a className="scrollToTop" href="#"><i className="fa fa-angle-up"></i></a>
    </>
  );
};

export default About;