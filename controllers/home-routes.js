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

// render page to load single review
router.get('/review/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: User,
      }
    ],
    include: [
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
    if (!dbReviewData) {
      res.status(404).json({ message: 'No review found with this id'});
      return;
    }

    const review = dbReviewData.get({ plain: true});
    console.log(review);
    res.render('single-post', {
      review
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// render create a review page
router.get('/create-review', (req, res) => {
  res.render('/create-review');
})


module.exports = router;