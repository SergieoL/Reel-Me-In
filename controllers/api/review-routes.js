const router = require('express').Router();
const { Review, User, Comment } = require('../../models');

// get all reviews
router.get('/', (req, res ) => {
    Review.findAll({
        order: [['created_at', 'DESC']],
        // include user that created the review
        include: [
            {
                model: User,
                attributes: ['username']
            },
            // includes all comments and user that posted them
            {
                model: Comment,
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// add a review
router.post('/', (req, res) => {
    Review.create({
        movieTitle: req.body.movieTitle,
        reviewTitle: req.body.reviewTitle,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(dbReviewData => res.json(dbReviewData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// find review by id
router.get('/:id', (req, res) => {
    Review.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No review with this id found'});
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// delete a review
router.delete('/:id', (req, res) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReviewData => {
        if (!dbReviewData) {
            res.status(404).json({ message: 'No review with this id found'});
            return;
        }
        res.json(dbReviewData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;