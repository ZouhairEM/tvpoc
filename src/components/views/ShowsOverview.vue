 <template>
  <div class="container">
    <div class="row col-3 m-3 mx-auto">
      <div class="d-flex flex-start m-2">
        <input type="text" v-model="search" placeholder="Type to find a show" class="p-1" />
        <button class="clear-btn m-1" @click="clearSearch" :disabled="!search.length">
          Clear
        </button>
      </div>
    </div>
    <div class="m-0 d-flex flex-wrap">
      <button class="m-1 filter tn btn-primary btn-lg" @click="() => { setfilter(filter) }"
        v-for="(filter, i) in filters" :key="i">
        {{ filter }}
      </button>
    </div>
    <div class="d-flex justify-content-start">
      <button class="m-1 filter tn btn-primary btn-lg" @click="showAll" :disabled="!search.length">
        Show all
      </button>
    </div>
    <div class="row">
      <div v-if="typedShow.length === 0" class="empty p-2">No shows were found</div>
      <div class="show-item col-md-4" v-for="(show, i) in typedShow" :key="i" @click="shareShow(show.name)">
        <ShowBio :showInfo="show" />
      </div>
    </div>
  </div>
</template>
 
 <script>
import ShowBio from "../ShowBio.vue"
export default {
  name: "ShowsOverview",
  components: {
    ShowBio
  },
  data() {
    return {
      shows: [],
      filteredShows: [],
      filters: [],
      search: "",
      status: false,
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
          this.filteredShows = this.shows;
          this.availableFilters();
        }))
    },
    shareShow: function (e) {
      this.$router.push({ name: "shows", params: { data: e }});
      // console.log(JSON.parse(JSON.stringify(showObj)));
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
    clearSearch: function () {
      this.search = "";
    },
    setfilter(name) {
      this.filteredShows = this.shows.filter((show) => {
        return show.genres.includes(name);
      })
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
  // watch: {
  //   searching(){
  //     if(this.search.length > 0){
  //       this.status = true;
  //       console.log('true');
  //     }
  //   }
  // },
  created() {
    this.fetchAPI();
  }
}
</script>
 
 <style scoped>
 .clear-btn {
    background: black !important;
    color: white !important;
    margin: 0!important;
    margin-left: 0.5em!important;
 }
 button:disabled{
  visibility: hidden;
 }
 </style>