 <template>
  This is the overview
  <div class="container">
    <div class="row col-3 m-3 mx-auto">
      <div class="col-9">
        <input type="text" v-model="search" placeholder="Type to find a show" class="p-1" />
      </div>
      <div class="clear-btn col-3 bg-dark bg-gradient text-white p-1">
        Clear
      </div>
    </div>
    <div class="row">
      <div class="show-item col-md-4" v-for="(show, index) in filteredShow" :key="index" @click="shareShow(show)">
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
       search: ""
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
         }))
     },
     shareShow: function (showObj) {
       this.$router.push({ name: "shows", params: { data: showObj } });
       // console.log(JSON.parse(JSON.stringify(showObj)));
     }
   },
   computed: {
     filteredShow: function () {
        return this.shows.filter((show) => {
          return (
              show.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          )
        })
     }
   },
   created() {
     this.fetchAPI()
   }
 }
 </script>
 
 <style scoped>
 .clear-btn {
  line-height: 1.7;
 }
 </style>