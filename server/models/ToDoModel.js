const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema( {
    text: {
        type: String,
        require: true
    },

    status: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('ToDo01', toDoSchema)