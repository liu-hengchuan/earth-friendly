<template>
  <div class="main-content">
    <!-- Section: shop -->
    <section id="shop" class="divider bg-white">
      <div class="container pt-100 pb-70">
        <div class="section-content">
          <div class="row text-center">
            <div class="col-md-12">
              <h2 class="title mb-0">Shop</h2>
              <p class="subtitle">Browse our eco-friendly products</p>
            </div>
          </div>
          <div class="row mt-50">
            <div class="col-md-4">
              <div class="product-item">
                <img src="/images/shop/1.jpg" alt="Product 1" class="img-fluid mb-30">
                <div class="product-content">
                  <h3 class="product-name">Eco-Friendly Bag</h3>
                  <p class="product-price">$19.99</p>
                  <a-button type="primary" size="large" block>Add to Cart</a-button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <img src="/images/shop/2.jpg" alt="Product 2" class="img-fluid mb-30">
                <div class="product-content">
                  <h3 class="product-name">Bamboo Toothbrush</h3>
                  <p class="product-price">$9.99</p>
                  <a-button type="primary" size="large" block>Add to Cart</a-button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-item">
                <img src="/images/shop/3.jpg" alt="Product 3" class="img-fluid mb-30">
                <div class="product-content">
                  <h3 class="product-name">Reusable Water Bottle</h3>
                  <p class="product-price">$24.99</p>
                  <a-button type="primary" size="large" block>Add to Cart</a-button>
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
  name: 'Shop'
}
</script>