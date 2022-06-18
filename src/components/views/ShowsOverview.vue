 <template>
  This is the updated overview
</template>
 
 <script>
export default {
  name: "ShowsOverview",
  methods: {
    fetchAPI: function(){
      fetch("https://api.tvmaze.com/shows")
      .then((response => {
        return response.json();
      }))
      .then((response => {
        console.log(response);
      }))
    }
  },
  created() {
    this.fetchAPI()
  }
}
</script>
 
 <style>
 </style>