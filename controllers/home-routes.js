const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

// router.get('/', (req, res) => {
//   res.render('homepage', {
//     posts,
//     loggedIn: req.session.loggedIn
//   });
// });


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