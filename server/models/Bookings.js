const mongoose = require('mongoose');
const { Schema } = mongoose;

require('./StudentProfile');
require('./TutorProfile');

const gradeSchema = new Schema({
    current: {
        type: String,
        required: false,
    },
    target: {
        type: String,
        required: true,
    },
});

const bookingsSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
    },
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
    date: {
        type: Date,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    examBoard: {
        type: String,
        required: true,
    },
    tier: { type: String },
    grade: {
        type: gradeSchema,
    },
    type: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
        default: 'Awaiting Confirmation',
    },
    cancelled: {
        type: Boolean,
        required: false,
        default: false,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false,
    },
});

module.exports = mongoose.model('booking', bookingsSchema, 'Bookings');
