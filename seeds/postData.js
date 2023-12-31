const { Post } = require('../models');

const postData = [
    {
        "title": "First Post!",
        "content": "This is the first post for the blog.",
        "userId": 1
    },
    {
        "title": "Second Post!",
        "content": "This is the second post for the blog.",
        "userId": 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;