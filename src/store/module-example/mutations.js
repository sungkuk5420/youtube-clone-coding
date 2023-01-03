import { M } from "./types";

export const mutations = {

  [M.CHANGE_SEARCH_STR](state, str) {
    state.loadingNum = 30
    if (str !== state.searchStr) {
      state.youTubeResults = []
      state.nextPageToken = ''
      state.loadingNum = 30
    }
    state.searchStr = str

    // console.log('mutation commit: [M.CHANGE_SEARCH_STR] state.searchStr= ', state.searchStr)
  },
  [M.CHANGE_SEARCH_RESULTS](state, res) {
    // console.log('res.data.items= ', res.data.items)
    console.log(res)
    let newYouTubeResults = res.data.items.map((item) => {
      item.snippet.id = item.id
      return item.snippet
    })
    console.log(state.youTubeResults.length)
    console.log(newYouTubeResults.length)
    state.youTubeResults = state.youTubeResults.concat(newYouTubeResults)

    console.log(state.youTubeResults.length)
    // console.log('mutation commit: [M.CHANGE_SEARCH_RESULTS] state.youTubeResults= ', state.youTubeResults)
  },

  [M.CHANGE_LOCATION](state, locationStr) {
    // locationStr ko, jp, all
    let changeLocation = ''
    switch (locationStr) {
      case 'ko':
        console.log(state.searchStr)
        if (state.searchStr !== '') {
          changeLocation = '&location=36.868730, 127.508638&locationRadius=400km'
        }
        else {
          changeLocation = '&regionCode=KR'
        }
        break
      case 'jp':
        if (state.searchStr !== '') {
          changeLocation = '&location=35.053765, 140.310276&locationRadius=999km'
        }
        else {
          changeLocation = '&regionCode=JP'
        }
        break
      case 'all':
        changeLocation = ''
        break
      default:
        changeLocation = ''
        break
    }

    state.location = changeLocation
    state.youTubeResults = []
    state.nextPageToken = ''
    state.loadingNum = 30
    console.log('changelocation !!')
    this.dispatch(M.CHANGE_SEARCH_RESULTS)
  },

  [M.OPEN_PLAYER](state, settings) {
    console.log('settings= ', settings)
    state.playerSettings = settings
    console.log('mutation commit: [M.OPEN_PLAYER] state.playerSettings= ', state.playerSettings)
  },

  [M.CHANGE_PLAYER_SIZE](state, settings) {
    console.log('settings= ', settings)
    state.playerSettings.iframeWidth = settings.iframeWidth
    state.playerSettings.iframeHeight = settings.iframeHeight
    state.playerSettings.respomsiveMode = settings.respomsiveMode
  },
  [M.CHANGE_NEXT_PAGE_TOKEN](state, nextPageToken) {
    console.log('nextPageToken= ', nextPageToken)
    state.nextPageToken = nextPageToken
  }
};
