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
        required: [true, 'Please enter your last name'],
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
        validate: (value) => {
            return validator.isEmail(value);
        },
    },
    // password: {
    //     type: String,
    //     required: true,
    // },
    pronouns: {
        type: String,
        required: false,
    },
    subject: {
        type: [subjectDetailsSchema],
        required: true,
    },
    availableToBook: {
        type: Boolean,
        required: true,
    },
});


mongoose.model('TutorProfile', tutorProfileSchema);
