const mongoose = require('mongoose');
const { Schema } = mongoose;

require('./StudentProfile');
require('./TutorProfile');

//Add subject details

const bookingsSchema = new Schema({
    tutorId: {
        type: Schema.Types.ObjectId,
        ref: 'tutorprofile',
        required: false,
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'studentprofile',
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    booking: {
        type: Date,
        required: true,
    },
    cancelled: {
        type: Boolean,
        required: false,
    },
    completed: {
        type: Boolean,
        required: false,
    },
});

module.exports = mongoose.model('Bookings', bookingsSchema, "Bookings");
