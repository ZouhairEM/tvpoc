<template>
  <div class="row show col-md-12 p-2 m-2 border border-dark rounded">
    <div class="col-md-3 d-flex align-items-center">
      <div class="p-sm-2 p-lg-0 thumbnail">
        <img class="rounded w-100 w-sm-50" :src="showInfo.image.medium" :alt="showInfo.name" />
      </div>
    </div>
    <div class="row col-md-9">
      <div class="d-flex justify-content-between justify-content-sm-center mx-0 mb-4 px-0">
        <div class="description px-2 col-md-10 d-flex justify-content-between">
          <h5 class="text-start">
            {{ showInfo.name }}
          </h5>
        </div>
        <div class="col-md-2">
          <div class="d-flex align-items-center">
            <div>
              <svg
                class="svg-star"
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
              >
                <g>
                  <rect fill="none" height="24" width="24" x="0" />
                  <polygon
                    points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"
                  />
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
      <div class="col-md-12 d-sm-flex justify-content-sm-center justify-content-lg-start">
        <div>
          <div class="genre-title d-lg-flex justify-content-sm-center justify-content-lg-start">
            <h6 class="mb-1">Genres</h6>
          </div>
          <div class="genres d-flex">
            <div class="genre font-weight-bold" v-for="(genre, i) in showInfo.genres" :key="i">
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

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  showInfo: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss">
.show {
  cursor: pointer;
  background-color: #ecebeb;
  border: none !important;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
  transition: background-color 200ms linear;
  color: var(--highlightColor);
  &:hover {
    background-color: var(--primaryColor);
    > div > div > div > div > div > svg > g > polygon {
      fill: black;
      transition: fill 400ms;
    }
  }
}

div.rating > svg {
  transition: background-color 400ms linear;
}
.genre {
  font-size: 0.8em;
  margin-right: 1em;
}
@media (max-width: 772px) {
  .thumbnail {
    width: 50% !important;
    margin: 2em auto;
  }
}
</style>
