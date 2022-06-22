<template>
  <div class="container-fluid">
    <div class="wrapper-back mt-4 mb-4">
      <router-link to="/#">
        <button>
          <h4>
            Back to overview
          </h4>
        </button>
      </router-link>
    </div>
    <div class="wrapper-show row col-12 col-md-8 mx-auto align-items-center">
      <div class="wrapper-img col-md-4">
        <img class="image mb-4 p-2 w-100" :src="show.image.original" alt="" />
      </div>
      <div class="wrapper-text col-md-8 d-flex flex-column justify-content-around">
        <div>
          <div>
            <div class="d-flex justify-content-between align-items-end mb-3">
              <div>
                <h3 class="mb-0">
                  {{ show.name }}
                </h3>
              </div>
              <div class="d-flex">
                <svg class="svg-star mb-0 mr-1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
                  height="24px" viewBox="0 0 24 24" width="24px">
                  <g>
                    <rect fill="none" height="24" width="24" x="0" />
                    <polygon
                      points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />
                  </g>
                </svg>
                <h4 class="mb-0">
                  {{ show.rating.average }}
                </h4>
              </div>
              <div>
                {{ show.language }}
              </div>
            </div>
          </div>
          <div class="summary mt-2 mb-2 col-md-12 text-start" v-html="show.summary"></div>
        </div>
        <div class="row col-md-12">
          <div class="col-md-6 mb-4">
            <div class="genre-title">
              <h4>
                Genres
              </h4>
            </div>
            <div class="genres d-flex justify-content-evenly">
              <div class="genre" v-for="(genre, i) in show.genres" :key="i">
                {{ genre }}
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <h4>
              Runtime
            </h4>
            <div class="runtimes d-flex justify-content-evenly">

              {{ show.premiered }}
              -
              {{ show.ended }}
            </div>
          </div>
        </div>
        <div class="row col-md-12">
          <div class="col-md-6 mb-2">
            <h4>
              Episode count
            </h4>
            <h4 class="d-flex align-items-center justify-content-center">
              {{ show.runtime }}
            </h4>
          </div>
          <div class="col-md-6 mb-2">
            <h4>
              Links
            </h4>
            <div class="external d-flex justify-content-around">
              <a :href="show.url" target="_blank">
                TVMaze
              </a>
              <div>
                <a :href="'https://www.imdb.com/title/' + `${show.externals.imdb}`" target="_blank">
                  IMDb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowPage",
  data() {
    return {
      show: null,
    }
  },
  created() {
    this.show = JSON.parse(this.$route.query.data);
  }
}
</script>

<style scoped>
.wrapper-show {
  background-color: #F1F1F1;
  padding: 1em;
  box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
}
</style>