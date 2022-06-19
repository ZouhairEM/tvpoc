<template>
  <div class="show d-flex justify-content-evenly p-2 m-2 border border-dark rounded">

    <img class="thumbnail col-3 rounded" :src="showInfo.image.medium" :alt="showInfo.name" />
    <div class="description d-flex flex-column justify-content-between px-2 col-7">
      {{ showInfo.name }}
      <div class="genres-section">
        <div class="genre-title">
          Genres
        </div>
        <div class="genres d-flex">
          <div class="genre font-italic font-weight-bold" v-for="(genre, i) in showInfo.genres" :key="i">
            {{ genre }}
          </div>
        </div>
      </div>
    </div>
    <div class="rating d-flex align-items-end col-2">
      <img height="25" src="../assets/icons/star_rate_black_24dp.svg" alt="">
      {{ showInfo.rating.average }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  props: ["showInfo"],
}
</script>

<style>
.show {
  cursor: pointer;
  background-color: #A0D995;
  -webkit-transition: background-color 1000ms linear;
  -moz-transition: background-color 1000ms linear;
  -o-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
  ;
}

.show:hover {
  background-color: #6CC4A1;
}

.description {
  text-align: left;
}
</style>