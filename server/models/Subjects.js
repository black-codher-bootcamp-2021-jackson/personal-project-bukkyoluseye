const mongoose = require('mongoose');
const { Schema } = mongoose;

const subjectsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    level: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('subject', subjectsSchema, 'Subjects');
