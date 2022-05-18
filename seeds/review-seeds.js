const { Review } = require('../models');

const reviewData = [
    {
        movieTitle: "Bob's Burgers",
        reviewTitle: "Looks hilarious!",
        content: "Are you excited for Bob's Burgers?",
        user_id: 3,
        id: 1
    },
    {
        movieTitle: "Doctor Strange",
        reviewTitle: "Marvel has some fun ideas!",
        content: "What did you think?",
        user_id: 1,
        id: 2
    },
    {
        movieTitle: "Uncharted",
        reviewTitle: "Yes or no?",
        content: "What did you think?",
        user_id: 2,
        id: 3
    },
    {
        movieTitle: "The Batman",
        reviewTitle: "What a thrilling movie...",
        content: "What did you think?",
        user_id: 5,
        id: 4

    },
    {
        movieTitle: "Sonic 2",
        reviewTitle: "Sonic 2 is a great sequel!",
        content: "What did you think?",
        user_id: 4,
        id: 5
    }
]

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;