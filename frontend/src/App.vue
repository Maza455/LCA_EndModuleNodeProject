<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/Products">Products</router-link> |
    <router-link to="/Admin">Admin</router-link> |
    <router-link to="/Contact">Contact</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: rgb(255, 179, 0);
}
</style>
