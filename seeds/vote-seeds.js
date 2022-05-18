const { Vote } = require('../models');

const voteData = [
    {
        thumbsUp: true,
        review_id: 5
    },
    {
        thumbsUp: false,
        review_id: 2
    },
    {
        thumbsUp: true,
        review_id: 1
    },
    {
        thumbsUp: false,
        review_id: 3
    },
    {
        thumbsUp: true,
        review_id: 4
    }
]

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;