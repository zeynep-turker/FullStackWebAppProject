<template>

  <form>
    <h2>Login</h2>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Enter Email" required>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Enter Password" required>
    </div>


  <button class="btn btn-primary btn-block" v-on:click="login" >Login</button>

  <p class="forgot-password text-right">
    <router-link to="forgot" >Forgot password?</router-link>
  </p>

  </form>





</template>

<script type = "text/javascript" src="C:\Users\tt\Desktop\VueJsFE\frontend\src\store\login.js"></script>

<style scoped>

h2 {
  text-align: center;
}

</style>