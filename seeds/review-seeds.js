const { Review } = require('../models');

const reviewData = [
    {
        title: "Upcoming: Bob's Burgers",
        body: "Are you excited for Bob's Burgers?",
        user_id: 3,
        id: 1
    },
    {
        title: "Doctor Strange",
        body: "What did you think?",
        user_id: 1,
        id: 2
    },
    {
        title: "Uncharted",
        body: "What did you think?",
        user_id: 2,
        id: 3
    },
    {
        title: "The Batman",
        body: "What did you think?",
        user_id: 5,
        id: 4

    },
    {
        title: "Sonic 2",
        body: "What did you think?",
        user_id: 4,
        id: 5
    }
]

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;