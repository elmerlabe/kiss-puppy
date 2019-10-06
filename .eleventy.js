module.exports = function(e) {
    e.addPassthroughCopy('static');

    e.addCollection("posts", function(collection) {
        return collection.getFilteredByTag("post").reverse();
    });

    return {
        passthroughFileCopy: true
    };
};