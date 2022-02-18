const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
    content: String,
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
    timestamps: true,
});

module.exports = mongoose.model('message', messageSchema, 'Messages');