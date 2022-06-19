<template>
    <div class="wrapper">
      {{ showInfo.id}}
      {{ showInfo.name}}
    </div>
</template>

<script>
export default {
    name: "Show",
    props: ["showInfo"],
}
</script>

<style>
.wrapper{
  cursor: pointer;
  border: solid 1px black;
  width: 200px;
  margin: 0 auto;
}
</style>