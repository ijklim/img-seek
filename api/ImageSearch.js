module.exports = function (req) {
  let urlMappings = [];

  this.search = (searchTerm, offset = 0) => {
    // if (urlToShorten.length === 0) return { error: 'Url missing' }
    // if (!urlToShorten.match(/^http[s]?\:\/\//)) return { error: 'Invalid url' }

    // urlMappings.push(urlToShorten);

    return {
      search_term: searchTerm,
    }
  }
}