const { Post } = require('../models');

const postData = [
    {
        title: "Upcoming: Bob's Burgers",
        post_content: "Looking forward to this!",
        user_id: 3
    },
    {
        title: "Doctor Strange",
        post_content: "Is Marvel running out of ideas?",
        user_id: 1
    },
    {
        title: "Uncharted",
        post_content: "Don't watch if you're a fan of the game series!",
        user_id: 2

    },
    {
        title: "The Batman 9/10",
        post_content: "Batman is great!",
        user_id: 5
    },
    {
        title: "Sonic 2 is a fun ride!",
        post_content: "If you're a Sonic fan, see this movie!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;