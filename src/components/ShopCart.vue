<template>
  <div class="shop-cart">
    <h2>购物车</h2>
    <div class="cart-items">
      <div class="cart-item">
        <img src="/images/shop/product1.jpg" alt="Product 1" />
        <div class="item-info">
          <h3>生态友好产品 1</h3>
          <p>价格: $29.99</p>
          <button class="remove-btn">移除</button>
        </div>
      </div>
      <div class="cart-item">
        <img src="/images/shop/product2.jpg" alt="Product 2" />
        <div class="item-info">
          <h3>生态友好产品 2</h3>
          <p>价格: $19.99</p>
          <button class="remove-btn">移除</button>
        </div>
      </div>
    </div>
    <div class="cart-total">
      <h3>总计: $49.98</h3>
      <button class="checkout-btn">结算</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopCart'
}
</script>

<style scoped>
.shop-cart {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-items {
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.item-info h3 {
  margin: 0 0 10px 0;
}

.remove-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.checkout-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
</style>