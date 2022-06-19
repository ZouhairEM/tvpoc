 <template>
  This is the overview
  <div class="wrapper">
    <div v-for="(show, index) in shows" :key="index">

      <div class="show-item" @click="shareShow(show)">
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
      this.$router.push({ name: "shows", params: { data: showObj} });
      // console.log(JSON.parse(JSON.stringify(showObj)));
    }
  },
  created() {
    this.fetchAPI()
  }
}
</script>
 
 <style>
 </style>