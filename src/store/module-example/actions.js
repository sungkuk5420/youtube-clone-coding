import { M } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {

  [M.CHANGE_SEARCH_STR]({ commit }, { searchStr, nextPageToken, loadingNum, youTubeResults, location }) {
    console.log('store.actions:[M.CHANGE_SEARCH_STR] searchStr= ', searchStr)
    commit(M.CHANGE_SEARCH_STR, searchStr)
    this.dispatch(M.CHANGE_SEARCH_RESULTS, { searchStr, nextPageToken, loadingNum, youTubeResults, location })
  },
  [M.CHANGE_SEARCH_RESULTS]({ commit }, data) {
    ajaxActions.queryYouTubeData(
      data,
      (results) => {
        console.log('action / CHANGE_SEARCH_RESULTS / success')
        console.log('results= ', results)
        commit(M.CHANGE_SEARCH_RESULTS, results)
        commit(M.CHANGE_NEXT_PAGE_TOKEN, results.data.nextPageToken)
      },
      (res) => {
        // console.log('action / CHANGE_SEARCH_RESULTS / error', res)
        commit(M.CHANGE_SEARCH_RESULTS)
      }
    )
  },

  [M.CHANGE_LOCATION]({ commit }, locationStr) {
    console.log('store.actions:[M.CHANGE_LOCATION] str= ', locationStr)
    commit(M.CHANGE_LOCATION, locationStr)
  },

  [M.OPEN_PLAYER]({ commit }, settings) {
    console.log('store.actions:[M.OPEN_PLAYER] str= ', settings)
    console.log('settings= ', settings)
    commit(M.OPEN_PLAYER, settings)
  },

  [M.CHANGE_PLAYER_SIZE]({ commit }, settings) {
    console.log('store.actions:[M.CHANGE_PLAYER_SIZE] str= ', settings)
    console.log('settings= ', settings)
    commit(M.CHANGE_PLAYER_SIZE, settings)
  }
};
