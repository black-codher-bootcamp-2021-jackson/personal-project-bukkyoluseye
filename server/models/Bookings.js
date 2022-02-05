const mongoose = require('mongoose');
// let validator = require('validator')
const { Schema } = mongoose

require('./StudentProfile')
require('./TutorProfile')

//Add subject details

const bookingsSchema = new Schema({
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: 'TutorProfile',
        required: false,
    },
    studentId: {
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
    },
    cancelled: {
        type: Boolean,
        required: false
    },
    completed: {
        type: Boolean,
        required: false
    }

})

mongoose.model('Bookings', bookingsSchema)
