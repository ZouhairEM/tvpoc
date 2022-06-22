<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: ubuntu, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2em auto;
  max-width: 1400px;
}

button {
  background: #ffc107 !important;
  border: none;
  color: black !important;
  font-weight: 500;
  padding: 0.4em !important;
  border-radius: 4px !important;
}

button:focus {
  box-shadow: 0 0 0 0.15rem rgb(0 0 0) !important;
}

a {
  color: #ffc107 !important;
  font-weight: bold !important;
}

a:hover {
  color: black !important;
}

input:focus {
  box-shadow: 0 0 0 0.10rem rgb(0 0 0) !important;
  outline: none !important;
}
</style>
