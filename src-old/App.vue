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

:root {
  --primaryColor: #ffbe0b;
  --secondaryColor: black;
}

button {
  background-color: var(--primaryColor) !important;
  border: none;
  color: var(--secondaryColor) !important;
  font-weight: 500;
  padding: 0.4em !important;
  border-radius: 4px !important;
}

button:focus {
  box-shadow: 0 0 0 0.15rem var(--secondaryColor) !important;
}

polygon {
  fill: var(--primaryColor);
}

a {
  color: var(--primaryColor) !important;
  font-weight: bold !important;
}

a:hover {
  color: var(--secondaryColor) !important;
}

input {
  box-shadow: 5px 5px var(--primaryColor);
}

input:focus {
  box-shadow: 5px 5px var(--primaryColor);
  outline: none !important;
}

.black-btn {
  background: var(--secondaryColor) !important;
  color: white !important;
}

button:hover {
  background: var(--secondaryColor) !important;
  color: white !important;

}

button:disabled {
  visibility: hidden;
}

.svg-position-absolute {
  top: 0;
  transform: translate(-50%, 0%);
  z-index: -1;
}

.disappear-icon {
  fill: var(--primaryColor);
}

.welcome-title>h1 {
  box-shadow: 0px 5px var(--primaryColor);
}
button.navbar-toggler {
    background: var(--primaryColor)!important;
}
</style>
