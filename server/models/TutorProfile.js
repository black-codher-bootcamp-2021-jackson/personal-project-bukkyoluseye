const mongoose = require('mongoose');
// let validator = require('validator')
const { Schema } = mongoose;

const nameSchema = new Schema({
    first: {
        type: String,
        required: [true, 'Please enter your first name'],
    },

    last: {
        type: String,
        required: [false],
    },
});

const subjectDetailsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    level: {
        type: String,
        required: true,
    },

    examBoard: {
        type: String,
    },
});

const tutorProfileSchema = new Schema({
    name: {
        type: nameSchema,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    pronouns: {
        type: String,
        required: false,
    },
    subject: {
        type: [subjectDetailsSchema],
        required: false,
    },
    availableToBook: {
        type: Boolean,
        required: false,
    },
});

module.exports = mongoose.model('tutorprofile', tutorProfileSchema, "TutorProfiles");
