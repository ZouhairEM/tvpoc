 <template>
  This is the overview
  <div class="container">
    <div class="row">
      <div class="show-item col-md-4" v-for="(show, index) in shows" :key="index" @click="shareShow(show)">
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
      this.$router.push({ name: "shows", params: { data: showObj } });
      // console.log(JSON.parse(JSON.stringify(showObj)));
    }
  },
  created() {
    this.fetchAPI()
  }
}
</script>