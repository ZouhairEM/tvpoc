<template>
  <div class="row show col-md-12 p-2 m-2 border border-dark rounded">
    <div class="col-md-3">
        <img class="thumbnail col-3 rounded w-100" :src="showInfo.image.medium" :alt="showInfo.name" />
    </div>
    <div class="row col-md-9">
      <div class="d-flex justify-content-between mx-0 mb-4 px-0">
        <div class="description px-2 col-md-10 d-flex justify-content-between">
          <h5>
            {{ showInfo.name }}
          </h5>
        </div>
        <div class="col-md-2">
          <div class="d-flex align-items-center">
            <div>
              <svg class="svg-star" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px">
                <g>
                  <rect fill="none" height="24" width="24" x="0" />
                  <polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
                </g>
              </svg>
            </div>
            <div>
              <h5 class="mb-0">
                {{ showInfo.rating.average }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <div>
          <div class="genre-title d-flex justify-content-start">
            <h6 class="mb-1">
              Genres
            </h6>
          </div>
          <div class="genres d-flex">
            <div class="genre" v-for="(genre, i) in showInfo.genres" :key="i">
              <p class="mb-0">
                {{ genre }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
  background-color: #ecebeb;
  border: none !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
  transition: background-color 200ms linear;
  text-align: center;
  color: #2c3e50;
  margin: 2em auto;
  padding: 1em;
}
.show:hover {
  background-color: var(--primaryColor);
}

div.rating>svg {
  fill: red;
  transition: background-color 400ms linear;
}
.show:hover > div >div > div > div > div > svg > g > polygon {
  fill: black;
  transition: fill 400ms;
}

.description {
  text-align: left;
}

.genre {
  font-size: 0.8em;
  font-weight: bold;
  margin-right: 1em;
}
</style>