<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%; height: 100%; overflow: auto;">
      <q-infinite-scroll @load="refresher" :offset="0">
        <div v-for="item in youTubeResults" :key="item.id" class="q-item q-item-division relative-position">
          <div class="q-item-main q-item-section flex items-center column">
            <div class="row item-card-custom" v-on:click="openPlayer(item.id, item.videoWidth, item.videoHeight)">
              <div class="col-5">
                <img :src="item.thumb || ''" class="full-width" />
              </div>
              <div class="col-7" style="word-wrap: break-word;">
                <q-item-tile label>
                  <p class="ellipsis">{{ item.title }}</p>
                </q-item-tile>
                <q-item-tile sublabel>
                  <p class="ellipsis">{{ item.body }}</p>
                </q-item-tile>
              </div>
            </div>
          </div>
        </div>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script>
import ComputedMixin from "../ComputedMixin";
import UtilMethodMixin from "../UtilMethodMixin";
import { mapGetters } from "vuex";
import { M } from "../store/module-example/types";
export default {
  mixins: [ComputedMixin, UtilMethodMixin],
  mounted() {
    // this.showLoading();
    this.refresher();
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapGetters({
      youTubeResults: "getYouTubeResults",
      nextPageToken: "getNextPageToken",
      searchStr: "getSearchStr",
      loadingNum: "getLoadingNum",
      location: "getLocation",
    }),
  },
  methods: {
    refresher(index, done) {
      let thisObj = this;
      if (!thisObj.timer) {
        thisObj.timer = setTimeout(function () {
          thisObj.timer = null;
          if (thisObj.youTubeResults.length == 0 || thisObj.nextPageToken) {
            thisObj.$store.dispatch(
              M.CHANGE_SEARCH_STR,
              {
                searchStr: thisObj.searchStr,
                nextPageToken: thisObj.nextPageToken,
                loadingNum: thisObj.loadingNum,
                youTubeResults: thisObj.youTubeResults,
                location: thisObj.location,
              }
            );
          }
          done();
        }, 2000);
      }
    },
    openPlayer(videoId, videoWidth, videoHeight) {
      const settings = {
        videoId: videoId,
        videoWidth: videoWidth,
        videoHeight: videoHeight,
        respomsiveMode: "widthMode",
        iframeWidth: "",
        iframeHeight: "",
      };
      this.$store.dispatch(M.OPEN_PLAYER, settings);
      this.$router.push(`/player?playerId=${videoId}`)
    },
  },
};
</script>
