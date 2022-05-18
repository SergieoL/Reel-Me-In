const seedComment = require('./comment-seeds');
const seedUsers = require('./user-seeds');
const seedReview = require('./review-seeds');
const seedVotes = require('./vote-seeds')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedReview();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedComment();
    console.log('\n----- REVIEWS SEEDED -----\n');

await seedVotes();
    console.log('\n----- VOTES SEEDED -----\n');

  process.exit(0);
};

seedAll();