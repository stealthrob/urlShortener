<template>
  <UrlForm />
</template>

<script>
import UrlForm from './components/urlForm.vue'
export default {
  name: 'App',
  components: { UrlForm }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  margin: 0;
  background-color: #eee;
}
</style>