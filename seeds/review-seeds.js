const { Review } = require('../models');

const reviewData = [
    {
        movieTitle: "Bob's Burgers: The Movie",
        reviewTitle: "Upcoming: Bob's Burgers",
        content: "Are you excited for Bob's Burgers?",
        user_id: 3,
        id: 1
    },
    {
        movieTitle: "Doctor Strange",
        reviewTitle: "A strange one",
        content: "I liked it!",
        user_id: 1,
        id: 2
    },
    {
        movieTitle: "Uncharted",
        reviewTitle: "I'm indifferent.",
        content: "What did you think?",
        user_id: 2,
        id: 3
    },
    {
        moveieTitle: "The Batman",
        reviewTitle: "GREATEST BATMAN EVER!",
        content: "What did you think?",
        user_id: 5,
        id: 4

    },
    {
        movieTitle: "Sonic 2",
        reviewTitle: "Golden rings!",
        content: "Gotta go fast!",
        user_id: 4,
        id: 5
    }
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;