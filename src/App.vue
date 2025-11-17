<template>
  <div>
    <div class="side-panel-body-overlay"></div>
    <SidePanel />
    <div id="wrapper" class="clearfix">
      <!-- Header -->
      <Header />
      </header>
      <!-- Start main-content -->
      <div class="main-content">
        <!-- Section: home -->
        <section id="home" class="divider fullscreen">
          <div class="display-table">
            <div class="display-table-cell">
              <div class="container pt-0 pb-0">
                <div class="row">
                  <div class="col-md-7">
                    <h3 class="text-white font-36 mt-10 mb-0">MAKE THE WORLD <span class="text-theme-colored1">GREENER</span> AGAIN</h3>
                    <h5 class="text-white font-weight-400 line-height-30 mt-15 mb-30">Join our global community to protect the environment and create a sustainable future for generations to come.</h5>
                    <div class="d-inline-block">
                      <a-button type="primary" size="large" class="mr-10">Learn More</a-button>
                      <a-button size="large">Get Involved</a-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SidePanel from './components/SidePanel.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    SidePanel,
    Footer
  }
}
</script>