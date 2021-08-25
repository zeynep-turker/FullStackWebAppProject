<template>

  <form>
    <h2>Reset Password</h2>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password" required>
    </div>
    <div class="form-group">
      <label>Password Confirm</label>
      <input type="password" class="form-control" v-model="confirmPassword" placeholder="Password" required>
    </div>

    <button class="btn btn-primary btn-block" v-on:click="reset">Submit</button>

  </form>
</template>

<script type = "text/javascript" src="C:\Users\tt\Desktop\VueJsFE\frontend\src\store\reset.js"> </script>

<style scoped>

h2 {
  text-align: center;
}

</style>