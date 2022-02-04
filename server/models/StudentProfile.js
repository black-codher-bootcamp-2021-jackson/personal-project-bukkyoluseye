const mongoose = require('mongoose')
let validator = require('validator')
const { Schema } = mongoose

const studentProfileSchema = new Schema({
    name: {
        type: nameSchema,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true },
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        },
    },
    // password: {
    //     type: String,
    //     required: true
    // },
    year: {
        type: String,
        required: true,
    },
    pronouns: {
        type: String,
        required: false
    },
    subject: {
        type: [studentSubjectDetailsSchema],
        required: true
    },
    availableToBook: {
        type: Boolean,
        required: true
    }
})

const nameSchema = new Schema({
    first: {
        type: String,
        required: [true, 'Please enter your first name']
    },

    last: {
        type: String,
        required: [true, 'Please enter your last name']
    }
})

const studentSubjectDetailsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    examBoard: {
        type: String,
        required: false
    },
    tier: {
        type: String,
        required: false
    },
    grade: {
        type: gradeSchema,
        required: true
    }
})

const gradeSchema = new Schema({
    current: {
        type: String,
        required: false
    },
    target: {
        type: String,
        required: true
    }
})

mongoose.model('StudentProfiles', studentProfileSchema)


