<template>
  <NavBar />
  <Spinner />
  <main class="container-fluid">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';
export default {
  components: {
    NavBar,
    Footer,
    Spinner
  }
}
</script>
<style src="./assets/Css/style.css">
img[alt='logo'] {
  width: 3rem;
  aspect-ratio: 1/1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: indigo;
}
nav a.router-link-exact-active {
  color: indianred;
}
</style>