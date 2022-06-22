<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "../src/assets/js/bootstrap.bundle";
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

:root {
  --highlightColor: #ffbe0b;
}
button {
  background: var(--highlightColor) !important;
  border: none;
  color: black !important;
  font-weight: 500;
  padding: 0.4em !important;
  border-radius: 4px !important;
}

button:focus {
  box-shadow: 0 0 0 0.15rem rgb(0 0 0) !important;
}
polygon{
  fill: var(--highlightColor);
}
a {
  color: var(--highlightColor) !important;
  font-weight: bold !important;
}

a:hover {
  color: black !important;
}

input:focus {
  box-shadow: 0 0 0 0.10rem rgb(0 0 0) !important;
  outline: none !important;
}

.black-btn {
  background: black !important;
  color: white !important;
  margin: 0 !important;
  margin-left: 0.5em !important;
}

button:disabled {
  visibility: hidden;
}
</style>
