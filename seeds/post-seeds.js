const { Post } = require('../models');

const postData = [
    {
        title: "Upcoming: Bob's Burgers",
        post_content: "Are you excited for Bob's Burgers?",
        user_id: 3
    },
    {
        title: "Doctor Strange",
        post_content: "What did you think?",
        user_id: 1
    },
    {
        title: "Uncharted",
        post_content: "What did you think?",
        user_id: 2

    },
    {
        title: "The Batman",
        post_content: "What did you think?",
        user_id: 5
    },
    {
        title: "Sonic 2",
        post_content: "What did you think?",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;