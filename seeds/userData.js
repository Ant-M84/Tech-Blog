const { User } = require('../models');

const userData = [
    {
        username: "John",
        password: "password"
    },
    {
        username: "Steve",
        password: "password"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;