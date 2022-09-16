<template>
  <ul>
    <li>
      <router-link to="/">Products</router-link>
    </li>
    <li>
      <router-link to="/cart">Shopping cart ({{ numberOfItems }}) </router-link>
    </li>
    <li>
      <router-link to="/user-info">Edit my info</router-link>
    </li>
    <li>
      <router-link to="/employee">See the Employe of the Month</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  props: ["numberOfItems"],
};
</script>

<style scoped>
#template {
  list-style: none;
  display: inline-block;
  background-color: #231858;
  color: white;
  width: 70px;
  padding: 5px 20px;
  margin: 5px;
  text-align: center;
}
</style>
