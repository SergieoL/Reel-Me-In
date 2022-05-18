const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I liked it!",
        review_id: 3,
        user_id: 1,
    },
    {
        comment_text: "I'm excited for it!!",
        review_id: 1,
        user_id: 5,
    },
    {
        comment_text: "GREATEST BATMAN EVER!",
        review_id: 4,
        user_id: 4,
    },
    {
        comment_text: "I'm indifferent.",
        review_id: 2,
        user_id: 3,
    },
    {
        comment_text: "Gotta go fast!",
        review_id: 5,
        user_id: 2,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;