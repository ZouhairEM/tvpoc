 <template>
  <div class="container-fluid">
    <div class="wrapper-back mt-4 mb-4">
      <div class="d-flex flex-start m-2">
        <input type="text" v-model="search" placeholder="Type to find a show" class="p-1" />
        <button class="black-btn m-1" @click="clearSearch" :disabled="!search.length">
          Clear
        </button>
      </div>
    </div>
    <Header 
      @emitGenreClicked="setfilter" 
      @emitRatingClicked="sortList" 
      @emitAZClicked="sortList" 
      @emitShowClicked="showAll" 
      :filters="filters" 
      :filteredShows="filteredShows" 
      :totalCount="totalCount" />
    <div class="row mt-4">
      <div v-if="typedShow.length === 0" class="empty p-2 mx-auto">
        <h3 class="d-flex justify-content-center">
          No shows were found with a name of
          '{{ search }}'
        </h3>
      </div>
      <div class="show-item col-sm-12 col-md-6 col-lg-4" v-for="(show, i) in typedShow" :key="i"
        @click="shareShow(show)">
        <ShowBio :showInfo="show" />
      </div>
    </div>
  </div>
</template>
 
 <script>
 import ShowBio from "../ShowBio.vue"
 import Header from "../Header.vue"
 
 export default {
   name: "ShowsOverview",
   components: {
     ShowBio,
     Header
   },
   data() {
     return {
       shows: [],
       filteredShows: [],
       filters: [],
       search: "",
       totalCount: [],
       status: false,
       sortTable: [],
       name: 'hi',
       exampleObj: {
         name: 'test'
       }
     }
   },
   methods: {
     fetchAPI: function () {
       fetch("https://api.tvmaze.com/shows")
         .then((response => {
           return response.json();
         }))
         .then((response => {
           this.shows = response;
           this.totalCount.push(this.shows.length)
           this.filteredShows = this.shows;
           this.availableFilters();
         }))
     },
     shareShow: function (e) {
       this.$router.push({
         name: "shows",
         query: {
           id: e.id,
           data: JSON.stringify(e)
         }
       });
     },
     availableFilters: function () {
       return this.shows.filter((show) => {
         return (
           show.genres.forEach((genre) => {
             if (!this.filters.includes(genre)) {
               this.filters.sort().push(genre);
             }
           })
         )
       });
     },
     showAll: function () {
       this.filteredShows = this.shows;
     },
     sortList: function (payload) {
       if (payload.name === 'byRating') {
         this.filteredShows.sort((a, b) => { return parseFloat(b.rating.average) - parseFloat(a.rating.average) });
       } else if (payload.name === 'byAZ') {
         this.filteredShows.sort((a, b) => { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()) })
       }
     },
     setfilter(payload) {
       this.filteredShows = this.shows.filter((show) => {
         return show.genres.includes(payload.name);
       })
     },
     clearSearch: function () {
       this.search = "";
     },
   },
   computed: {
     typedShow: function () {
       return this.filteredShows.filter((show) => {
         return (
           show.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
         )
       })
     },
   },
   created() {
     this.fetchAPI();
   }
 }
 </script>