// user.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    transactions: {
        type: {
            year: {
                type: Object, // Object to store years
                required: true,
                default: () => {
                    const currentDate = new Date();
                    const currentYear = currentDate.getFullYear().toString();
                    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
                    return {
                        [currentYear]: {
                            [currentMonth]: []
                        }
                    };
                }
            }
        }
    }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;