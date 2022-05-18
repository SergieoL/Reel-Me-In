const { Review, Comment, User } = require('../models');
const sequelize = require('../config/connection');
const router = require('express').Router();

// get all reviews for homepage
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
  .then(dbReviewData => {
    const reviews = dbReviewData.map(review => review.get({ plain: true }));
    res.render('homepage', {
      reviews
    });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/create-account', (req, res) => {
  res.render('create-account');
});

router.get('/single-post', (req, res) => {
  res.render('single-post');
})

module.exports = router;