const { Comment } = require('../models');

const commentData = [
    {
        body: "I liked it!",
        review_id: 3,
        UserId: 1,
    },
    {
        body: "I'm excited for it!!",
        review_id: 1,
        UserId: 5,
    },
    {
        body: "GREATEST BATMAN EVER!",
        review_id: 4,
        UserId: 4,
    },
    {
        body: "I'm indifferent.",
        review_id: 2,
        UserId: 3,
    },
    {
        body: "Gotta go fast!",
        review_id: 5,
        UserId: 2,
    },
]

const commentPosts = () => Comment.bulkCreate(commentData);

module.exports = commentPosts;