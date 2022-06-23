<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div class="container-fluid p-0 d-flex justify-content-end bg-transparent">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="m-0 d-flex flex-wrap">
                    <button class="m-1 filter tn btn-primary btn-lg" v-for="(filter, i) in filters" :key="i"
                        @click="emitGenreFilter(filter)">
                        {{ filter }}
                    </button>
                    <div class="d-flex justify-content-start">
                        <button class="m-1 filter tn btn-primary btn-lg black-btn"
                            @click="emitRatingFilter('byRating')">
                            Top rated
                        </button>
                        <button class="m-1 filter tn btn-primary btn-lg black-btn" @click="emitAZFilter('byAZ')">
                            A-Z
                        </button>
                        <button class="m-1 filter tn btn-primary btn-lg black-btn" @click="emitShowAll"
                            v-if="filteredShows.length < totalCount">
                            Show all
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import "../assets/js/bootstrap.bundle";

export default {
    name: "Header",
    props: ["filters", "filteredShows", "totalCount"],
    methods: {
        emitGenreFilter: function (filter) {
            this.$emit('emitGenreClicked', { name: filter })
        },
        emitRatingFilter: function (byRating) {
            this.$emit('emitRatingClicked', { name: byRating })
        },
        emitAZFilter: function (byAZ) {
            this.$emit('emitAZClicked', { name: byAZ })
        },
        emitShowAll: function () {
            this.$emit('emitShowClicked')
        }
    }
}
</script>

<style>
button.navbar-toggler {
    background: var(--primaryColor)!important;
}
</style>