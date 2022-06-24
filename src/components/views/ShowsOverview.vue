 <template>
  <div class="container-fluid" v-if="totalCount.length">
    <WelcomeScreen />
    <Header @emitGenreClicked="setfilter" @emitRatingClicked="sortList" @emitAZClicked="sortList"
      @emitShowClicked="showAll" :filters="filters" :filteredShows="filteredShows" :totalCount="totalCount" />
    <div class="d-flex justify-content-center p-2  mt-4">
      <input type="text" v-model="search" placeholder="Type to find a show" class="p-2 px-3" />
      <button class="black-btn mt-0 mb-2 mx-3" @click="clearSearch" :disabled="!search.length">
        Clear
      </button>
    </div>
    <div class="row mt-4 position-relative">
      <div v-if="typedShow.length === 0" class="empty p-2 mx-auto">
        <h3 class="d-flex justify-content-center">
          No shows were found with a name of
          '{{ search }}'
        </h3>
        <svg version="1.0" class="position-absolute" xmlns="http://www.w3.org/2000/svg" width="512.000000pt"
          height="300px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

          <g class="disappear-icon" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M1870 5013 c-27 -10 -59 -45 -65 -72 -4 -17 15 -104 50 -237 74 -277
82 -300 112 -324 61 -48 153 -2 153 75 0 37 -110 462 -132 511 -19 41 -74 63
-118 47z" />
            <path d="M3011 4853 c-20 -21 -33 -51 -48 -118 -45 -193 -47 -210 -33 -244 26
-63 111 -78 158 -28 30 32 96 314 83 350 -27 70 -109 90 -160 40z" />
            <path d="M1205 4548 c-34 -18 -55 -51 -55 -88 0 -29 27 -75 145 -252 80 -120
156 -225 170 -234 35 -23 93 -13 123 21 46 53 36 79 -120 313 -78 118 -153
223 -167 233 -26 21 -66 24 -96 7z" />
            <path d="M4050 4537 c-26 -13 -66 -61 -286 -340 -112 -143 -124 -162 -124
-198 0 -77 86 -126 147 -84 20 14 330 400 379 472 38 57 28 115 -26 146 -33
20 -56 21 -90 4z" />
            <path d="M337 4173 c-65 -22 -140 -91 -174 -160 -22 -45 -27 -71 -28 -127 0
-80 13 -120 62 -187 18 -26 33 -58 33 -71 0 -37 29 -128 57 -175 34 -58 104
-119 175 -153 190 -90 417 -10 510 178 31 63 33 72 33 177 0 98 -3 116 -27
167 -14 31 -45 76 -67 101 -41 44 -144 107 -175 107 -9 0 -40 25 -70 55 -29
30 -74 64 -102 76 -65 29 -164 34 -227 12z m152 -198 c16 -8 36 -30 45 -49 20
-42 61 -76 91 -76 31 0 85 -19 118 -42 90 -63 90 -242 0 -306 -70 -50 -164
-51 -231 -2 -55 39 -82 100 -82 182 0 65 -1 67 -45 109 -54 51 -63 85 -38 136
28 59 85 78 142 48z" />
            <path d="M2418 4110 c-101 -21 -218 -69 -303 -125 -87 -56 -212 -188 -265
-277 l-45 -76 -64 -4 c-57 -4 -67 -8 -92 -36 -40 -44 -39 -93 0 -133 27 -27
36 -29 108 -31 176 -5 172 -7 232 116 87 177 220 292 417 358 59 20 88 23 209
23 125 -1 149 -4 220 -28 195 -65 349 -208 421 -390 34 -85 57 -103 141 -112
193 -19 324 -95 423 -241 68 -103 95 -192 95 -314 -1 -101 -16 -163 -63 -253
-34 -65 -26 -94 49 -175 211 -230 254 -514 119 -787 -97 -197 -274 -336 -482
-379 -139 -29 -256 -16 -415 45 -55 21 -90 29 -108 25 -14 -4 -55 -37 -91 -75
-108 -114 -241 -171 -399 -171 -145 0 -261 43 -364 135 -70 62 -81 64 -196 40
-101 -21 -265 -19 -356 4 -139 36 -249 98 -350 196 -216 211 -302 495 -233
775 30 121 83 219 186 343 26 32 48 68 48 81 0 13 -9 58 -20 101 -11 43 -20
109 -20 147 0 80 -9 102 -50 123 -43 22 -76 18 -112 -14 l-33 -29 1 -109 c0
-59 5 -124 11 -144 10 -36 9 -40 -41 -106 -169 -225 -230 -504 -171 -780 84
-397 389 -706 778 -788 80 -18 274 -20 363 -4 l62 11 48 -38 c69 -52 196 -111
279 -129 92 -19 248 -19 338 1 102 22 243 93 311 155 43 39 62 50 79 46 12 -3
56 -16 97 -28 110 -32 311 -33 429 -1 339 92 591 348 667 679 28 116 23 289
-9 415 -30 114 -97 249 -165 334 l-49 60 19 42 c58 138 61 325 8 485 -89 264
-297 454 -556 506 l-86 18 -38 71 c-120 229 -336 390 -594 443 -117 24 -272
24 -388 -1z" />
            <path d="M4645 4067 c-198 -52 -323 -244 -286 -438 33 -166 144 -277 310 -310
124 -24 264 23 351 118 68 74 93 144 94 258 1 81 -2 97 -31 157 -79 168 -266
259 -438 215z m183 -214 c45 -22 81 -78 89 -141 15 -129 -115 -234 -239 -193
-51 17 -103 74 -119 128 -21 76 10 160 74 198 64 38 126 40 195 8z" />
            <path d="M1261 3426 c-87 -48 -50 -186 49 -186 51 0 100 49 100 100 0 73 -85
122 -149 86z" />
            <path d="M2567 3209 c-109 -26 -218 -114 -272 -221 -58 -117 -40 -193 51 -205
33 -4 45 -1 71 21 17 15 34 40 38 56 11 51 62 110 118 136 129 60 254 8 317
-132 34 -75 68 -94 136 -76 62 17 94 15 131 -8 53 -32 68 -64 65 -140 -1 -56
2 -72 19 -95 29 -36 64 -48 104 -35 46 15 64 39 75 101 35 189 -109 371 -306
387 -63 5 -65 6 -100 54 -96 130 -283 196 -447 157z" />
            <path d="M4725 2905 c-5 -2 -50 -9 -98 -15 -98 -14 -141 -38 -150 -87 -8 -40
16 -89 53 -108 28 -15 40 -15 143 0 135 19 164 29 182 66 27 52 11 110 -36
135 -26 13 -70 17 -94 9z" />
            <path d="M255 2657 c-45 -45 -47 -84 -6 -129 28 -32 33 -33 128 -39 158 -11
280 -10 307 2 14 7 32 27 41 46 15 31 15 40 3 71 -23 61 -49 69 -256 77 l-182
7 -35 -35z" />
            <path d="M1635 2216 c-53 -53 -56 -171 -8 -278 48 -107 164 -186 283 -192 57
-3 61 -5 88 -42 154 -212 449 -241 637 -63 62 59 125 172 125 225 0 23 -9 44
-28 65 -53 60 -142 35 -169 -47 -57 -171 -279 -214 -392 -77 -17 21 -36 53
-42 73 -15 46 -27 60 -65 76 -26 11 -40 10 -88 -2 -56 -15 -60 -14 -104 8 -62
31 -85 75 -77 145 7 56 -3 87 -39 115 -32 26 -92 23 -121 -6z" />
            <path d="M215 1744 c-168 -61 -192 -74 -205 -110 -17 -44 -11 -74 19 -105 22
-22 39 -29 67 -29 55 0 334 105 362 136 51 58 3 165 -75 164 -10 -1 -85 -25
-168 -56z" />
            <path d="M4425 1576 c-36 -36 -42 -73 -19 -114 16 -29 47 -50 189 -124 150
-78 175 -88 210 -84 53 6 85 43 85 97 0 57 -23 75 -209 168 -178 90 -215 98
-256 57z" />
            <path d="M740 1093 c-23 -9 -148 -113 -170 -141 -24 -30 -26 -84 -4 -117 9
-14 33 -30 54 -36 46 -14 58 -8 156 73 101 83 118 131 67 188 -28 30 -74 45
-103 33z" />
            <path d="M1636 859 c-35 -28 -276 -508 -276 -550 0 -18 11 -41 29 -61 24 -27
36 -33 69 -33 26 0 48 7 62 20 37 33 270 509 270 551 0 78 -93 121 -154 73z" />
            <path d="M4057 870 c-150 -38 -274 -176 -293 -327 -14 -111 38 -257 117 -328
184 -166 484 -120 597 92 83 157 58 338 -63 458 -88 89 -243 134 -358 105z
m146 -202 c111 -33 160 -177 95 -274 -38 -55 -84 -79 -153 -79 -49 0 -69 5
-97 24 -100 69 -115 203 -33 286 52 51 113 65 188 43z" />
            <path d="M2769 621 c-23 -23 -29 -38 -29 -71 0 -55 50 -380 61 -402 15 -29 68
-51 104 -44 32 6 67 37 78 69 4 10 -7 109 -23 220 -29 195 -31 203 -60 230
-42 38 -92 37 -131 -2z" />
          </g>
        </svg>
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
import WelcomeScreen from "../WelcomeScreen.vue"

export default {
  name: "ShowsOverview",
  components: {
    ShowBio,
    Header,
    WelcomeScreen,
  },
  data() {
    return {
      search: "",
      shows: [],
      filteredShows: [],
      filters: [],
      totalCount: [],
      sortTable: [],
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
          this.totalCount.push(this.shows.length);
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

 <style scoped>
 svg {
   top: 0;
   transform: translate(-50%, 0%);
   z-index: -1;
 }
 </style>