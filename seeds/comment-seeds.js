const { Comment } = require('../models');

const commentData = [
    {
        body: "I liked it!",
        review_id: 3,
        user_id: 1,
    },
    {
        body: "I'm excited for it!!",
        review_id: 1,
        user_id: 5,
    },
    {
        body: "GREATEST BATMAN EVER!",
        review_id: 4,
        user_id: 4,
    },
    {
        body: "I'm indifferent.",
        review_id: 2,
        user_id: 3,
    },
    {
        body: "Gotta go fast!",
        review_id: 5,
        user_id: 2,
    },
]

const commentPosts = () => Comment.bulkCreate(commentData);

module.exports = commentPosts;