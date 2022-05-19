const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "The-Coding-Bat",
        password: "p@ssword1"
    },
    {
        id: 2,
        username: "KingTed",
        password: "p@ssword2"
    },
    {
        id: 3,
        username: "MatthewJ",
        password: "p@ssword3"
    },
    {
        id: 4,
        username: "BatMattWhoLaughs",
        password: "p@ssword4"
    },
    {
        id: 5,
        username: "HisLordship",
        password: "p@ssword5"
    },
    {
        id: 6,
        username: "JakeFromStateFarmReal",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;