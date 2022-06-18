<template>
  <ShowsOverview />
</template>

<script>
import ShowsOverview from './components/views/ShowsOverview.vue'

export default {
  name: 'App',
  components: {
    ShowsOverview
  }
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
</style>
