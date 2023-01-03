export const getters = {

    getYouTubeResults(state) {
        console.log(state.youTubeResults)
        return state.youTubeResults.map((item) => {
            return {
                title: item.title,
                body: item.description,
                id: item.id.videoId || item.id,
                videoWidth: item.thumbnails.medium.width,
                videoHeight: item.thumbnails.medium.height,
                thumb: item.thumbnails.medium.url
            }
        })
    },
    getSearchStr(state) {
        // console.log('state.searchResults= ', state.searchResults)
        return state.searchStr
    },
    getPlayerSettings(state) {
        return state.playerSettings
    },
    getNextPageToken(state) {
        return state.nextPageToken
    },
    getLocation(state) {
        return state.location
    },
    getLoadingNum(state) {
        return state.loadingNum
    }
};