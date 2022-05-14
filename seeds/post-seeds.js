const { Post } = require('../models');

const postData = [
    {
        title: "Upcoming: Bob's Burgers",
        body: "Are you excited for Bob's Burgers?",
        UserId: 3,
        id: 1
    },
    {
        title: "Doctor Strange",
        body: "What did you think?",
        UserId: 1,
        id: 2
    },
    {
        title: "Uncharted",
        body: "What did you think?",
        UserId: 2,
        id: 3
    },
    {
        title: "The Batman",
        body: "What did you think?",
        UserId: 5,
        id: 4

    },
    {
        title: "Sonic 2",
        body: "What did you think?",
        UserId: 4,
        id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;