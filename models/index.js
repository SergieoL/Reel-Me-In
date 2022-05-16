const User = require('./User');
const Post = require('./Post');
const Review = require('./Review');
const Vote = require('./Vote')

Post.belongsTo(User, {
    foreignKey: 'UserId',
    onDelete: "CASCADE"
})

Post.hasMany(Review, {
    foreignKey: 'PostID',
    onDelete: 'CASCADE'
})

Review.belongsTo(User, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE'
})

Post.hasOne(Vote, {
    foreignKey: 'PostID',
    onDelete: 'CASCADE'
})

module.exports = { User, Review, Post, Vote };
