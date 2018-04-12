const axios = require("axios");

module.exports = function (req) {
  this.search = async ({
    apiKey,
    offset = 0,
    searchTerm,
  }) => {
    // Ref: https://pixabay.com/api/docs/
    let url = '' +
      'https://pixabay.com/api?' +
      `key=${apiKey}&` +
      `q=${searchTerm}&` +
      (offset > 0 ? `page=${+offset + 1}&` : '') +
      `per_page=10&` +
      '';

    return await axios
      .get(url)
      .then(json => {
        if (json.data.totalHits === 0) {
          return {
            message: `No image found under ${searchTerm}`,
          }
        }

        return json.data.hits.map(hit => ({
          url: hit.largeImageURL,
          snippet: hit.tags,
          thumbnail: hit.previewURL,
          context: hit.pageURL,
        }));
      })
      .catch(error => ({
        error: error
      }));
  }
}