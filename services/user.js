const User = require('../models/User');

async function createUser(firstName, lastName, email) {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email already in use');
        }

        const newUser = new User({
            firstName,
            lastName,
            email
        });

        await newUser.save();

        return newUser;
    } catch (error) {
        throw error;
    }
}

module.exports = { createUser };