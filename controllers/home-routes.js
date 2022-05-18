const { Review, Comment, User } = require('../models');
const sequelize = require('../config/connection');
const router = require('express').Router();

// get all reviews for homepage
router.get('/', (req, res) => {
    console.log(req.session);

    Review.findAll({
        attributes: [
            'content',
            'movieTitle',
            'reviewTitle',
            'created_at',
            'id'
        ],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'review_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbReviewData => {
        const reviews = dbReviewData.map(review => review.get({ plain: true}));
        res.render('homepage', {
             reviews,
             loggedIn: req.session.loggedIn
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
      review,
      loggedIn: req.session.loggedIn
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// render create a review page
router.get('/create-review', (req, res) => {
  res.render('create-review');
})


module.exports = router;