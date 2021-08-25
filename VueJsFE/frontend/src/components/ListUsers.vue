<template>
  <div class="listUser">
    <h3>Users</h3>
    <ul id="example-1">
      <li v-for="item in users" :key="item.email">
        {{item.name + " " + item.surname}}
      </li>
    </ul>
  </div>
</template>

<script src="C:\Users\tt\Desktop\VueJsFE\frontend\src\store\listUser.js"></script>

<style scoped>

</style>