const {DateTime} = require('luxon');

module.exports = function(e) {
    e.addPassthroughCopy('static');
    e.addPassthroughCopy('admin');
    e.addPassthroughCopy('pages');

    e.addCollection("posts", function(collection) {
        return collection.getFilteredByTag("post").reverse();
    });

    e.addFilter("readableDate", function(dateObj) {
        return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
    });

    e.addFilter("head", function(array, n) {
        return array.slice(0, n);
    });

    return {
        passthroughFileCopy: true
    };
};