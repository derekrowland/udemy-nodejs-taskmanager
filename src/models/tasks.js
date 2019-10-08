const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: [true, 'You must provide a description'],
        trim: true
    }, 
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = Task