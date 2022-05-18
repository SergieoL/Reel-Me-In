const { Comment } = require('../models');

const commentData = [
    {
        body: "I liked it!",
        PostID: 3,
        UserId: 1,
    },
    {
        body: "I'm excited for it!!",
        PostID: 1,
        UserId: 5,
    },
    {
        body: "GREATEST BATMAN EVER!",
        PostID: 4,
        UserId: 4,
    },
    {
        body: "I'm indifferent.",
        PostID: 2,
        UserId: 3,
    },
    {
        body: "Gotta go fast!",
        PostID: 5,
        UserId: 2,
    },
]

const commentPosts = () => Comment.bulkCreate(commentData);

module.exports = commentPosts;