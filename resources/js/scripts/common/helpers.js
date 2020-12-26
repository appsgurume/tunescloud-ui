/**
 * Common helpers module
 */

/**
 * Get converted videos list
 * @param page
 * @param count
 * @param term
 * @param isInitPull
 * @param nextPageUrl
 * @returns {Promise<unknown>} as a list of converted videos
 */
function getConvertedVideos(page = 1, count = 10, term = null, isInitPull = true, nextPageUrl = null){
    let endpointUrl = isInitPull ? '/v1/video?'+'page='+page+'&per_page='+count : nextPageUrl +'&per_page='+count;

    endpointUrl = term ? endpointUrl + "&search_term=" + term : endpointUrl;

    return new Promise(function(resolve, reject){
        axios.get(endpointUrl).then((response)=>{
            resolve(response.data);
            console.log("From promise");
            console.log(response.data);
        }).catch((err)=>{
           reject(err);
        })
    })
}

/**
 * detect if the text is arabic
 * @param text
 * @returns {boolean}
 */
function isArabic(text){
    let arabic = /[\u0600-\u06FF]/;
    return arabic.test(text);
}


module.exports.getConvertedVideos = getConvertedVideos;
module.exports.isArabic = isArabic;
