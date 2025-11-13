import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
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
                        <li className="active">
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
                                <div class="row">
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
        {/* Section: home Start */}
        <section id="home">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col">
                {/* START Industrivo Rev Slider 2 REVOLUTION SLIDER 6.1.7 */}
                <p class="rs-p-wp-fix"></p>
                <rs-module-wrap id="rev_slider_1_1_wrapper" data-alias="firoox-revolution-slider" data-source="gallery" style="background:transparent;padding:0;margin:0px auto;margin-top:0;margin-bottom:0;">
                  <rs-module id="rev_slider_1_1" style="" data-version="6.3.3">
                    <rs-slides>
                      <rs-slide data-key="rs-2" data-title="Slide 1" data-thumb="/images/bg/slide1.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                        <img src="/images/bg/slide1.jpg" title="Untitled-1" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" class="rev-slidebg" data-no-retina />
                        <rs-layer
                          id="slider-2-slide-2-layer-2"
                          data-type="text"
                          data-color="rgba(255, 255, 255, 0.11)"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-103px,-124px,-99px;"
                          data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                          data-frame_0="o:1;"
                          data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:1360;sp:1200;sR:1360;"
                          data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5640;"
                          style="z-index:13;text-transform:uppercase;"
                          class="font-current-theme1"
                        >kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-2-layer-10"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                          data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                          data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:500;sp:1000;sR:500;"
                          data-frame_999="o:0;st:w;sR:7500;"
                          style="z-index:12;"
                          class="font-current-theme1"
                        >Welcome to kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-2-layer-18"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,249px,212px,215px;"
                          data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:850px,743px,659px,455px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1100;sp:1000;sR:1100;"
                          data-frame_999="o:0;st:w;sR:6900;"
                          style="z-index:11;text-transform:uppercase;"
                          class="font-current-theme1"
                        >Save The World <span class="text-theme-colored2">Planting </span> Tree
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-2-layer-22"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1700;sp:1000;sR:1700;"
                          data-frame_999="o:0;st:w;sR:6300;"
                          style="z-index:10;"
                          class="font-current-theme1"
                        ><a href="/about" class="btn btn-theme-colored1 btn-lg btn-flat">Read More</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-2-layer-3"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:2020;sp:1000;sR:2020;"
                          data-frame_999="o:0;st:w;sR:5980;"
                          style="z-index:9;"
                          class="font-current-theme1"
                        ><a href="/contact" class="btn btn-theme-colored2 btn-lg btn-flat">Contact Us</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-2-layer-0"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                          data-dim="w:100%;h:100%;"
                          data-basealign="slide"
                          data-frame_999="o:0;st:w;sR:8700;"
                          style="z-index:8;background-color:rgba(0,10,22,0.17);"
                        >
                        </rs-layer>
                      </rs-slide>
                      <rs-slide data-key="rs-11" data-title="Slide 1" data-thumb="/images/bg/slide2.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                        <img src="/images/bg/slide2.jpg" title="Untitled-1" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" class="rev-slidebg" data-no-retina />
                        <rs-layer
                          id="slider-2-slide-11-layer-2"
                          data-type="text"
                          data-color="rgba(255, 255, 255, 0.11)"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-103px,-124px,-99px;"
                          data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                          data-frame_0="o:1;"
                          data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:1360;sp:1200;sR:1360;"
                          data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5640;"
                          style="z-index:13;text-transform:uppercase;"
                          class="font-current-theme1"
                        >kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-11-layer-10"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                          data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                          data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:500;sp:1000;sR:500;"
                          data-frame_999="o:0;st:w;sR:7500;"
                          style="z-index:12;"
                          class="font-current-theme1"
                        >Welcome to kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-11-layer-18"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,249px,212px,215px;"
                          data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:850px,810px,659px,455px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1100;sp:1000;sR:1100;"
                          data-frame_999="o:0;st:w;sR:6900;"
                          style="z-index:11;text-transform:uppercase;"
                          class="font-current-theme1"
                        >Time To Change <span class="text-theme-colored2">Planting </span> Tree
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-11-layer-22"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1700;sp:1000;sR:1700;"
                          data-frame_999="o:0;st:w;sR:6300;"
                          style="z-index:10;"
                          class="font-current-theme1"
                        ><a href="/about" class="btn btn-theme-colored1 btn-lg btn-flat">Read More</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-11-layer-3"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:2020;sp:1000;sR:2020;"
                          data-frame_999="o:0;st:w;sR:5980;"
                          style="z-index:9;"
                          class="font-current-theme1"
                        ><a href="/contact" class="btn btn-theme-colored2 btn-lg btn-flat">Contact Us</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-11-layer-0"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                          data-dim="w:100%;h:100%;"
                          data-basealign="slide"
                          data-frame_999="o:0;st:w;sR:8700;"
                          style="z-index:8;background-color:rgba(0,10,22,0.17);"
                        >
                        </rs-layer>
                      </rs-slide>
                      <rs-slide data-key="rs-12" data-title="Slide 1" data-thumb="/images/bg/slide3.jpg" data-anim="ei:d;eo:d;s:d;r:default;t:slotslide-horizontal;sl:d;">
                        <img src="/images/bg/slide3.jpg" title="Untitled-1" width="1920" height="1280" data-bg="p:center top;" data-parallax="off" class="rev-slidebg" data-no-retina />
                        <rs-layer
                          id="slider-2-slide-12-layer-2"
                          data-type="text"
                          data-color="rgba(255, 255, 255, 0.11)"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:0,26px,0,0;y:m;yo:-141px,-106px,-124px,-99px;"
                          data-text="w:normal;s:180,150,130,100;l:165,98,90,72;ls:0,0,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:1200px,890px,537px,455px;h:186px,138px,auto,auto;"
                          data-frame_0="o:1;"
                          data-frame_0_chars="d:5;y:-100%;o:0;rZ:35deg;"
                          data-frame_0_mask="u:t;"
                          data-frame_1="st:1360;sp:1200;sR:1360;"
                          data-frame_1_chars="e:power4.inOut;d:10;rZ:0deg;"
                          data-frame_1_mask="u:t;"
                          data-frame_999="o:0;st:w;sR:5640;"
                          style="z-index:13;text-transform:uppercase;"
                          class="font-current-theme1"
                        >kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-12-layer-10"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,0,0;yo:281px,203px,175px,179px;"
                          data-text="w:normal;s:22,22,24,20;l:30,32,24,22;ls:1px,1px,0px,1px;fw:500;a:left,left,center,center;"
                          data-dim="w:482px,355px,344px,356px;h:auto,auto,auto,26px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:500;sp:1000;sR:500;"
                          data-frame_999="o:0;st:w;sR:7500;"
                          style="z-index:12;"
                          class="font-current-theme1"
                        >Welcome to kologi
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-12-layer-18"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:55px,55px,8px,0;yo:318px,250px,212px,215px;"
                          data-text="w:normal;s:75,70,60,40;l:95,90,80,50;ls:0px,0px,-1px,0px;fw:700;a:left,left,center,center;"
                          data-dim="w:850px,743px,659px,455px;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1100;sp:1000;sR:1100;"
                          data-frame_999="o:0;st:w;sR:6900;"
                          style="z-index:11;text-transform:uppercase;"
                          class="font-current-theme1"
                        >Donate And Help Us<span class="text-theme-colored2"> Change The</span> World
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-12-layer-22"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:60px,60px,-90px,-100px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:1700;sp:1000;sR:1700;"
                          data-frame_999="o:0;st:w;sR:6300;"
                          style="z-index:10;"
                          class="font-current-theme1"
                        ><a href="/about" class="btn btn-theme-colored1 btn-lg btn-flat">Read More</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-12-layer-3"
                          data-type="text"
                          data-rsp_ch="on"
                          data-xy="x:l,l,c,c;xo:270px,270px,100px,110px;yo:548px,480px,440px,370px;"
                          data-text="w:normal;s:20,16,16,13;l:22,20,18,20;a:left,left,left,center;"
                          data-frame_0="y:-50,-37,-28,-17;"
                          data-frame_1="st:2020;sp:1000;sR:2020;"
                          data-frame_999="o:0;st:w;sR:5980;"
                          style="z-index:9;"
                          class="font-current-theme1"
                        ><a href="/contact" class="btn btn-theme-colored2 btn-lg btn-flat">Contact Us</a>
                        </rs-layer>
                        <rs-layer
                          id="slider-2-slide-12-layer-0"
                          data-type="shape"
                          data-rsp_ch="on"
                          data-text="w:normal;s:20,14,10,6;l:0,18,13,8;"
                          data-dim="w:100%;h:100%;"
                          data-basealign="slide"
                          data-frame_999="o:0;st:w;sR:8700;"
                          style="z-index:8;background-color:rgba(0,10,22,0.17);"
                        >
                        </rs-layer>
                      </rs-slide>
                    </rs-slides>
                    <rs-static-layers>
                      {/*
                          */}
                    </rs-static-layers>
                    <rs-progress class="rs-bottom" style="height: 5px; background: rgba(199,199,199,0.5);"></rs-progress>
                  </rs-module>
                  <script>
                    if(typeof revslider_showDoubleJqueryError === "undefined") {
                      function revslider_showDoubleJqueryError(sliderID) {
                        var err = "<div class='rs_error_message_box'>";
                        err += "<div class='rs_error_message_oops'>Oops...</div>";
                        err += "<div class='rs_error_message_content'>";
                        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
                        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
                        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
                        err += "</div>";
                        err += "</div>";
                        jQuery(sliderID).show().html(err);
                      }
                    }
                  </script>
                </rs-module-wrap>
                {/* END REVOLUTION SLIDER */}
              </div>
            </div>
          </div>
        </section>
        {/* Section: home End */}

        {/* Section: About */}
        <section>
          <div class="container pt-0">
            <div class="section-content about-current-theme-style1">
              <div class="row">
                <div class="col-xl-6 offset-xl-6">
                  <div class="feature-causes-current-style1 bg-theme-colored1 pl-xs-15">
                    <h4 class="causes-title mt-0 text-white">Save the World</h4>
                    <h6 class="causes-goal mt-0 mb-40 text-theme-colored2 font-weight-500">Goal: 3600.00 USD</h6>
                    <p class="mb-0 text-white mb-xs-25">Dignissim cras tincidunt lobortis feugiat vivam at augue eget Id consectetur lorem ipsum is simply free text purus ut integer orci</p>
                    <div class="tm-sc-progress progress-item progress-item-current-style1 m-0">
                      <div class="progress-title">
                        <h6 class="text-white title m-0">Raised</h6>
                      </div>
                      <div class="tm-sc-progress-bar progress-bar-fixed-right-percent" data-percent="56" data-bar-height="35">
                        <div class="progress-title-holder">
                          <span class="percent">
                            <span class="symbol-left"></span>
                            <span class="value">56</span>
                            <span class="symbol-right">%</span>
                          </span>
                        </div>
                        <div class="progress-holder">
                          <div class="progress-content bg-theme-colored2"></div>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact" class="btn btn-md btn-theme-colored3 btn-flat">Donate</Link>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="about-image-layer1 rs-about-image-layer1">
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
                    <Link to="/about" class="btn btn-lg btn-theme-colored1 btn-flat">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tm-floating-objects">
            <span class="floating-object-1" data-tm-bg-img="/images/shape/about-01.png" data-tm-width="256" data-tm-height="349" data-tm-top="auto" data-tm-bottom="-8" data-tm-left="75" data-tm-opacity="1"></span>
            <span class="floating-object-2 tm-animation-floating" data-tm-bg-img="/images/shape/about-02.png" data-tm-width="90" data-tm-height="80" data-tm-top="150" data-tm-bottom="auto" data-tm-left="180" data-tm-opacity="1"></span>
            <span class="floating-object-3" data-tm-bg-img="/images/shape/about-03.png" data-tm-width="174" data-tm-height="258" data-tm-top="auto" data-tm-bottom="0" data-tm-right="100" data-tm-left="auto" data-tm-opacity="1"></span>
            <span class="floating-object-4 tm-animation-slide-horizontal" data-tm-bg-img="/images/shape/about-04.png" data-tm-width="90" data-tm-height="80" data-tm-top="40%" data-tm-bottom="auto" data-tm-right="120" data-tm-left="auto" data-tm-opacity="1"></span>
          </div>
        </section>

        <!-- Section: Service -->
        <section data-tm-bg-color="#f4f3ef">
          <div class="container">
            <div class="tm-sc-section-title section-title text-center mb-50">
              <div class="row">
                <div class="col-lg-5 m-auto">
                  <div class="title-wrapper mb-0">
                    <div class="title-icon-img line-height-1">
                      <img src="/images/icons/title-icon.png" alt="Image">
                    </div>
                    <h2 class="title">What We Do</h2>
                    <p class="paragraph mb-0">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row">
                <div class="col-sm-6 col-xl-3">
                  <div class="service-item-current-style1 text-center position-relative z-index-1 overflow-hidden tm-animation move-right animate mb-lg-30">
                    <div class="service-icon mb-25 text-center d-inline-block">
                      <img class="icon" src="/images/icons/s01.png" alt="Icon">
                    </div>
                    <h6 class="service-title mb-25 mt-0 mb-lg--0">Eco System</h6>
                    <p class="service-details font-size-15 mb-0">Lorem ipsum is free text used by neque porro est qui dolorem ipsum quia.</p>
                    <div class="floating-object-1 tm-animation-floating" data-tm-bg-img="/images/shape/service-01.png"></div>
                    <div class="line-style"></div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                  <div class="service-item-current-style1 text-center position-relative z-index-1 overflow-hidden tm-animation move-right2 animate mb-lg-30">
                    <div class="service-icon mb-25 text-center d-inline-block">
                      <img class="icon" src="/images/icons/s02.png" alt="Icon">
                    </div>
                    <h6 class="service-title mb-25 mt-0 mb-lg--0">Recycling</h6>
                    <p class="service-details font-size-15 mb-0">Lorem ipsum is free text used by neque porro est qui dolorem ipsum quia.</p>
                    <div class="floating-object-1 tm-animation-spin-half" data-tm-bg-img="/images/shape/service-01.png"></div>
                    <div class="line-style"></div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                  <div class="service-item-current-style1 text-center position-relative z-index-1 overflow-hidden tm-animation move-right3 animate mb-lg-30">
                    <div class="service-icon mb-25 text-center d-inline-block">
                      <img class="icon" src="/images/icons/s03.png" alt="Icon">
                    </div>
                    <h6 class="service-title mb-25 mt-0 mb-lg--0">Water Refine</h6>
                    <p class="service-details font-size-15 mb-0">Lorem ipsum is free text used by neque porro est qui dolorem ipsum quia.</p>
                    <div class="floating-object-1 tm-animation-floating" data-tm-bg-img="/images/shape/service-01.png"></div>
                    <div class="line-style"></div>
                  </div>
                </div>
                <div class="col-sm-6 col-xl-3">
                  <div class="service-item-current-style1 text-center position-relative z-index-1 overflow-hidden tm-animation move-right4 animate mb-lg-30">
                    <div class="service-icon mb-25 text-center d-inline-block">
                      <img class="icon" src="/images/icons/s04.png" alt="Icon">
                    </div>
                    <h6 class="service-title mb-25 mt-0 mb-lg--0">Save Animals</h6>
                    <p class="service-details font-size-15 mb-0">Lorem ipsum is free text used by neque porro est qui dolorem ipsum quia.</p>
                    <div class="floating-object-1 tm-animation-spin-half" data-tm-bg-img="/images/shape/service-01.png"></div>
                    <div class="line-style"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section: Campaigns -->
        <section>
          <div class="container">
            <div class="section-content">
              <div class="row">
                <div class="col-lg-4">
                  <div class="tm-sc-section-title section-title mb-0 pr-70 pr-lg--0 mb-md-40">
                    <div class="title-wrapper mb-0">
                      <div class="title-icon-img">
                        <img src="/images/icons/title-icon.png" alt="Image">
                      </div>
                      <h2 class="title">Our Fundraising Campaigns</h2>
                      <p class="paragraph mb-0">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="causes-carousel-current-style1">
                    <div class="tm-owl-carousel-2col owl-carousel owl-theme" data-autoplay="false" data-loop="true" data-duration="6000" data-smartspeed="300" data-margin="30" data-stagepadding="20" data-nav="true">
                      <div class="item">
                        <div class="causes-item-current-style1">
                          <div class="causes-item">
                            <div class="causes-thumb">
                              <img src="/images/causes/c01.jpg" alt="Image" class="w-100">
                            </div>
                            <div class="causes-details">
                              <h5 class="causes-title mt-0 mb-20"><Link to="/campaign-details">Eco System for Global Warnings</Link></h5>
                              <div class="tm-sc-progress progress-item progress-item-current-style2 m-0">
                                <div class="progress-title">
                                  <h6 class="title m-0">Raised</h6>
                                </div>
                                <div class="tm-sc-progress-bar progress-bar-fixed-right-percent mb-10" data-percent="23" data-bar-height="9">
                                  <div class="progress-title-holder">
                                    <span class="percent">
                                      <span class="symbol-left"></span>
                                      <span class="value">23</span>
                                      <span class="symbol-right">%</span>
                                    </span>
                                  </div>
                                  <div class="progress-holder">
                                    <div class="progress-content bg-theme-colored1"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="donation-goal">
                                <div class="goal">
                                  <p class="mb-0 text-theme-colored3 font-weight-700">Goal: <span class="text-theme-colored1">3600.00 USD</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="causes-item-current-style1">
                          <div class="causes-item">
                            <div class="causes-thumb">
                              <img src="/images/causes/c02.jpg" alt="Image" class="w-100">
                            </div>
                            <div class="causes-details">
                              <h5 class="causes-title mt-0 mb-20"><Link to="/campaign-details">Let’s Fight for Save Animals</Link></h5>
                              <div class="tm-sc-progress progress-item progress-item-current-style2 m-0">
                                <div class="progress-title">
                                  <h6 class="title m-0">Raised</h6>
                                </div>
                                <div class="tm-sc-progress-bar progress-bar-fixed-right-percent mb-10" data-percent="23" data-bar-height="9">
                                  <div class="progress-title-holder">
                                    <span class="percent">
                                      <span class="symbol-left"></span>
                                      <span class="value">23</span>
                                      <span class="symbol-right">%</span>
                                    </span>
                                  </div>
                                  <div class="progress-holder">
                                    <div class="progress-content bg-theme-colored1"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="donation-goal">
                                <div class="goal">
                                  <p class="mb-0 text-theme-colored3 font-weight-700">Goal: <span class="text-theme-colored1">3600.00 USD</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="causes-item-current-style1">
                          <div class="causes-item">
                            <div class="causes-thumb">
                              <img src="/images/causes/c03.jpg" alt="Image" class="w-100">
                            </div>
                            <div class="causes-details">
                              <h5 class="causes-title mt-0 mb-20"><Link to="/campaign-details">Let’s Fight for Global Warnings</Link></h5>
                              <div class="tm-sc-progress progress-item progress-item-current-style2 m-0">
                                <div class="progress-title">
                                  <h6 class="title m-0">Raised</h6>
                                </div>
                                <div class="tm-sc-progress-bar progress-bar-fixed-right-percent mb-10" data-percent="23" data-bar-height="9">
                                  <div class="progress-title-holder">
                                    <span class="percent">
                                      <span class="symbol-left"></span>
                                      <span class="value">23</span>
                                      <span class="symbol-right">%</span>
                                    </span>
                                  </div>
                                  <div class="progress-holder">
                                    <div class="progress-content bg-theme-colored1"></div>
                                  </div>
                                </div>
                              </div>
                              <div class="donation-goal">
                                <div class="goal">
                                  <p class="mb-0 text-theme-colored3 font-weight-700">Goal: <span class="text-theme-colored1">3600.00 USD</span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tm-floating-objects">
            <span class="floating-object-1" data-tm-bg-img="/images/shape/causes-06.png" data-tm-width="382" data-tm-height="440" data-tm-top="auto" data-tm-bottom="-4px" data-tm-left="25" data-tm-opacity="1"></span>
          </div>
        </section>

        <!-- Start Divider -->
        <section class="text-center bg-img-cover bg-img-center-top" data-tm-bg-img="/images/bg/bg1.jpg">
          <div class="container">
            <div class="row">
              <div class="col-xl-8 m-auto text-center">
                <div class="m-auto mb-25" data-tm-width="75" data-tm-height="63" data-tm-bg-img="/images/icons/heart01.png"></div>
                <h2 class="text-white rs-divider-title font-weight-900 mb-40 mt-0">We Use the Support of 3,4500 People to Clean the Air and Safe Rivers</h2>
                <Link to="/news-details" class="btn btn-lg btn-theme-colored2 btn-flat">Start Donating</Link>
              </div>
            </div>
          </div>
        </section>

        <!-- Section: Project -->
        <section>
          <div class="container">
            <div class="section-content">
              <div class="row">
                <div class="col-lg-6">
                  <div class="layer-image-wrapper layer-image-current-style1 position-relative mr-70 mr-lg--0 mb-md-60">
                    <div class="layer-image mr-60 mr-sm--0">
                      <img class="w-100" src="/images/photos/project-01.jpg" alt="Image">
                    </div>
                    <div class="successfull-project-box-style1 bg-theme-colored1">
                      <img class="icon mb-5" src="/images/icons/p01.png" alt="Image">
                      <h2 class="success-number text-white mt-0 mb-5">8800</h2>
                      <h6 class="title text-theme-colored2 m-0">Successfully<br>Project</h6>
                    </div>
                    <div class="become-volunteer-style1">
                      <Link to="/news-details">Let’s Become a Volunteer <i className="fa fa-angle-right"></i></Link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="tm-sc-section-title section-title mb-50">
                    <div class="title-wrapper mb-0">
                      <div class="title-icon-img">
                        <img src="/images/icons/title-icon.png" alt="Image">
                      </div>
                      <h2 class="title">Join the Race to Make the World a Better Place</h2>
                      <p class="paragraph mb-0">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit. pain and trouble that are bound to ensue weakness of will, which is the same as saying through shrinking.</p>
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
          <div class="tm-floating-objects">
            <span class="floating-object-1" data-tm-bg-img="/images/shape/project-01.png" data-tm-width="411" data-tm-height="298" data-tm-top="auto" data-tm-bottom="-8" data-tm-left="-35" data-tm-opacity="1"></span>
            <span class="floating-object-2" data-tm-bg-img="/images/shape/project-02.png" data-tm-width="136" data-tm-height="201" data-tm-top="auto" data-tm-bottom="0" data-tm-right="80" data-tm-left="auto" data-tm-opacity="1"></span>
            <span class="floating-object-3 tm-animation-random" data-tm-bg-img="/images/shape/project-03.png" data-tm-width="90" data-tm-height="80" data-tm-top="30%" data-tm-bottom="auto" data-tm-right="120" data-tm-opacity="1"></span>
          </div>
        </section>

        <!-- Section: Testimonials -->
        <section data-tm-bg-color="#f4f3ef">
          <div class="container pb-0">
            <div class="tm-sc-section-title section-title text-center mb-50">
              <div class="row">
                <div class="col-lg-5 m-auto">
                  <div class="title-wrapper mb-0">
                    <div class="title-icon-img line-height-1">
                      <img src="/images/icons/title-icon.png" alt="Image">
                    </div>
                    <h2 class="title">What They Say</h2>
                    <p class="paragraph mb-0">Lorem ipsum dolor sit amet nsectetur cing elituspe ndisse suscipit sagitis leo sit.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section-content">
              <div class="row">
                <div class="col-lg-4">
                  <div class="testimonial-item mb-md-150">
                    <div class="author-text mb-30">I was very impresed by the kologi service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</div>
                    <div class="author-info clearfix">
                      <h5 class="name mt-0 mb-0">Mike Hardson</h5>
                      <span class="job-position">Donater</span>
                    </div>
                    <div class="author-thumb">
                      <img src="/images/testimonials/1.jpg" alt="Image">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="testimonial-item mb-md-150">
                    <div class="author-text mb-30">I was very impresed by the kologi service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</div>
                    <div class="author-info clearfix">
                      <h5 class="name mt-0 mb-0">Nike Hardson</h5>
                      <span class="job-position">Donater</span>
                    </div>
                    <div class="author-thumb">
                      <img src="/images/testimonials/2.jpg" alt="Image">
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="testimonial-item">
                    <div class="author-text mb-30">I was very impresed by the kologi service lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia.</div>
                    <div class="author-info clearfix">
                      <h5 class="name mt-0 mb-0">Rike Hardson</h5>
                      <span class="job-position">Donater</span>
                    </div>
                    <div class="author-thumb">
                      <img src="/images/testimonials/3.jpg" alt="Image">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section: News Letter -->
        <section>
          <div class="container pb-100" data-tm-padding-top="235">
            <div class="section-content">
              <div class="row">
                <div class="col-lg-6 align-self-lg-center align-self-xl-start">
                  <div class="thumb">
                    <img class="w-md-100" src="/images/photos/newsletter-01.jpg" alt="Image">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="newsletter-form-current-style1 text-center" data-tm-bg-color="#f4f3ef">
                    <h4 class="mt-0 font-size-24 font-weight-900 mb-5">Newsletter Signup</h4>
                    <p class="mt-0 mb-35">Sign up now to get daily latest news & updates from us</p>
                    <!-- Mailchimp Subscription Form-->
                    <form id="mailchimp-subscription-form2" class="newsletter-form m-0 p-0">
                      <input type="email" id="mce-EMAIL" class="form-control" placeholder="Email Address"  name="EMAIL" value="">
                      <button type="submit" class="btn btn-lg btn-theme-colored1 btn-flat d-block w-100 mt-20">Subscribe Now</button>
                    </form>

                    <!-- Mailchimp Subscription Form Validation-->
                    <script>
                      (function($) {
                        $('#mailchimp-subscription-form2').ajaxChimp({
                            callback: mailChimpCallBack,
                            url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&',
                            dataType: 'jsonp',
                            jsonp: 'c',
                            jsonpCallback: 'mailChimpCallBack'
                        });

                        function mailChimpCallBack(resp) {
                            // Hide any previous response text
                            var $mailchimpform = $('#mailchimp-subscription-form2'),
                                $response = '';
                            $mailchimpform.children(".alert").remove();
                            if (resp.result === 'success') {
                                $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                            } else if (resp.result === 'error') {
                                $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                            }
                            $mailchimpform.prepend($response);
                        }
                      })(jQuery);
                    </script>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="tm-sc-section-title section-title mb-0" data-tm-margin-top="45">
                    <div class="title-wrapper mb-0">
                      <div class="row align-items-center">
                        <div class="col-lg-4 mt-10">
                          <div class="title-icon-img">
                            <img src="/images/icons/title-icon.png" alt="Image">
                          </div>
                          <h2 class="title mt-0">Helping Animals & Working On Environmental Issues</h2>
                        </div>
                        <div class="col-lg-4">
                          <p class="paragraph mb-0">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div>
                        <div class="col-lg-4">
                          <img class="w-md-100 mt-md-40" src="/images/photos/newsletter-02.jpg" alt="Image">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tm-floating-objects">
            <span class="floating-object-1" data-tm-bg-img="/images/shape/news-letter-01.png" data-tm-width="185" data-tm-height="253" data-tm-top="auto" data-tm-bottom="-3" data-tm-left="75" data-tm-opacity="1"></span>
            <span class="floating-object-2 tm-animation-floating" data-tm-bg-img="/images/shape/news-letter-02.png" data-tm-width="90" data-tm-height="80" data-tm-top="180" data-tm-bottom="auto" data-tm-right="110" data-tm-opacity="1"></span>
          </div>
        </section>

        <!-- Section: Gallery -->
        <section>
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="tm-sc-gallery gallery-style1-basic gallery-current-style1 owl-carousel owl-theme tm-owl-carousel-4col tm-gallery-carousel" data-margin="6">
                  <!-- Gallery Item Start -->
                  <div class="tm-carousel-item">
                    <div class="tm-gallery">
                      <div class="tm-gallery-inner">
                        <div class="thumb">
                          <a href="#">
                            <img class="w-100" src="/images/gallery/01.jpg" alt="Image">
                          </a>
                        </div>
                        <div class="tm-gallery-content-wrapper">
                          <div class="tm-gallery-content">
                            <div class="tm-gallery-content-inner">
                              <div class="icons-holder-inner">
                                <div class="styled-icons icon-dark icon-circled icon-theme-colored1">
                                  <a class="lightgallery-trigger styled-icons-item" data-lightbox="image" href="/images/gallery/01.jpg"><i class="fas fa-chevron-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Gallery Item End -->

                  <!-- Gallery Item Start -->
                  <div class="tm-carousel-item">
                    <div class="tm-gallery">
                      <div class="tm-gallery-inner">
                        <div class="thumb">
                          <a href="#">
                            <img class="w-100" src="/images/gallery/02.jpg" alt="Image">
                          </a>
                        </div>
                        <div class="tm-gallery-content-wrapper">
                          <div class="tm-gallery-content">
                            <div class="tm-gallery-content-inner">
                              <div class="icons-holder-inner">
                                <div class="styled-icons icon-dark icon-circled icon-theme-colored1">
                                  <a class="lightgallery-trigger styled-icons-item" data-lightbox="image" href="/images/gallery/02.jpg"><i class="fas fa-chevron-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Gallery Item End -->
                  
                  <!-- Gallery Item Start -->
                  <div class="tm-carousel-item">
                    <div class="tm-gallery">
                      <div class="tm-gallery-inner">
                        <div class="thumb">
                          <a href="#">
                            <img class="w-100" src="/images/gallery/03.jpg" alt="Image">
                          </a>
                        </div>
                        <div class="tm-gallery-content-wrapper">
                          <div class="tm-gallery-content">
                            <div class="tm-gallery-content-inner">
                              <div class="icons-holder-inner">
                                <div class="styled-icons icon-dark icon-circled icon-theme-colored1">
                                  <a class="lightgallery-trigger styled-icons-item" data-lightbox="image" href="/images/gallery/03.jpg"><i class="fas fa-chevron-right"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Gallery Item End -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- end main-content -->

      <!-- Footer -->
      <footer id="footer" class="footer footer-current-style1">
        <div class="footer-widget-section">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="footer-widget footer-widget--textwidget">
                  <div class="widget-content">
                    <div class="logo mb-30">
                      <img class="logo-default retina" src="/images/logo-wide-white.png" alt="image">
                    </div>
                    <p class="mb-0">Lorem ipsum dolor sit amet, notted consectetur adipisi elit sed do eiusmod temor sit amet dolor incididunt labore magna aliquaenim sed do eiusmod tempor incididunt.</p>
                    <ul class="styled-icons icon-dark icon-theme-colored1 icon-circled clearfix mt-15">
                      <li><a className="social-link" href="#" ><i className="fab fa-facebook"></i></a></li>
                      <li><a className="social-link" href="#" ><i className="fab fa-twitter"></i></a></li>
                      <li><a className="social-link" href="#" ><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="footer-widget footer_widget--recent_post widget ml-20 ml-sm--0">
                  <div class="widget-title">
                    <h5 class="widget_title text-white">Recent News</h5>
                  </div>
                  <div class="widget-content">
                    <ul class="recent-post clearfix">
                      <li class="clearfix">
                        <div class="post-thumb">
                          <img src="/images/photos/recent-post-01.jpg" alt="Image">
                        </div>
                        <div class="post-data">
                          <h6 class="title"><a href="/news-details">Increasint the amount of clean energy</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li class="clearfix">
                        <div class="post-thumb">
                          <img src="/images/photos/recent-post-02.jpg" alt="Image">
                        </div>
                        <div class="post-data">
                          <h6 class="title"><a href="/news-details">Keep our forest safe and healthy</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                      <li class="clearfix">
                        <div class="post-thumb">
                          <img src="/images/photos/recent-post-03.jpg" alt="Image">
                        </div>
                        <div class="post-data">
                          <h6 class="title"><a href="/news-details">The solution to climate change</a></h6>
                          <p class="mb-0 date">Feb 01, 2021</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-50 mt-lg--0">
                <div class="footer-widget footer_widget--newsletter">
                  <div class="widget-title">
                    <h5 class="widget_title text-white">Newsletter</h5>
                  </div>
                  <div class="widget-content">
                    <p>We provide the best news for our beloved subscribers.</p>
                    <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-1698" method="post" data-id="1698" data-name="Newsletter Form">
                      <div class="mc4wp-form-fields">
                        <div class="input-group">
                          <input type="email" name="EMAIL" class="form-control" placeholder="Enter email address" required="">
                          <button type="submit" class="btn btn-theme-colored1 btn-flat">
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
                      <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Privacy</a></li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">FAQ</a></li>
                      <li class="menu-item menu-item-type-custom menu-item-object-custom"><a href="#">Support</a></li>
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

export default Home;