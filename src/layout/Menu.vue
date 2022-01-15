<template>
  <div>
    <div class="hidden-menu left" id="mobile-menu">
      <nav class="main">
        <ul>
          <li><a href="/">Lessons</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Tutors</a></li>
          <li><a href="/">Our story</a></li>
          <li><a href="/">Login</a></li>
          <li><a href="/" class="button primary">Try a lesson free</a></li>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu left" id="mobile-menu-dashboard">
      <nav>
        <ul>
          <li><a href="" class="active">Classes</a></li>
          <li><a href="">Reports</a></li>
          <li><a href="">Credits</a></li>
          <li><a href="">Account</a></li>
          <li><a href="" class="button primary">Schedule class</a></li>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu left" id="example-1">
      <nav>
        <ul>
          <li><a href="#">Lessons</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Tutors</a></li>
          <li><a href="#">Our story</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#" class="button primary">Try a lesson free</a></li>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu top" id="example-2">
      <nav>
        <ul>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu right" id="example-3">
      <nav>
        <ul>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu bottom" id="example-4">
      <nav>
        <ul>
        </ul>
      </nav>
    </div>

    <div class="hidden-menu-overlay"></div>

    <header class="navbar">
      <div class="container">
        <div class="navbar-section">
          <a href="" class="logo">
            <img src="../assets/images/logo.svg" alt="Live Lingua">
          </a>
        </div>
        <div class="navbar-section centered">
          <nav class="hide-lg">
            <ul>
              <li><a href="#">Lessons</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Tutors</a></li>
              <li><a href="#">Our Story</a></li>
            </ul>
          </nav>
        </div>
        <div class="navbar-section">
          <nav class="hide-lg">
            <ul>
              <li><a href="#">Login</a></li>
              <li><a href="#" class="button primary">Get started</a></li>
            </ul>
          </nav>
          <a href="#mobile-menu" class="fal fa-bars show-lg"></a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
