const { User } = require('../models');

const userData = [
    {
        "username": "John",
        "password": "12345678"
    },
    {
        "username": "Steve",
        "passowrd": "87654321"
    }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;