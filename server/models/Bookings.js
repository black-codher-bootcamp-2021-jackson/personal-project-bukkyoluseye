const mongoose = require('mongoose')
let validator = require('validator')
const { Schema } = mongoose

require('./StudentProfile')
require('./TutorProfile')

const bookingsSchema = new Schema({
    tutorName: {
        type: Schema.Types.ObjectId,
        ref: 'TutorProfile',
        required: false,
    },
    studentName: {
        type: Schema.Types.ObjectId,
        ref: 'StudentProfile',
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    booking: {
        type: Date,
        required: true
    },
    lessonsBooked: {
        type: Number
    },
    lessonsHad: {
        type: Number
    }
})

mongoose.model('Bookings', bookingsSchema)
