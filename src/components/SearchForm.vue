<template>
  <div class="search-form">
    <div class="search-bar-wrapper">
      <input type="text" placeholder="Search" v-model="text" @input="search" style="width:100%" />
      <q-btn icon="search" class="text-primary search-button" />
      <q-btn class="text-primary record-icon" dense flat round icon="mic" @click="$emit('click-drawer-icon')" />
    </div>
  </div>
</template>

<script>
import { M } from "../store/module-example/types"
import { mapGetters } from "vuex";
export default {

  data() {
    return {
      text: "",
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
    search() {
      console.log(this.text)
      let thisObj = this;
      thisObj.$store.dispatch(
        M.CHANGE_SEARCH_STR,
        {
          searchStr: thisObj.text,
          nextPageToken: thisObj.nextPageToken,
          loadingNum: thisObj.loadingNum,
          youTubeResults: thisObj.youTubeResults,
          location: thisObj.location,
        }
      );
    },
    changeLocation(locationStr) {
      this.$store.dispatch(M.CHANGE_LOCATION, locationStr);
    },
  },

};
</script>

<style lang="scss">
svg {
  width: 100px;
}

.search-form {
  max-width: 675px;
  flex: 2;
}

.q-btn--dense.q-btn--round.record-icon {
  &>* {
    height: 30px;
    padding: 0;
    margin: 0;
    min-height: 30px;
  }

  .q-btn__wrapper {
    min-height: 30px;
    height: 30px;
  }

  .q-focus-helper {
    display: none !important;
  }
}

.search-bar-wrapper {
  margin: 0 0 0 40px;
  height: 30px;
  display: flex;

  input {
    color: #111111;
    font-family: "Roboto", "Noto", sans-serif;
    font-size: 16px;
    border: 1px solid #ccc;
    height: 100%;
    padding: 0 0 0 10px;
    border-right: none;
    flex: 1;

    &:active,
    &:focus {}
  }

  .search-button {
    width: 65px;
    height: 100%;
    border: none;
    box-shadow: none;
    border-left: 1px solid #ccc;
    background: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;

    &>* {
      height: 100%;
      padding: 0;
      margin: 0;
      flex: none;
      height: 30px;
      min-height: auto;
    }

    .q-btn__wrapper:before {
      display: none;
      border: none;
      box-shadow: none;
    }

    .q-btn__wrapper,
    .q-btn__content {
      min-height: auto;
    }
  }
}
</style>