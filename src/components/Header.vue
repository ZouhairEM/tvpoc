<template>
    <div class="m-0 d-flex flex-wrap">
        <button class="m-1 filter tn btn-primary btn-lg" v-for="(filter, i) in filters" :key="i"
            @click="emitGenreFilter(filter)">
            {{ filter }}
        </button>
        <div class="d-flex justify-content-start">
            <button class="m-1 filter tn btn-primary btn-lg black-btn" @click="emitRatingFilter('byRating')">
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
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
</style>