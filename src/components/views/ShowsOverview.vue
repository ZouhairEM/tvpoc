 <template>
  <div class="container">
    <div class="row col-3 m-3 mx-auto">
      <div class="col-9">
        <input type="text" v-model="search" placeholder="Type to find a show" class="p-1" />
      </div>
      <button class="clear-btn" @click="clearSearch" v-if="status">
        Clear
      </button>
    </div>
    <div class="m-2 d-flex flex-wrap">
      <button class="m-1 filter tn btn-primary btn-lg" @click="() => { setfilter(filter) }"
        v-for="(filter, i) in filters" :key="i">
        {{ filter }}
      </button>
    </div>
    <div class="row">
      <div v-if="typedShow.length === 0" class="empty p-2">No shows were found</div>
      <div class="show-item col-md-4" v-for="(show, i) in typedShow" :key="i" @click="shareShow(show)">
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
      status: false
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
    shareShow: function (showObj) {
      this.$router.push({ name: "shows", params: { data: showObj } });
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
      this.status = !this.status;
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
   line-height: 1.7;
   cursor: pointer;
 }
 </style>