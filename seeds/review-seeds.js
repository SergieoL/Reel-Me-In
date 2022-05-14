const { Review } = require('../models');

const reviewData = [
    {
        body: "I liked it!",
        PostID: 3,
    },
    {
        body: "I'm excited for it!!",
        PostID: 1,
    },
    {
        body: "GREATEST BATMAN EVER!",
        PostID: 4,
    },
    {
        body: "I'm indifferent.",
        PostID: 2,
    },
    {
        body: "Gotta go fast!",
        PostID: 5,
    },
]

const reviewPosts = () => Review.bulkCreate(reviewData);

module.exports = reviewPosts;