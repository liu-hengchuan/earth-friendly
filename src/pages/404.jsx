import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
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
                        <li><a href="#">Pages</a>
                          <ul className="dropdown">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/team-grid">Team Grid</Link></li>
                            <li><Link to="/team-details">Team Details</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/testimonial">Testimonial</Link></li>
                            <li><Link to="/shop-products-sidebar">Shop</Link></li>
                            <li className="active"><Link to="/404">404</Link></li>
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
                  <div class="col-sm-auto align-self-center nav-side-icon-parent">
                    <ul className="list-inline nav-side-icon-list">
                      <li className="hidden-mobile-mode"><a href="#" id="top-nav-search-btn"><i className="search-icon fa fa-search"></i></a></li>
                      <li class="hidden-mobile-mode">
                        <div class="top-nav-mini-cart-icon-container">
                          <div class="top-nav-mini-cart-icon-contents">
                            <a className="mini-cart-icon" href="#" title="View your shopping cart"><i className="fa fa-shopping-cart"></i><span className="items-count">1</span> <span className="cart-quick-info">1 item - <span className="amount"><span className="currencySymbol">&pound;</span>18.00</span></span></a>
                            <div class="dropdown-content">
                              <ul className="cart_list product_list_widget ">
                                <li className="mini_cart_item">
                                  <a href="#" className="remove remove_from_cart_button" aria-label="Remove this item" data-product_id="18832" data-cart_item_key="#" data-product_sku="woo-beanie">&times;</a>
                                  <a href="#"> <img className="attachment-thumbnail" src="/images/shop/product.jpg" width="300" height="300" alt="" />Beanie</a>
                                  <span className="quantity">1 &times; <span className="amount">
                                  <span class="currencySymbol">&pound;</span>18.00</span></span>
                                </li>
                              </ul>
                              <p className="total"> <strong>Subtotal:</strong> <span className="woocommerce-Price-amount amount"><span class="currencySymbol">&pound;</span>18.00</span> </p>
                              <div class="buttons cart-action-buttons">
                                <div className="row">
                                  <div className="col-6 pe-1"><a href="#" className="btn btn-theme-colored2 btn-block btn-sm wc-forward">View Cart</a></div>
                                  <div className="col-6 ps-1"><a href="#" className="btn btn-theme-colored1 btn-block btn-sm checkout wc-forward">Checkout</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="hidden-mobile-mode">
                        <div id="side-panel-trigger" class="side-panel-trigger"> <a href="#">
                          <div class="hamburger-box">
                            <div class="hamburger-inner"></div>
                          </div>
                          </a> </div>
                      </li>
                    </ul>
                    <div id="top-nav-search-form" className="clearfix">
                      <form action="#" method="GET">
                        <input type="text" name="s" value="" placeholder="Type and Press Enter..." autocomplete="off" />
                      </form>
                      <a href="#" id="close-search-btn"><i class="fa fa-times"></i></a>
                    </div>
                  </div>
                </div>
                <div class="row header-nav-clone-col-row d-block d-xl-none">
                   <div class="col-12">
                    <nav id="top-primary-nav-clone" className="menuzord d-block d-xl-none default menuzord-color-default menuzord-border-boxed menuzord-responsive" data-effect="slide" data-animation="none" data-align="right">
                     <ul id="main-nav-clone" className="menuzord-menu menuzord-right menuzord-indented scrollable">
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
      <div className="main-content-area">
        {/* Section: 404 */}
        <section className="section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="error-404">404</h1>
                <h2 className="error-title">Page Not Found</h2>
                <p className="error-text">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="btn btn-theme-colored1 btn-sm">Go to Home</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* end main-content */}

      {/* Footer */}
      <footer id="footer" className="footer footer-current-style1">
        <div className="footer-widget-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer-widget--textwidget">
                  <div className="widget-content">
                    <div className="logo mb-30">
                      <img className="logo-default retina" src="/images/logo-wide-white.png" alt="image" />
                    </div>
                    <p className="mb-0">Lorem ipsum dolor sit amet, notted consectetur adipisi elit sed do eiusmod temor sit amet dolor incididunt labore magna aliquaenim sed do eiusmod tempor incididunt.</p>
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
                          <h6 className="title"><a href="/news-details">Increasint the amount of clean energy</a></h6>
                          <p className="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="post-thumb">
                          <img src="/images/photos/recent-post-02.jpg" alt="Image" />
                        </div>
                        <div className="post-data">
                          <h6 className="title"><a href="/news-details">Keep our forest safe and healthy</a></h6>
                          <p className="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="post-thumb">
                          <img src="/images/photos/recent-post-03.jpg" alt="Image" />
                        </div>
                        <div className="post-data">
                          <h6 className="title"><a href="/news-details">The solution to climate change</a></h6>
                          <p className="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-50 mt-lg--0">
                <div class="footer-widget footer_widget--newsletter">
                  <div class="widget-title">
                    <h5 className="widget_title text-white">Newsletter</h5>
                  </div>
                  <div class="widget-content">
                    <p>We provide the best news for our beloved subscribers.</p>
                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1698" method="post" data-id="1698" data-name="Newsletter Form">
                      <div class="mc4wp-form-fields">
                        <div class="input-group">
                          <input type="email" name="EMAIL" className="form-control" placeholder="Enter email address" required />
                          <button type="submit" className="btn btn-theme-colored1 btn-flat">
                          <i className="fa fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                      <div class="mc4wp-response"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <p class="copyright-text">Copyright © 2024 kologi All Rights Reserved</p>
              </div>
              <div class="col-md-6">
                <div class="footer-menu text-md-end">
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
      <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
    </>
  );
};

export default Error404;