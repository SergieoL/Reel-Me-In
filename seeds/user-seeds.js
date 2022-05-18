const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: "The-Coding-Bat",
        twitter: "IDontHaveOne",
        github: "The-Coding-Bat",
        email: "tedmjablonowski@gmail.com",
        password: "p@ssword1"
    },
    {
        id: 2,
        username: "KingTed",
        twitter: "KOKTED12345",
        github: "KOKTED12345",
        email: "KOKTED@gmail.com",
        password: "p@ssword2"
    },
    {
        id: 3,
        username: "MatthewJ",
        twitter: "MJ10101",
        github: "Matthewx1x2",
        email: "Mattx1x2@gmail.com",
        password: "p@ssword3"
    },
    {
        id: 4,
        username: "BatMattWhoLaughs",
        twitter: "BatMattWhoLaughs",
        github: "BatMattWhoLaughs",
        email: "BatMattWhoLaughs@gmail.com",
        password: "p@ssword4"
    },
    {
        id: 5,
        username: "HisLordship",
        twitter: "HisLordship",
        github: "HisLordship",
        email: "HisLordship@gmail.com",
        password: "p@ssword5"
    },
    {
        id: 6,
        username: "JakeFromStateFarmReal",
        twitter: "JakeFromStateFarmReal",
        github: "JakeFromStateFarmReal",
        email: "JakeFromStateFarmReal@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;