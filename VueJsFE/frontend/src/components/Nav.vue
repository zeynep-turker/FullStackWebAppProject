<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <a href="/" class="navbar-brand">Home</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/login" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <a href="/signup" class="nav-link">Sign Up</a>
            </li>
            <li class="nav-item">
              <a href="/users" class="nav-link">Users</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>