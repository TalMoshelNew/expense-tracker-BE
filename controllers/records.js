const recordsService = require('../services/records');
console.log()
async function createRecordsForUser(userId) {
    try {
        const userRecords = await recordsService.createRecords(userId);
        console.log('User records created:', userRecords);
    } catch (error) {
        throw error;
    }
}

module.exports = {createRecordsForUser}