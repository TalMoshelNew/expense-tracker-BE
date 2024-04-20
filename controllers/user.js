const User = require('../models/User'); // Import the User model

// Controller function to create a new user
async function createUser(req, res) {
    try {
        const { firstName, lastName, email } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const newUser = new User({
            firstName,
            lastName,
            email
        });

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { createUser };