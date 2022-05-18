// importd Models and exports as objects with it as a property
const Comment = require('./Comment');
const User = require('./User');
const Review = require('./Review');
const Vote = require('./Vote');

// create associations

// a user can have many reviews
User.hasMany(Review, {
    foreignKey: 'user_id'
});

// a review can only have one user
Review.belongsTo(User, {
    foreignKey: 'user_id'
});

// a comment can only have one user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// a comment can only belong to one review
Comment.belongsTo(Review, {
    foreignKey: 'review_id'
})

// a user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// a review can have many comments
Review.hasMany(Comment, {
    foreignKey: 'review_id'
})

module.exports = { User, Review, Comment, Vote };
