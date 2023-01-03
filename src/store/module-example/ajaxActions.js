import axios from "axios";

export const ajaxActions = {
  queryYouTubeData(data, cSuccess, cError) {
    let options = {
      apikey: 'AIzaSyBL68pxfwaGiWUWDImb8Z-hwTaq-YaPkzo',
      encoded: encodeURI(data.searchStr),
      url() {
        console.log('data.searchStr!!! : ' + data.searchStr)
        console.log('data.nextPageToken!!! : ' + data.nextPageToken)

        let apiURL = ''
        if (data.searchStr === '') {
          apiURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=${data.loadingNum}&key=${options.apikey}`
        }
        else {
          // search
          apiURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.apikey}&q=${options.encoded}&type=video&maxResults=${data.loadingNum}`
        }
        let nextPage = data.nextPageToken ? '&pageToken=' + data.nextPageToken : ''
        if (nextPage !== '') {
          apiURL += nextPage
        }
        let location = data.location !== '' ? data.location : ''
        if (location !== '') {
          apiURL += location
        }

        console.log(apiURL)
        return apiURL
      }
    }
    if (data.youTubeResults.length != 0 && !data.nextPageToken) {
      return false;
    }
    console.log("api call!!")
    let api = axios.create()
    // console.log('url= ', options.url())
    axios.all(
      [
        api.get(options.url())
      ]
    ).then(
      (responses) => {
        // console.log(responses)
        let errors = responses.filter((res) => {
          return res.status !== 200
        })
        if (errors.length < 1) {
          // console.log('200 response= ', responses[0])
          cSuccess(responses[0])
        }
        else {
          let errmsgs = errors.reduce((memo = '', res) => {
            return memo + `${res.status} : ${res.message}\n`
          }, '')
          console.warn(errmsgs)
        }
      }
    )
  }
};
