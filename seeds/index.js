const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
  await seedPosts();
    console.log('\n----- POSTS SEEDED -----\n');

  await seedReviews();
    console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();