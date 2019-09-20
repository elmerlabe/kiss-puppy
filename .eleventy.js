module.exports = function(e) {
    e.addPassthroughCopy('static');
    return {
        templateFormats: ['njk', 'css']
    };
}