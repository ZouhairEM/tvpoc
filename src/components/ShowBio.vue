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
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
        width="24px" fill="#ffc107">
        <g>
          <rect fill="none" height="24" width="24" x="0" />
          <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
        </g>
      </svg>
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

<style scoped>
.show {
  cursor: pointer;
  background-color: #F1F1F1;
  border: solid 2px !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
  transition: background-color 200ms linear;
  text-align: center;
  color: #2c3e50;
  margin: 2em auto;
  max-width: 1400px;
}

.show:hover {
  background-color: #ffc107;
}

div.rating>svg {
  transition: background-color 400ms linear;
}

.show:hover>div.rating>svg {
  fill: black;
  transition: fill 400ms;
}

.description {
  text-align: left;
}

.genre {
  font-size: 0.8em;
  font-weight: bold;
}
</style>