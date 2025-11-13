<template>
  <div class="page404">
    <h1>404</h1>
    <p>抱歉，您访问的页面不存在。</p>
    <a href="/" class="home-btn">返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style scoped>
.page404 {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 100px;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
}

.home-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #409EFF;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-btn:hover {
  background-color: #66B1FF;
}
</style>