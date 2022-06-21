<template>
  <div class="container-fluid">
    <div class="wrapper-back mt-4 mb-4">
      <router-link to="/#">
        <button>
          Go back to overview
        </button>
      </router-link>
    </div>
    <div class="wrapper-show row col-12 col-md-8 mx-auto align-items-center">
      <div class="wrapper-img col-md-4">
        <img class="image mb-4 p-2 w-100" :src="showDetails[0].image.original" alt="" />
      </div>
      <div class="wrapper-text col-md-8 d-flex flex-column justify-content-around">
        <div>
          <div>
            <div class="d-flex justify-content-between align-items-end mb-3">
              <div>
                <h3 class="mb-0">
                  {{ showDetails[0].name }}
                </h3>
              </div>
              <div class="d-flex">
                <img class="mb-0 mr-1" height="25" src="../../assets/icons/star_rate_black_24dp.svg"
                  :alt="showDetails[0].name">
                <h4 class="mb-0">
                  {{ showDetails[0].rating.average }}
                </h4>
              </div>
              <div>
                {{ showDetails[0].language }}
              </div>
            </div>
          </div>
          <!-- SUMMARY -->
          <div class="summary mt-2 mb-2 col-md-12 text-start" v-html="showDetails[0].summary"></div>
        </div>
        <!-- GENRES & RUNTIME -->
        <div class="row col-md-12">
          <!-- GENRES -->
          <div class="col-md-6 mb-4">
            <div class="genre-title">
              <h4>
                Genres
              </h4>
            </div>
            <div class="genres d-flex justify-content-evenly">
              <div class="genre" v-for="(genre, i) in showDetails[0].genres" :key="i">

                {{ genre }}

              </div>
            </div>
          </div>
          <!-- RUNTIME -->
          <div class="col-md-6 mb-4">
            <h4>
              Runtime
            </h4>
            <div class="runtimes d-flex justify-content-evenly">

              {{ showDetails[0].premiered }}

              -

              {{ showDetails[0].ended }}

            </div>
          </div>
        </div>
        <!-- EPISODE COUNT & LINKS -->
        <div class="row col-md-12">
          <!-- EPISODE COUNT  -->
          <div class="col-md-6 mb-2">
            <h4>
              Episode count
            </h4>
            <h4 class="d-flex align-items-center justify-content-center">
              {{ showDetails[0].runtime }}
            </h4>
          </div>
          <!-- LINKS -->
          <div class="col-md-6 mb-2">
            <h4>
              Links
            </h4>
            <div class="external d-flex justify-content-around">
              <a :href="showDetails[0]" target="_blank">
                TVMaze
              </a>
              <a :href="'https://www.imdb.com/title/' + `${showDetails[0].externals.imdb}`" target="_blank">
                IMDb
              </a>
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
      showDetails: [
        {
          id: 27,
          url: "https://www.tvmaze.com/shows/27/berserk",
          name: "Berserk",
          type: "Animation",
          language: "Japanese",
          genres: [
            "Anime",
            "Fantasy",
            "Horror"
          ],
          status: "Ended",
          runtime: 25,
          premiered: "1997-10-07",
          ended: "1998-03-31",
          rating: {
            average: 8.6
          },
          externals: {
            tvrage: 2764,
            thetvdb: 73752,
            imdb: "tt0318871"
          },
          image: {
            medium: "https://static.tvmaze.com/uploads/images/medium_portrait/396/991619.jpg",
            original: "https://static.tvmaze.com/uploads/images/original_untouched/396/991619.jpg"
          },
          summary: "<p><b>Berserk </b>is a 25-part anime set in a dark fantasy/horror environment whereby the series focuses on the main character guts; a lone swordman who later meets up with a group of mercenaries called the band of the hawk. The leader of this band holds a strange necklace called a behelit that will only lead to evil.</p>",
        }
      ]
    }
  },
  created() {
    this.$data.show = this.$route.params;
    // console.log(JSON.stringify(this.$route.params));
    console.log(JSON.stringify(this.$route.params.data));
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