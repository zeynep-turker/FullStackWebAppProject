<template>

  <form>
    <h2>Sign Up</h2>

    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" v-model="name" placeholder="Enter Name" required>
    </div>

    <div class="form-group">
      <label>Surname</label>
      <input type="text" class="form-control" v-model="surname" placeholder="Enter Surname" required>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email"  placeholder="Enter Email" required>
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Enter Password" required>
    </div>

    <button class="btn btn-primary btn-block" v-on:click="signup">Sign Up</button>
  </form>
</template>

<script type = "text/javascript" src="C:\Users\tt\Desktop\VueJsFE\frontend\src\store\signup.js"></script>

<style scoped>

h2 {
  text-align: center;
}
</style>