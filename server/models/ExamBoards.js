const mongoose = require('mongoose')
const { Schema } = mongoose

const examBoardSchema = new Schema({
    examBoard: {
        type: String
    },
    website: {
        type: String
    },
})

mongoose.model('ExamBoards',examBoardSchema)
