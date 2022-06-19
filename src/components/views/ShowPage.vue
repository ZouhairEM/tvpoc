<template>
  <!-- {{ id }} -->
  <pre>
    On the ShowPage
    <!-- {{ show.data }} -->
  </pre>
</template>

<script>
export default {
    name: "ShowPage",
    data(){
        return {
            show: null
        }
    },
    created() {
        this.$data.show = this.$route.params;
        // console.log(JSON.stringify(this.$route.params));
        console.log(JSON.stringify(this.$route.params.data));
    }
}
</script>

<style>

</style>