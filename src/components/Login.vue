<template>
  <div class="main-content">
    <!-- Section: login -->
    <section id="login" class="divider bg-white">
      <div class="container pt-100 pb-70">
        <div class="section-content">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <h2 class="title text-center mb-30">Login</h2>
              <form action="#" method="post">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter your email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Enter your password">
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
                <a-button type="primary" size="large" block>Login</a-button>
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
  name: 'Login'
}
</script>